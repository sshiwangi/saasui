import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");

  if (!path) {
    return NextResponse.json({ error: "Path is required" }, { status: 400 });
  }

  try {
    const source = await readFile(join(process.cwd(), path), "utf8");
    return NextResponse.json({ source });
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
