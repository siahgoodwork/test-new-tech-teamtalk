"use client";
import { useState } from "react";
import { Button } from "../../components";

export default function Page() {
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
        >
          New Session
        </Button>
      </div>
    </div>
  );
}
