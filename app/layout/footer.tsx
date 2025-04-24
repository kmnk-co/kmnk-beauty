import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="py-5 bg-foreground">
        <div className="w-fit text-[1.875rem] mx-auto daniel-normal brand-gradient hover:underline">
          KMNK Beauty
        </div>
        <div className="text-center text-background hind-light">
          <div className="mb-5">
            <div>Permanent Hair Removal & Waxing Services</div>
            <div>Located in Milwaukee, WI</div>
          </div>
            <Link href="mailto:kamella@kmnk.beauty" className="block hover:underline">kamella@kmnk.beauty</Link>
            <Link href="tel:+12629228821" className="block hover:underline">+1 (262) 922-8821</Link>
        </div>
      </div>
      <div className="py-1 bg-background text-center text-foreground hind-light">
        <div>
          © 2025{" "}
          <Link href="https://kmnk.beauty/" className="hover:underline">
            KMNK™ Beauty.
          </Link>{" "}
          All rights reserved.
        </div>
        <div>
          Created with love by{" "}
          <Link href="https://kmnk.co/" className="hover:underline">
            KMNK™ Co.
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
