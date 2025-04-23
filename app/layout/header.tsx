import Link from "next/link";

const Links = [
  { Text: "About", Url: "/about" },
  { Text: "Blog", Url: "/blog" },
  { Text: "Schedule", Url: "/schedule" },
  { Text: "Contact", Url: "/contact" },
];

const Header = () => {
  return (
    <div className="py-4 sticky top-0 flex justify-center items-center hind-light bg-b_cream">
      {Links.map((value, index, array) => {
        return index < array.length / 2 ? (
          <Link
            key={value.Url}
            className="mx-3 text-xl hover:underline"
            href={value.Url}
          >
            {value.Text}
          </Link>
        ) : null;
      })}
      <Link
        className="mx-5 daniel-normal text-[1.875rem] brand-gradient hover:underline"
        href={"/"}
      >
        KMNK Beauty
      </Link>
      {Links.map((value, index, array) => {
        return index >= array.length / 2 ? (
          <Link
            key={value.Url}
            className="mx-3 text-xl hover:underline"
            href={value.Url}
          >
            {value.Text}
          </Link>
        ) : null;
      })}
    </div>
  );
};

export default Header;
