import Head from "next/head";

const siteTitle = "Free Courses";

export default function Layout() {
  return (
    <Head>
      <link rel="icon" href="/static/favicon.ico" />
      <meta name="viewport" content="initial-scale=0, width=device-width" />
      <meta
        name="description"
        content="Browse the latest free online courses from a wide range of world class platforms."
      />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{siteTitle}</title>
    </Head>
  );
}
