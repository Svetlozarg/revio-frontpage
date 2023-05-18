import Layout from "@/containers/Layout";
import Head from "next/head";
import Hero from "@/containers/Hero";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Revio | Terms & Conditions</title>
        <meta name="description" content="Revio | Terms & Conditions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
