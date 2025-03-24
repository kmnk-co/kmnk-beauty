/* For some reason I couldn't put this method in post.tsx */
export const FormatAuthorStr = (
  authors: string[] | null,
  writtenOn: Date | null,
  updatedOn: Date | null
) => {
  const Author = authors?.reduce((author, value) => author + ", " + value);

  let date;
  if (updatedOn) {
    date =
      (updatedOn.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      updatedOn.getDate().toString().padStart(2, "0") +
      "-" +
      updatedOn.getFullYear();

    return "Updated on " + date + " by " + Author;
  } else if (writtenOn) {
    date =
      (writtenOn.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      writtenOn.getDate().toString().padStart(2, "0") +
      "-" +
      writtenOn.getFullYear();

    return "Written on " + date + " by " + Author;
  } else {
    return "By " + Author;
  }
};
