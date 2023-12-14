import { getContent } from "@/api";

import { Introduction, Skills, Experience } from "@/components/pages/home";

export const revalidate = parseInt(process.env.PAGE_REVALIDATE!) || false;

export default async function Home() {
  const content = await getContent();

  if (!content) {
    return null;
  }

  const { introduction, skills, experience } = content;

  return (
    <main>
      <Introduction {...introduction} />
      <Skills {...skills} />
      <Experience {...experience} />
    </main>
  );
}
