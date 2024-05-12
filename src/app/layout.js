import Head from "next/head";

// Metadata for SEO
export const metadata = {
  title: "Unitee.",
  description:
    "Unlock the power of real-time unit conversion with our free online tool! From engineering and physics to construction and daily use, effortlessly convert units with accuracy and speed. Access our source code on GitHub for seamless integration. Start converting today!",
};

// RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Head section for metadata */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Favicon */}
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      {/* Body section */}
      <body>
        {/* Render children */}
        {children}
      </body>
    </html>
  );
}
