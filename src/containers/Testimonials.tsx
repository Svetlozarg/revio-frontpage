import Testimonial, { TestimonialData } from "@/components/Testimonial";
import styles from "@/styles/Testimonials.module.scss";
import userImg from "../assets/user.png";

const testimonialsData: Array<TestimonialData> = [
  {
    testimonial:
      "Revio Integrates all the messaging 😎 👍 channels, including WhatsApp, Viber, Messenger into one place to provide efficient customer support in real-time. Connect your Shopify stores and synchronize all your customer information. Show purchase history and order status alongside the chat room.",
    image: userImg,
    name: "Jonathan Doe",
    slogan: "Marketing Manager at Company Corp.",
  },
  {
    testimonial:
      "Revio Integrates all the messaging 😎 👍 channels, including WhatsApp, Viber, Messenger into one place to provide efficient customer support in real-time. Connect your Shopify stores and synchronize all your customer information. Show purchase history and order status alongside the chat room.",
    image: userImg,
    name: "Jonathan Doe",
    slogan: "Marketing Manager at Company Corp.",
  },
  {
    testimonial:
      "Revio Integrates all the messaging 😎 👍 channels, including WhatsApp, Viber, Messenger into one place to provide efficient customer support in real-time. Connect your Shopify stores and synchronize all your customer information. Show purchase history and order status alongside the chat room.",
    image: userImg,
    name: "Jonathan Doe",
    slogan: "Marketing Manager at Company Corp.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 data-aos="fade-up">Testimonials</h2>

      <div className={styles.testimonialsWrapper} data-aos="zoom-in">
        {testimonialsData.map((item: TestimonialData, i: number) => {
          return (
            <Testimonial
              key={i}
              testimonial={item.testimonial}
              image={item.image}
              name={item.name}
              slogan={item.slogan}
            />
          );
        })}
      </div>
    </section>
  );
}
