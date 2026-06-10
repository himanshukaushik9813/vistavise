import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (process.env.SANITY_REVALIDATE_SECRET && secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid revalidation secret" }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as {
    _type?: string;
    slug?: { current?: string } | string;
  };
  const type = body._type || "article";
  const slug = typeof body.slug === "string" ? body.slug : body.slug?.current;

  revalidateTag(type, "max");
  revalidatePath("/");
  revalidatePath("/insights");
  if (slug) revalidatePath(`/insights/${slug}`);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
