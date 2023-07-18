"use client";

import { SidebarButton } from "./SidebarButton";

export function Sidebar({ active }: { active: string }) {
  return (
    <div className="flex flex-col bg-p-y-100 min-w-[280px] p-6 gap-8">
      <img
        src={"/tt-logo.png"}
        alt="Team Talk Logo"
        aria-hidden="true"
        className="w-[97px]"
      />
      <p className="text-base font-bold">Acme Corporation</p>
      <div className="flex justify-between flex-col gap-8 h-full">
        <div>
          <SidebarButton
            isActive={active === "session"}
            icon={
              <img
                className="w-icon-lg"
                src="/icon-mysessions.png"
                alt="My session icon"
                aria-hidden="true"
              />
            }
          >
            My Session
          </SidebarButton>
          <SidebarButton
            icon={
              <img
                className="w-icon-lg"
                src="/perm_identity_24px.png"
                alt="Hosts icon"
                aria-hidden="true"
              />
            }
          >
            Hosts
          </SidebarButton>
          <SidebarButton
            icon={
              <img
                className="w-icon-lg"
                src="/chrome_reader_mode_24px.png"
                alt="Question library icon"
                aria-hidden="true"
              />
            }
          >
            Question Library
          </SidebarButton>
          <SidebarButton
            icon={
              <img
                className="w-icon-lg"
                src="/analytics_24px.png"
                alt="Analytics icon"
                aria-hidden="true"
              />
            }
          >
            Analytics
          </SidebarButton>
        </div>
        <div>
          <SidebarButton
            icon={
              <img
                className="w-icon-lg"
                src="/video_label_24px.png"
                alt="Give feedback icon"
                aria-hidden="true"
              />
            }
          >
            Give Feedback
          </SidebarButton>
          <SidebarButton
            icon={
              <img
                className="w-icon-lg"
                src="/perm_identity_24px.png"
                alt="Account icon"
                aria-hidden="true"
              />
            }
          >
            Account
          </SidebarButton>
        </div>
      </div>
    </div>
  );
}
