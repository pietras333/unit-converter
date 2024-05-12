export const metadata = {
  title: "Unitee.",
  description:
    "Unlock the power of real-time unit conversion with our free online tool! From engineering and physics to construction and daily use, effortlessly convert units with accuracy and speed. Access our source code on GitHub for seamless integration. Start converting today!",
};

import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href="./icons8-lab-16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="./icons8-lab-72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="./icons8-lab-96.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="57x57"
          href="./icons8-lab-57.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="60x60"
          href="./icons8-lab-60.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="72x72"
          href="./icons8-lab-72.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="76x76"
          href="./icons8-lab-76.png"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
