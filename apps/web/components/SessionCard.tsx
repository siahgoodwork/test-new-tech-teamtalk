import { SessionType } from "../app/session/page";

export function SessionCard({ session }: { session: SessionType }) {
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
  return <div className="bg-white w-full p-4 rounded-lg">Card</div>;
}
