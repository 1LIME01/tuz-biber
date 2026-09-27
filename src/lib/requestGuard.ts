import { promises as fs } from "node:fs";
import path from "node:path";

type RequestRecord = { ip: string; createdAt: string };

const dataPath = path.join(process.cwd(), "data.json");

async function readRecords(): Promise<RequestRecord[]> {
  try {
    const contents = await fs.readFile(dataPath, "utf8");
    const parsed = JSON.parse(contents) as { requests?: RequestRecord[] };
    return Array.isArray(parsed.requests) ? parsed.requests : [];
  } catch {
    return [];
  }
}

function getIp(request: Request): string {
  return (request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "local").trim();
}

export async function hasDailyRequest(request: Request) {
  const ip = getIp(request);
  const records = await readRecords();
  const today = new Date().toISOString().slice(0, 10);
  return records.some((record) => record.ip === ip && record.createdAt.slice(0, 10) === today);
}

export async function recordDailyRequest(request: Request) {
  const records = await readRecords();
  records.push({ ip: getIp(request), createdAt: new Date().toISOString() });
  await fs.writeFile(dataPath, JSON.stringify({ requests: records.slice(-5000) }, null, 2), "utf8");
}

export function containsRepeatedWordSpam(message: string) {
  const words = message.toLocaleLowerCase("tr-TR").match(/[\p{L}\p{N}]+/gu) ?? [];
  const counts = new Map<string, number>();
  for (const word of words) {
    const count = (counts.get(word) ?? 0) + 1;
    counts.set(word, count);
    if (count > 5) return true;
  }
  return false;
}

export function isSuspiciousProxy(request: Request) {
  return Boolean(request.headers.get("via") || request.headers.get("forwarded") || request.headers.get("x-proxy-id"));
}
