import Layout from "@/containers/Layout";
import Head from "next/head";
import About from "@/containers/About";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Revio | About</title>
        <meta name="description" content="Revio | About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
}
