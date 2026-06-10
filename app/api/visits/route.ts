import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const counterFile = path.join(process.cwd(), ".data", "visits.json");
let memoryCount = 0;

async function readCount() {
  try {
    const raw = await readFile(counterFile, "utf8");
    const parsed = JSON.parse(raw) as { count?: number };
    return typeof parsed.count === "number" ? parsed.count : 0;
  } catch {
    return memoryCount;
  }
}

async function writeCount(count: number) {
  memoryCount = count;
  try {
    await mkdir(path.dirname(counterFile), { recursive: true });
    await writeFile(counterFile, JSON.stringify({ count }, null, 2), "utf8");
  } catch {
    // Some serverless hosts expose a read-only filesystem. The in-memory value
    // keeps the API usable for the current process without breaking the page.
  }
}

export async function GET() {
  const count = await readCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const count = (await readCount()) + 1;
  await writeCount(count);
  return NextResponse.json({ count });
}
