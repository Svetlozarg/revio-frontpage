import Feature, { FeatureData } from "@/components/Feature";
import styles from "@/styles/Features.module.scss";
import Link from "next/link";

const featuresData: Array<FeatureData> = [
  {
    image:
      "https://ik.imagekit.io/obelussoft/Revio/icon-shopify_jfPUg1HiS.png?updatedAt=1684448813753",
    title: "Integrate with your shopify store",
    body: "Connect your Shopify stores and synchronize all your customer information. Show purchase history and order status alongside the chat room",
  },
  {
    image:
      "https://ik.imagekit.io/obelussoft/Revio/icon-whatsapp-API_LkMYclyJn.png?updatedAt=1684448815053",
    title: "Get own Whatsapp Business API",
    body: "All Revio's plans include official WhatsApp business API with your number. We also support to get green tick",
  },
  {
    image:
      "https://ik.imagekit.io/obelussoft/Revio/icon-cart_uRB5kzze5.png?updatedAt=1684448813572",
    title: "Schedule automations based on order/delivery status",
    body: "Most common eCom events like an abandoned carts, order confirmations and shipping updates can automated with Revio",
  },
  {
    image:
      "https://ik.imagekit.io/obelussoft/Revio/icon-review-bubble_I-Zq7FHFC.png?updatedAt=1684448813671",
    title: "Automated review requests",
    body: "Send automated review requests with Revio whatsapp automations. You control messages and delivery time with smart scheduling",
  },
  {
    image:
      "https://ik.imagekit.io/obelussoft/Revio/icon-review-multimedia_fJbMJl1fu.png?updatedAt=1684448813701",
    title: "Collect & show photo and video reviews",
    body: "By using WhatsApp as the medium, Revio makes leaving photo and video reviews much easier than before",
  },
  {
    image:
      "https://ik.imagekit.io/obelussoft/Revio/icon-review-apps_-YgxcJJfiu.png?updatedAt=1684448813731",
    title: "Easy importing to your existing review App",
    body: "Revio can be seamlessly integrated with other Shopify apps like yotpo, Loox, Judge.me, Stamped etc.",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <h2 data-aos="fade-top">A new standard for intelligent automation</h2>

      <div className={styles.featuresWrapper} data-aos="zoom-in">
        {featuresData.map((item: FeatureData, i: number) => {
          return (
            <>
              <Feature
                key={i}
                image={item.image}
                title={item.title}
                body={item.body}
              />
            </>
          );
        })}
      </div>

      <div className={styles.buttonWrapper}>
        <Link href="/signup">
          <button>Get early access</button>
        </Link>
      </div>
    </section>
  );
}
