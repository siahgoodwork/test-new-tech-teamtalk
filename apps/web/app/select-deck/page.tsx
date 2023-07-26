"use client";
import { Header } from "ui";

// const ErrorfulComponent = () => {
//   throw Error("Oops");
//   return <div>Hahah</div>;
// };

export default function Page() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col items-center pt-0 md:pt-24">
        <div>
          <h4 className="pb-10">Choose a conversation</h4>
        </div>

        <div className="flex flex-wrap justify-center pb-12 md:pb-0 gap-8 [&>*]:w-[345px] h-full">
          <div className="border-2 border-grey-100 rounded-2xl hover:border-grey-300">
            <img
              src="/purple-illust.jpg"
              alt="Illustration of a person and a chat bubble"
              className="rounded-t-2xl"
            />
            <div className="bg-white p-8 rounded-b-2xl min-h-[150px]">
              <h6 className="pb-2">Welcome new teammates</h6>
              <p>
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
            <div className="bg-white p-8 rounded-b-2xl">
              <h6 className="text-h6 pb-2 ">Work better together</h6>
              <p className="">
                Learn about your teammates' working styles, communication
                styles, and how to motivate and appreciate each other.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
        <img src="/tt-logo.png" alt="Team Talk Logo" className="w-[130px]" />
      </div>
    </div>
  );
}

// function DeckCard() {
//   return (
//     <>
//       <div className="border-2 border-grey-100 rounded-2xl hover:border-grey-300">
//         <img
//           src="/purple-illust.jpg"
//           alt="Illustration of a person and a chat bubble"
//           className="rounded-t-2xl"
//         />
//         <div className="bg-white p-8 rounded-b-2xl h-full">
//           <h6 className="pb-2">Welcome new teammates</h6>
//           <p className="">
//             Help new teammates get to know the rest of the team through fun and
//             meaningful questions.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
