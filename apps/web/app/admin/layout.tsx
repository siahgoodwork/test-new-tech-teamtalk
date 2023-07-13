"use client";
import "../../css/global.css";
import { useSession } from "next-auth/react";
import useSWR from "swr";
// import { Car } from "@prisma/client";
import { ErrorBoundary } from "react-error-boundary";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, status } = useSession();

  return (
    <div>
      <nav>[ADMIN NAV]</nav>
      <ErrorBoundary fallback={<div>"lol"</div>}>
        <CarsList />
      </ErrorBoundary>
      {status !== "authenticated" ? (
        <div>sign in here</div>
      ) : (
        <div className="border-2 border-slate-900">{children}</div>
      )}
    </div>
  );
}

const CarsList = () => {
  const {
    data: carsData,
    isLoading,
    error,
  } = useSWR<any>("/", async () => {
    const req = await fetch("http://localhost:4000/cars/askjfasdkjadkf", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await req.json();
    return data;
  });
  if (error) {
    return <div>Erorr loading</div>;
  }
  if (isLoading) {
    return <div>Still loading cars</div>;
  }
  return (
    <div>
      {carsData.map((car) => (
        <div>{car.model}</div>
      ))}
    </div>
  );
};
