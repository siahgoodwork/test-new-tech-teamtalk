"use client";
import { Header } from "ui";

// const ErrorfulComponent = () => {
//   throw Error("Oops");
//   return <div>Hahah</div>;
// };

export default function Page() {
  return (
    <div className="h-full grid">
      <div className="grid place-items-center self-center content-center">
        <div>
          <h4 className="text-h4 pb-10">Choose a conversation</h4>
        </div>

        <div className="flex flex-wrap justify-center pb-12 md:pb-0 gap-8 [&>*]:w-[345px]">
          <div className="border-2 border-grey-100 rounded-2xl hover:border-grey-300">
            <img
              src="/purple-illust.jpg"
              alt="Illustration of a person and a chat bubble"
              className="rounded-t-2xl"
            />
            <div className="bg-white p-5 rounded-b-2xl">
              <h6 className="text-h6 pb-2 ">Welcome new teammates</h6>
              <p className="font-light">
                Help new teammates get to know the rest of the team through fun
                and meaningful questions.
              </p>
            </div>
          </div>

          <div className="border-2 border-grey-100 rounded-2xl hover:border-grey-300">
            <img
              src="/orange-illust.jpg"
              alt="Illustration of a person and a chat bubble"
              className="rounded-t-2xl"
            />
            <div className="bg-white p-5 rounded-b-2xl">
              <h6 className="text-h6 pb-2 ">Work better together</h6>
              <p className="font-light">
                Learn about your teammates' working styles, communication
                styles, and how to motivate and appreciate each other.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid self-end">
        <img src="/tt-logo.png" alt="Team Talk Logo" className="w-[130px]" />
      </div>
    </div>
  );
}
