"use client";
import { Components } from "@/app/helpers/markdown";
import { useRouter } from "next/navigation";
import { createRef, MouseEventHandler } from "react";
import Markdown from "react-markdown";

type CardProps = {
  Metadata: {
    title: string | null | undefined;
    author: string | null | undefined;
    writtenOn: string | null | undefined;
    updatedOn: string | null | undefined;
  };
  Content: string | null | undefined;
  Slug: string;
};

const Card = (props: CardProps) => {
  const ButtonRef = createRef<HTMLDivElement>();
  const Router = useRouter();

  const OnMouseOver: MouseEventHandler<HTMLDivElement> = () => {
    ButtonRef.current?.classList.toggle("underline");
  };

  const OnClick: MouseEventHandler<HTMLDivElement> = () => {
    Router?.push("/blog/" + props.Slug);
  };

  const FormatAuthorStr = (
    author: string | null | undefined,
    writtenOn: string | null | undefined,
    updatedOn: string | null | undefined
  ) => {
    if (updatedOn) {
      return "Updated on " + updatedOn + " by " + author;
    } else {
      return "Written on " + writtenOn + " by " + author;
    }
  };

  return (
    <div
      className="relative px-3 max-h-72 overflow-hidden border hover:cursor-pointer"
      onClick={OnClick}
      onMouseEnter={OnMouseOver}
      onMouseLeave={OnMouseOver}
    >
      <div className="my-3 pl-2 border-l-4">
        <div className="text-xl prompt">{props.Metadata.title}</div>
        <div className="text-sm hind-light">
          {FormatAuthorStr(
            props.Metadata.author,
            props.Metadata.writtenOn,
            props.Metadata.updatedOn
          )}
        </div>
      </div>
      <Markdown components={Components}>{props.Content}</Markdown>
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
