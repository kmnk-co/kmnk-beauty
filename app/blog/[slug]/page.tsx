import { ReadFile } from "@/app/helpers/file-parser";
import { Components } from "@/app/helpers/markdown";
import { readdir } from "node:fs/promises";
import Markdown from "react-markdown";

export async function generateStaticParams() {
  let posts: string[] = [];
  try {
    posts = await readdir(process.cwd() + "/app/blog/posts/");
  } catch (err) {
    console.error(err);
  }

  return posts.map((value) => ({ slug: value }));
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const metadata = await ReadFile(
    process.cwd() + "/app/blog/posts/" + slug + "/metadata.json"
  ).then((x) => {
    return JSON.parse(x ?? "");
  });
  const content = await ReadFile(
    process.cwd() + "/app/blog/posts/" + slug + "/content.mdown"
  );

  return (
    <div className="cmp-container">
      <div className="mb-5 pl-4 border-l-4">
        <div className="text-4xl prompt">{metadata.title}</div>
        <div className="hind-light">
          {metadata.updatedOn ? (
            <div>
              Updated on {metadata.updatedOn} by {metadata.author}.
            </div>
          ) : (
            <div>
              Written on {metadata.writtenOn} by {metadata.author}.
            </div>
          )}
        </div>
      </div>
      <div className="mt-5">
        <Markdown components={Components}>{content}</Markdown>
      </div>
    </div>
  );
};

export default Page;
