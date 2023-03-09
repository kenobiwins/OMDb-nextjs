import HomePage from "pages/home/home";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
