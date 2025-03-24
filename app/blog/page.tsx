import { readdir } from "node:fs/promises";
import { ReadFile } from "../helpers/file-parser";
import Card from "./components/card";
import Link from "next/link";

const GetMetadata = async (slug: string) => {
  const Metadata = await ReadFile(
    process.cwd() + "/app/blog/posts/" + slug + "/metadata.json"
  ).then((fileContents) => {
    return JSON.parse(fileContents ?? "");
  });

  return Metadata;
};

const GetContent = async (slug: string) => {
  const Content = await ReadFile(
    process.cwd() + "/app/blog/posts/" + slug + "/content.mdown"
  );

  /* Shortens content length for use in cards */
  if (Content && Content?.length > 500) {
    return Content.substring(0, 500);
  } else {
    return Content;
  }
};

const GetFeaturedPosts = async (posts: string[]) => {
  const UnfilteredPosts = await Promise.all(
    posts.map(async (post) => {
      const Metadata = await GetMetadata(post);
      return { post: post, filter: Metadata.featured };
    })
  );

  let featuredPosts = UnfilteredPosts
    .filter((unfilteredPost) => unfilteredPost.filter)
    .map((unfilteredPost) => unfilteredPost.post);

  // Shuffles the order of featured posts
  featuredPosts = featuredPosts.sort(() => 0.5 - Math.random());

  return featuredPosts.length > 4 ? featuredPosts.slice(0, 4) : featuredPosts;
};

const Page = async () => {
  let posts: string[] = [];
  try {
    posts = await readdir(process.cwd() + "/app/blog/posts/");
  } catch (err) {
    console.error(err);
  }

  const featuredPosts = await GetFeaturedPosts(posts);

  return (
    <div className="cmp-container">
      <div className="my-5 text-3xl lora-normal-oblique">Featured Posts</div>
      <div className="grid grid-cols-2 gap-4">
        {featuredPosts.length > 0 ? (
          featuredPosts.map(async (value, index) => {
            const Metadata = await GetMetadata(value);
            const Content = await GetContent(value);
            return (
              <Card
                key={index}
                Metadata={{
                  title: Metadata?.title,
                  author: Metadata?.author,
                  writtenOn: Metadata?.writtenOn,
                  updatedOn: Metadata?.updatedOn,
                }}
                Content={Content}
                Slug={value}
              ></Card>
            );
          })
        ) : (
          <div className="my-2 pl-2 border-l-2 hind-light">
            There is nothing to display.
          </div>
        )}
      </div>
      <div className="my-5 text-3xl lora-normal-oblique">Previous Posts</div>
      {posts.length > 0 ? (
        posts.map(async (value, index) => {
          const Metadata = await GetMetadata(value);
          return (
            <div key={index} className="my-2 pl-2 border-l-2">
              <Link
                href={"/blog/" + value}
                className="hind-light hover:underline"
              >
                {Metadata?.title}
              </Link>
            </div>
          );
        })
      ) : (
        <div className="my-2 pl-2 border-l-2 hind-light">
          There is nothing to display.
        </div>
      )}
    </div>
  );
};

export default Page;
