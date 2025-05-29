import Card from "./components/card";
import Link from "next/link";
import { GetFeaturedPosts, GetPosts } from "./helpers/post";

const Page = async () => {
  const Posts = await GetPosts();
  const FeaturedPosts = await GetFeaturedPosts(4, Posts);

  return (
    <div className="mt-5 mb-10 cmp-container">
      <div className="my-5 text-3xl lora-normal-oblique">Featured Posts</div>
      <div className="grid md:grid-cols-2 gap-4">
        {FeaturedPosts.length > 0 ? (
          FeaturedPosts.map((post) => <Card key={post.slug} post={post} />)
        ) : (
          <div className="my-2 pl-2 border-l-2 border-foreground hind-light">
            There is nothing to display.
          </div>
        )}
      </div>
      <div className="my-5 text-3xl lora-normal-oblique">Previous Posts</div>
      {Posts.length > 0 ? (
        Posts.map((value, index) => (
          <div key={index} className="my-2 pl-2 border-l-2 border-foreground">
            <Link
              href={"/blog/" + value.slug}
              className="hind-light hover:underline"
            >
              {value.metadata.title}
            </Link>
          </div>
        ))
      ) : (
        <div className="my-2 pl-2 border-l-2 border-foreground hind-light">
          There is nothing to display.
        </div>
      )}
    </div>
  );
};

export default Page;
