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
        {children}
        <div className="footer">
          <div>Created with love by KMNK™ Co.</div>
        </div>
      </body>
    </html>
  );
}
