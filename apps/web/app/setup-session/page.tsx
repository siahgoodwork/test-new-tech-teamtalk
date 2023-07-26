"use client";

export default function Page() {
  return (
    <div className="h-full w-full grid">
      <div>
        <button className="justify-start">Choose a different deck</button>
      </div>
      <div>
        <div>
          <h4 className="text-h4">New Session</h4>
          <p>Welcome new teammates</p>
        </div>
      </div>

      <div className="rounded-3xl bg-white">
        <div>
          <span>Name your session</span>
          <div className="border-2">Welcome new teammates</div>
        </div>
        <div>
          <span>Select session duration</span>
        </div>
      </div>
      <div></div>
    </div>
  );
}
