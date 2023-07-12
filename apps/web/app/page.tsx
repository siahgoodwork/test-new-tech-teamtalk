"use client";
import { Button, Header } from "ui";
import { MagicButton } from "../components/MagicButton";
import { Popover } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

const ErrorfulComponent = () => {
  throw Error("Oops");
  return <div>Hahah</div>;
};

export default function Page() {
  return (
    <div className="p-6">
      <Header text="Web" />
      <MagicButton>Test</MagicButton>
    </div>
  );
}
