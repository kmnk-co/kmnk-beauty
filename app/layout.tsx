import type { Metadata } from "next";
import "./globals.css";

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
