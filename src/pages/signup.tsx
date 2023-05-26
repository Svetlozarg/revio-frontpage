import Popup from "@/components/Popup";
import Layout from "@/containers/Layout";
import Privacy from "@/containers/Privacy";
import Head from "next/head";

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Revio | Privacy Terms</title>
        <meta name="description" content="Revio | Privacy Terms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Popup />
      </Layout>
    </>
  );
}
