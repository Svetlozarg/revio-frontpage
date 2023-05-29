import Popup from "@/components/Popup";
import FAQ from "@/containers/FAQ";
import Footer from "@/containers/Footer";
import Testimonials from "@/containers/Testimonials";
import Head from "next/head";

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Revio | Get Early Access</title>
        <meta name="description" content="Revio | Privacy Terms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Popup />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}
