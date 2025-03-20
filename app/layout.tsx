import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
        <div className="flex justify-center py-3 text-xl hind-light border-b-2">
          <Link className="mx-2 hover:underline" href={"/"}>Home</Link>
          <Link className="mx-2 hover:underline" href={"/blog"}>Blog</Link>
        </div>
        <div className="flex flex-col min-h-full">
          <div className="flex-grow pt-10 pb-5">{children}</div>
          <div className="flex-grow-0 flex-shrink-0 py-5 text-center hind-light">
            <div>
              © 2025{" "}
              <a href="https://kmnk.beauty/" className="hover:underline">
                KMNK™ Beauty.
              </a>{" "}
              All rights reserved.
            </div>
            <div>
              Created with love by{" "}
              <a href="https://kmnk.co/" className="hover:underline">
                KMNK™ Co.
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
