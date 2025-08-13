import Head from 'next/head';

interface CustomHeadProps {
  title: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const CustomHead = ({
  title,
  description = "Shikhar Pandey is a full-stack developer building websites and applications you'll love to use.",
  keywords = "shikhar pandey, web developer, full-stack, portfolio, AI projects, GitHub projects",
  url = "https://shikhars-portfolio.vercel.app",
  image = "https://i.imgur.com/4zi5KkQ.png"
}: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Shikhar Pandey",
};
