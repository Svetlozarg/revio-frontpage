import Layout from "@/containers/Layout";
import Head from "next/head";
import Hero from "@/containers/Hero";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Revio | Privacy Terms</title>
        <meta name="description" content="Revio | Privacy Terms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
