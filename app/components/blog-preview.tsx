import Card from "../blog/components/card";
import { GetFeaturedPosts, GetPosts } from "../blog/helpers/post";

const BlogPreview = async () => {
  const Posts = await GetPosts();
  const FeaturedPosts = await GetFeaturedPosts(2, Posts);

  return (
    <div className="my-10">
      <div className="my-5 text-3xl lora-normal-oblique">Featured Posts</div>
      <div className="my-5 grid md:grid-cols-2 gap-4">
        {FeaturedPosts.length > 0 ? (
          FeaturedPosts.map((post) => <Card key={post.slug} post={post} />)
        ) : (
          <div className="my-2 pl-2 border-l-2 border-foreground hind-light">
            There is nothing to display.
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPreview;
