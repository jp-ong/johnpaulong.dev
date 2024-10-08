import db from "@/lib/db";
import content, { Content } from "@/models/content";

const version = process.env.CONTENT_VERSION || "1";

export async function getContent(): Promise<Content | null> {
  await db();
  const data = (await content.findOne({ version }).lean()) as Content;
  return data;
}
