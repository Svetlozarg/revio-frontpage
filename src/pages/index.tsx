import { useEffect } from "react";
import Layout from "@/containers/Layout";
import Head from "next/head";
import Benefit, { BenefitData } from "@/components/Benefit";
import Features from "@/containers/Features";
import FAQ from "@/containers/FAQ";
import Testimonials from "@/containers/Testimonials";
import Apps from "@/containers/Apps";
import Hero from "@/containers/Hero";
import Impact from "@/containers/Impact";
import Aos from "aos";
import "aos/dist/aos.css";

const benefitData: Array<BenefitData> = [
  {
    dark: true,
    image:
      "https://ik.imagekit.io/obelussoft/Revio/benefit1_vehA1pvLq.png?updatedAt=1684448817749",
    imageAlign: "right",
    title: "Collect Reviews On Autopilot",
    body: "Chat marketing is the best way to get more user generated content. Increase retention and repeat purchases. Collect Reviews with an intuitive chat UI. No More Boring Forms! 👈",
  },
  {
    dark: false,
    image:
      "https://ik.imagekit.io/obelussoft/Revio/benefit2_XFjZCI4Be.png?updatedAt=1684448818302",
    imageAlign: "left",
    title: "Improve Retention & Sell More",
    body: "To effectively handle 🤷🏻‍♀️ negative reviews, promptly engage your customers direct to your customer support. By addressing their concerns, you can potentially turn these dissatisfied customers into loyal ones. 🙂",
  },
  {
    dark: true,
    image:
      "https://ik.imagekit.io/obelussoft/Revio/benefit3_jvOSC1eEW.png?updatedAt=1684448818069",
    imageAlign: "right",
    title: "Reach the right people at the right time",
    body: "Engage your customers with highly effective broadcast campaigns 🫶. Get more open rates and clicks than email and 6x more revenue. Stop spending money on inefficient SMS campaigns. Try Revio!",
  },
  {
    dark: false,
    image:
      "https://ik.imagekit.io/obelussoft/Revio/benefit4_h7SpfdRSw.png?updatedAt=1684448818436",
    imageAlign: "left",
    title: "WhatsApp integrations for less Abandoned cart and more",
    body: "The main reason for abandoned carts 🛒 is lack of information before making a decision. With WhatsApp marketing & support in same place, agents can reply to abandoned cart queries & drive sales.",
  },
];

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Revio</title>
        <meta name="description" content="Revio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Impact />
        {benefitData.map((benefit, i) => {
          return (
            <>
              <Benefit
                key={i}
                dark={benefit.dark}
                image={benefit.image}
                imageAlign={benefit.imageAlign}
                title={benefit.title}
                body={benefit.body}
              />
            </>
          );
        })}
        <Features />
        <FAQ />
        <Testimonials />
        <Apps />
      </Layout>
    </>
  );
}
