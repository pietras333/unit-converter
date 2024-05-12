export const metadata = {
  title: "Unitee.",
  description:
    "Unlock the power of real-time unit conversion with our free online tool! From engineering and physics to construction and daily use, effortlessly convert units with accuracy and speed. Access our source code on GitHub for seamless integration. Start converting today!",
};

import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body>{children}</body>
    </html>
  );
}
