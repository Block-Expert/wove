import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "./homepage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fruition AI</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
