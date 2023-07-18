"use client";
import { useState } from "react";
import { Button } from "../../components";
import { SessionCard } from "../../components/SessionCard";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBlock } from "../../components/ErrorBlock";

export type SessionType = { title: string; subtitle: string; error: boolean };

const sessionList: SessionType[] = [
  {
    title: "Welcome Ben to the Production Team",
    subtitle: "Welcome new teammates",
    error: false,
  },
  {
    title: "Marketing Team Building",
    subtitle: "Work better together",
    error: false,
  },
  {
    title: "Marketing Team Building",
    subtitle: "Work better together",
    error: true,
  },
];

export default function Page() {
  const [sessions, setSessions] = useState<SessionType[]>([]);

  function createSession(session: SessionType) {
    const prevSessions = sessions;
    setSessions(prevSessions.concat(session));
  }

  if (sessions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full gap-24 h-full box-border">
        <h1 className="text-center text-2xl">Let's get the team talkin'!</h1>
        <div className="flex flex-col items-center justify-center w-full gap-10 box-border">
          <img
            className="w-[312px]"
            src="/illustration-group.png"
            alt="Illustrated graphic of 3 person talking"
          />
          <Button
            iconRight={<p className="text-2xl pb-[2px]">+</p>}
            color={"primaryGreen"}
            fullWidth={false}
            extendClass="py-2 px-4"
            onClick={() => {
              createSession(sessionList[Math.floor(Math.random() * 3)]);
            }}
          >
            New Session
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center w-full gap-24 h-full box-border">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-bold text-3xl">My Sessions</h1>
          <Button
            iconRight={<p className="text-2xl pb-[2px]">+</p>}
            color={"primaryGreen"}
            fullWidth={false}
            extendClass="py-2 px-4"
            onClick={() => {
              createSession(sessionList[Math.floor(Math.random() * 3)]);
            }}
          >
            New Session
          </Button>
        </div>
        <div className="flex w-full flex-col gap-5 h-full">
          <ErrorBlock>
            {sessions.map((session) => {
              return <SessionCard key={session.title} session={session} />;
            })}
          </ErrorBlock>
        </div>
      </div>
    );
  }
}
