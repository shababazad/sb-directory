import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  const { id } = await req.json();

  const { views } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  await writeClient.patch(id).set({ views: views + 1 }).commit();

  return NextResponse.json({ success: true });
}
