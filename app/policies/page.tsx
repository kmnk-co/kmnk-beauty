import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import { ReadFile } from "../blog/helpers/file";

const GetMarkdown = async (): Promise<string> => {
  const Content = await ReadFile(process.cwd() + "/app/policies/content.mdown");
  return Content ?? "";
};

const Policies = async () => {
  return (
    <div className="cmp-container my-5">
      <div className="mt-5">
        <div className="cmp-markdown">
          <Markdown remarkPlugins={[remarkEmoji, remarkGfm]}>
            {(await GetMarkdown())}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default Policies;
