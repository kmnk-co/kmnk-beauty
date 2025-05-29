"use client";
import { Components } from "../helpers/markdown";
import { useRouter } from "next/navigation";
import { createRef, MouseEventHandler } from "react";
import Markdown from "react-markdown";
import { Post } from "../helpers/post";
import { FormatAuthorStr } from "../helpers/format";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";

const Card = (props: { post: Post }) => {
  const ButtonRef = createRef<HTMLDivElement>();
  const Router = useRouter();

  const OnMouseOver: MouseEventHandler<HTMLDivElement> = () => {
    ButtonRef.current?.classList.toggle("underline");
  };

  const OnClick: MouseEventHandler<HTMLDivElement> = () => {
    Router?.push("/blog/" + props.post.slug);
  };

  return (
    <div
      className="relative px-3 max-h-72 overflow-hidden border border-foreground hover:cursor-pointer"
      onClick={OnClick}
      onMouseEnter={OnMouseOver}
      onMouseLeave={OnMouseOver}
    >
      <div className="my-3 pl-2 border-l-4 border-foreground">
        <div className="text-xl prompt">{props.post.metadata.title}</div>
        <div className="text-sm hind-light">
          {FormatAuthorStr(
            props.post.metadata.authors,
            props.post.metadata.writtenOn,
            props.post.metadata.updatedOn
          )}
        </div>
      </div>
      <Markdown
        components={Components}
        remarkPlugins={[remarkEmoji, remarkGfm]}
      >
        {props.post.content}
      </Markdown>
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-background from-25% to-75%"></div>
      <div
        ref={ButtonRef}
        className="absolute bottom-3 right-4 text-lg hind-light"
      >
        Read On...
      </div>
    </div>
  );
};

export default Card;
