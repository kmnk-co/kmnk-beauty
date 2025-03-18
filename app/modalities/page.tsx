import Markdown from "react-markdown";
import { ReadFile } from "../helpers/file-parser";
import { Components } from "../helpers/markdown";

const Page = async () => {
  const metadata = await ReadFile(
    process.cwd() + "/app/modalities/metadata.json"
  ).then((x) => {
    return JSON.parse(x ?? "");
  });
  const content = await ReadFile(
    process.cwd() + "/app/modalities/content.mdown"
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
