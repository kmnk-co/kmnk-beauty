import { readFile } from "node:fs/promises";

export const ReadFile = async (path: string) => {
  let fileContents;
  try {
    fileContents = await readFile(path, "utf8");
  } catch (error) {
    console.error(error);
  }

  return fileContents;
};
