import { Transition } from "@headlessui/react";
import { SessionType } from "../app/session/page";
import { useEffect, useState } from "react";

export function SessionCard({ session }: { session: SessionType }) {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);
  //   try {
  //     if (session.error) {
  //       throw Error("Failed to load");
  //     }
  //   } catch (err) {
  //     return (
  //       <div className="bg-red-100 w-full p-4 rounded-lg">{err.message}</div>
  //     );
  //   }
  if (session.error) {
    throw Error("Failed to load");
  }
  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-white w-full p-4 rounded-lg">Card</div>
    </Transition>
  );
}
