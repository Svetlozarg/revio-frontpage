import Feature, { FeatureData } from "@/components/Feature";
import styles from "@/styles/Features.module.scss";
import shopify from "../assets/icon-shopify.png";
import whatsappApi from "../assets/icon-whatsapp-api.png";
import cart from "../assets/icon-cart.png";
import review from "../assets/icon-review-bubble.png";
import multimedia from "../assets/icon-review-multimedia.png";
import apps from "../assets/icon-review-apps.png";

const featuresData: Array<FeatureData> = [
  {
    image: shopify,
    title: "Integrate with your shopify store",
    body: "Connect your Shopify stores and synchronize all your customer information. Show purchase history and order status alongside the chat room",
  },
  {
    image: whatsappApi,
    title: "Get own Whatsapp Business API",
    body: "All Revio's plans include official WhatsApp business API with your number. We also support to get green tick",
  },
  {
    image: cart,
    title: "Schedule automations based on order/delivery status",
    body: "Most common eCom events like an abandoned carts, order confirmations and shipping updates can automated with Revio",
  },
  {
    image: review,
    title: "Automated review requests",
    body: "Send automated review requests with Revio whatsapp automations. You control messages and delivery time with smart scheduling",
  },
  {
    image: multimedia,
    title: "Collect & show photo and video reviews",
    body: "By using WhatsApp as the medium, Revio makes leaving photo and video reviews much easier than before",
  },
  {
    image: apps,
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

      <div className={styles.buttonWrapper} data-aos="flip-up">
        <button>Get a free trial</button>
      </div>
    </section>
  );
}
