import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (!process.env.SANITY_DRAFT_SECRET || secret !== process.env.SANITY_DRAFT_SECRET) {
    return NextResponse.json({ message: "Invalid draft secret" }, { status: 401 });
  }

  const mode = await draftMode();
  mode.enable();

  redirect(slug ? `/insights/${slug}` : "/insights");
}
