/* eslint-disable @next/next/no-img-element */

"use client";

import { Button } from "../../components/Button";

export default function Page() {
  return (
    <div className="flex flex-col h-full w-full">
      <div>
        <button className="btn-ghost before:content-['<']">
          {" "}
          Choose a different deck
        </button>
      </div>

      <div className="flex flex-col items-center justify-center text-center py-8">
        <div>
          <h4>New Session</h4>
          <p>Welcome new teammates</p>
        </div>

        <form className="w-fit md:w-[650px] flex flex-col gap-6 py-8">
          <div className="bg-white rounded-2xl flex flex-col justify-between p-12 text-left leading-[1.2]">
            <div className="flex items-center justify-between pb-8">
              <label className="font-bold">Name your session</label>
              <input
                type="text"
                name="session-name"
                placeholder="Welcome new teammates"
                required
                className="border-grey-500 border-[1px] w-[342px] h-[56px] px-4 rounded-lg"
              />
            </div>

            <div className="flex items-center  justify-between gap-4">
              <label className="font-bold">Select session duration</label>
              <div className="border-grey-500 border-[1px] rounded-3xl flex pl-4 pr-12 py-2 gap-8  items-center leading-0">
                <div className="flex gap-2">
                  <button className="flex gap-8 p-2 flex hover:bg-p-g-base hover:text-white hover:rounded-full w-[40px] h-[40px] items-center justify-center">
                    15
                  </button>
                  <button className="flex gap-8 p-2 flex hover:bg-p-g-base hover:text-white hover:rounded-full w-[40px] h-[40px] items-center justify-center">
                    30
                  </button>
                  <button className="flex gap-8 p-2 flex hover:bg-p-g-base hover:text-white hover:rounded-full w-[40px] h-[40px] items-center justify-center">
                    45
                  </button>
                  <button className="flex gap-8 p-2 flex hover:bg-p-g-base hover:text-white hover:rounded-full w-[40px] h-[40px] items-center justify-center">
                    60
                  </button>
                </div>
                <span className="text-grey-300">minutes</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl px-12 py-8 text-left">
            <p className="font-bold text-center pb-8">Topics in this deck</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-grey-50 hover:bg-grey-100 hover:cursor-pointer">
                <img
                  src="/q-random.png"
                  alt="Icon for Random"
                  className="w-[22.8px] h-[22.8px]"
                />
                <span>Random</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-grey-50 hover:bg-grey-100 hover:cursor-pointer">
                <img
                  src="/q-food.png"
                  alt="Icon for Food"
                  className="w-[22.8px] h-[22.8px]"
                />
                <span>Food</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-grey-50 hover:bg-grey-100 hover:cursor-pointer">
                <img
                  src="/q-travel.png"
                  alt="Icon for travel"
                  className="w-[22.8px] h-[22.8px]"
                />
                <span>Travel</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-grey-50 hover:bg-grey-100 hover:cursor-pointer">
                <img
                  src="/q-likes.png"
                  alt="Icon for Likes & Dislikes"
                  className="w-[22.8px] h-[22.8px]"
                />
                <span>Likes & Dislikes</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-grey-50 hover:bg-grey-100 hover:cursor-pointer">
                <img
                  src="/q-personality.png"
                  alt="Icon for Personality"
                  className="w-[22.8px] h-[22.8px]"
                />
                <span>Personality</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-grey-50 hover:bg-grey-100 hover:cursor-pointer">
                <img
                  src="/q-goals.png"
                  alt="Icon for Goals"
                  className="w-[22.8px] h-[22.8px]"
                />
                <span>Goals</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-grey-50 hover:bg-grey-100 hover:cursor-pointer">
                <img
                  src="/q-life.png"
                  alt="Icon for Life"
                  className="w-[22.8px] h-[22.8px]"
                />
                <span>Life</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-grey-50 hover:bg-grey-100 hover:cursor-pointer">
                <img
                  src="/q-working-styles.png"
                  alt="Icon for Work Experience"
                  className="w-[22.8px] h-[22.8px]"
                />
                <span>Work Experience</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-grey-50 hover:bg-grey-100 hover:cursor-pointer">
                <img
                  src="/q-hobbies.png"
                  alt="Icon for Hobbies"
                  className="w-[22.8px] h-[22.8px]"
                />
                <span>Hobbies</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-grey-50 hover:bg-grey-100 hover:cursor-pointer">
                <img
                  src="/q-values.png"
                  alt="Icon for Values"
                  className="w-[22.8px] h-[22.8px]"
                />
                <span>Values</span>
              </div>
            </div>

            <div className="flex pt-8 justify-center text-p-g-700 font-bold">
              <button className="btn-ghost-secondary">
                View and Customize Questions
              </button>
            </div>
          </div>
        </form>

        <button className="btn-primary">Create a session</button>
        {/* with TW's @layer and @apply in the global css, we can create button variants e.g. primary/secondary their hover states etc 
don't have to create a button component to apply these styles, but the varied button functions.... not really sure yet how thats gonna work...
*/}
      </div>
    </div>
  );
}
