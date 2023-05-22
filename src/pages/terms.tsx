import Layout from "@/containers/Layout";
import Terms from "@/containers/Terms";
import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Revio | Terms & Conditions</title>
        <meta name="description" content="Revio | Terms & Conditions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Terms />
      </Layout>
    </>
  );
}
