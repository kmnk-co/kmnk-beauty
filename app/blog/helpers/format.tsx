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
<<<<<<< HEAD
      (updatedOn.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      updatedOn.getDate().toString().padStart(2, "0") +
=======
      updatedOn.getMonth().toString().padStart(2, "0") +
      "-" +
      updatedOn.getDay().toString().padStart(2, "0") +
>>>>>>> c7ff8b07e99d952c153a07c1c69a2ab487b47b9c
      "-" +
      updatedOn.getFullYear();

    return "Updated on " + date + " by " + Author;
<<<<<<< HEAD
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
=======
  } else {
    date =
      writtenOn?.getMonth().toString().padStart(2, "0") +
      "-" +
      writtenOn?.getDay().toString().padStart(2, "0") +
      "-" +
      writtenOn?.getFullYear();

    return "Written on " + date + " by " + Author;
>>>>>>> c7ff8b07e99d952c153a07c1c69a2ab487b47b9c
  }
};
