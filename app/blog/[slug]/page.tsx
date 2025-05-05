import { Components } from "@/app/blog/helpers/markdown";
import { readdir } from "node:fs/promises";
import Markdown from "react-markdown";
import { GetFullPost } from "../helpers/post";
import { FormatAuthorStr } from "../helpers/format";

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
  const Post = await GetFullPost((await params).slug);

  return (
    <div className="cmp-container my-5">
      <div className="mb-5 pl-4 border-l-4 border-foreground">
        <div className="text-4xl prompt">{Post.metadata.title}</div>
        <div className="hind-light">
          {FormatAuthorStr(
            Post.metadata.authors,
            Post.metadata.writtenOn,
            Post.metadata.updatedOn
          )}
        </div>
      </div>
      <div className="mt-5">
        <Markdown components={Components}>{Post.content}</Markdown>
      </div>
    </div>
  );
};

export default Page;
