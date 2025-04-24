import type { Metadata } from "next";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";

export const metadata: Metadata = {
  title: "KMNK Beauty",
  description: "Created with love by KMNK™ Co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <div className="flex text-cream">
          <div className="p-1 bg-sunflower border border-background sm:hidden">XS</div>
          <div className="p-1 bg-tangerine border border-background hidden sm:max-md:block">S</div>
          <div className="p-1 bg-salmon border border-background hidden md:max-lg:block">M</div>
          <div className="p-1 bg-coral border border-background hidden lg:max-xl:block">L</div>
          <div className="p-1 bg-foreground border border-background hidden xl:block">XL</div>
        </div> */}
        <Header />
        <div className="flex flex-col min-h-full pt-[2.825rem] -mt-[2.825rem] sm:pt-[1.325rem] sm:-mt-[1.325rem]">
          <div className="flex-grow">{children}</div>
          <div className="flex-grow-0 flex-shrink-0">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
