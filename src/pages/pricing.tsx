import Layout from "@/containers/Layout";
import Head from "next/head";
import Pricing from "@/containers/Pricing";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Revio | Pricing</title>
        <meta name="description" content="Revio | Pricing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Pricing />
      </Layout>
    </>
  );
}
