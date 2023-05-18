import Layout from "@/containers/Layout";
import Head from "next/head";
import Contacts from "@/containers/Contacts";

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Revio | Contacts</title>
        <meta name="description" content="Revio | Contacts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Contacts />
      </Layout>
    </>
  );
}
