import Link from "next/link";
import { readdir } from "node:fs/promises";

const Page = async () => {
  let posts: string[] = [];
  try {
    posts = await readdir(process.cwd() + "/app/blog/posts/");
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="cmp-container">
      {posts.map((value, index) => (
        <Link key={index} href={"blog/" + value} className="hover:underline">
          {value + "/"}
        </Link>
      ))}
    </div>
  );
};

export default Page;
