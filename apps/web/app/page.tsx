"use client";
import { Header } from "ui";
import { MagicButton } from "../components/MagicButton";

// const ErrorfulComponent = () => {
//   throw Error("Oops");
//   return <div>Hahah</div>;
// };

export default function Page() {
  return (
    <div>
      <Header text="Web" />
      <MagicButton>Test</MagicButton>
    </div>
  );
}
