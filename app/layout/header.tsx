import Link from "next/link";

const Links = [
  { Text: "Blog", Url: "/blog" },
  { Text: "Schedule", Url: "https://cal.com/kmnk-beauty" },
  { Text: "Policies", Url: "/policies" },
  { Text: "Services", Url: "/services" },
];

const Header = () => {
  return (
    <div className="py-4 sticky top-0 bg-background">
      <Link
        className="text-[1.875rem] text-center daniel-normal brand-gradient hover:underline sm:hidden"
        href={"/"}
      >
        KMNK Beauty
      </Link>
      <div className="flex justify-center items-center hind-light">
        {Links.map((value, index, array) => {
          return index < array.length / 2 ? (
            <Link
              key={value.Url}
              className="mx-2 text-md sm:text-lg sm:mx-3 lg:text-xl lg:mx-5 hover:underline"
              href={value.Url}
            >
              {value.Text}
            </Link>
          ) : null;
        })}
        <Link
          className="mx-5 daniel-normal text-[1.875rem] brand-gradient hidden sm:block hover:underline"
          href={"/"}
        >
          KMNK Beauty
        </Link>
        {Links.map((value, index, array) => {
          return index >= array.length / 2 ? (
            <Link
              key={value.Url}
              className="mx-2 text-md sm:text-lg sm:mx-3 lg:text-xl lg:mx-5 hover:underline"
              href={value.Url}
            >
              {value.Text}
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Header;
