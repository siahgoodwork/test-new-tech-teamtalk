import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const ck = cookies();
  const sessionToken = ck.get("next-auth.session-token");

  if (!sessionToken) {
    return NextResponse.json(
      {
        ok: false,
        token: sessionToken,
      },
      {
        status: 401,
        statusText: "Not authorized",
      }
    );
  }

  return NextResponse.json({
    ok: true,
    token: sessionToken,
  });
}
