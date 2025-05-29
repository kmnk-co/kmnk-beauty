import { readdir } from "node:fs/promises";
import { ReadFile } from "./file";

export type Post = {
  slug: string;
  metadata: Metadata;
  content: string;
};

export type Metadata = {
  version: number | null;
  title: string | null;
  authors: string[] | null;
  tags: string[] | null;
  featured: boolean | null;
  published: boolean | null;
  writtenOn: Date | null;
  publishedOn: Date | null;
  updatedOn: Date | null;
};

/* Gets all posts and their metadata, but *not* their content */
export const GetPosts = async (): Promise<Post[]> => {
  let slugs: string[] = [];
  try {
    slugs = await readdir(process.cwd() + "/app/blog/posts/");
  } catch (err) {
    console.error(err);
  }

  return await Promise.all(
    slugs.map(async (slug) => ({
      slug: slug,
      metadata: await GetMetadata(slug),
      content: "",
    }))
  );
};

export const GetMetadata = async (slug: string): Promise<Metadata> => {
  const Json = await ReadFile(
    process.cwd() + "/app/blog/posts/" + slug + "/metadata.json"
  ).then((fileContents) => {
    return JSON.parse(fileContents ?? JSON.stringify(new Object()));
  });

  return {
    version: Json.version ? new Number(Json.version).valueOf() : null,
    title: Json.title ? new String(Json.title).valueOf() : null,
    authors: Json.authors
      ? Array.isArray(Json.authors)
        ? Json.authors
        : new Array(Json.authors)
      : null,
    tags: Json.tags
      ? Array.isArray(Json.tags)
        ? Json.tags
        : new Array(Json.tags)
      : null,
    featured: Json.featured ? new Boolean(Json.featured).valueOf() : null,
    published: Json.published ? new Boolean(Json.published).valueOf() : null,
    writtenOn: Json.writtenOn ? new Date(Json.writtenOn) : null,
    publishedOn: Json.publishedOn ? new Date(Json.publishedOn) : null,
    updatedOn: Json.updatedOn ? new Date(Json.updatedOn) : null,
  };
};

/* Selects up to num featured posts *and* gets *shortened* content */
export const GetFeaturedPosts = async (num: number, posts: Post[]): Promise<Post[]> => {
  let featuredPosts = posts.filter((post) => post.metadata.featured);

  // Shuffles the order of featured posts
  featuredPosts = featuredPosts.sort(() => 0.5 - Math.random());
  // Returns a max of 4 featured posts
  featuredPosts =
    featuredPosts.length > num ? featuredPosts.slice(0, num) : featuredPosts;

  // Gets content only for the featured posts
  return Promise.all(
    featuredPosts.map(async (post) => {
      post.content = await GetShortContent(post.slug);
      return post;
    })
  );
};

/* See GetFeaturedPosts() */
const GetShortContent = async (slug: string) => {
  const Content = await ReadFile(
    process.cwd() + "/app/blog/posts/" + slug + "/content.mdown"
  );

  /* Shortens content length for use in cards */
  if (Content && Content?.length > 500) {
    return Content.substring(0, 500);
  } else {
    return Content ?? "";
  }
};

export const GetFullPost = async (slug: string): Promise<Post> => {
  const Content = await ReadFile(
    process.cwd() + "/app/blog/posts/" + slug + "/content.mdown"
  );

  return {
    slug: slug,
    metadata: await GetMetadata(slug),
    content: Content ?? "",
  };
};
