import Testimonial, { TestimonialData } from "@/components/Testimonial";
import styles from "@/styles/Testimonials.module.scss";

const testimonialsData: Array<TestimonialData> = [
  {
    testimonial:
      "''As an E-commerce expert with over a decade in the field, I've witnessed numerous tools promising to revolutionize customer interaction. However, Revio, quite honestly, takes the cake. The manner in which it integrates with conversational commerce platforms is ingenious, facilitating real-time, authentic customer feedback that’s incredibly valuable for businesses. The ability to gain insights directly from customers not only elevates service levels but also fosters an environment of trust. I'm truly impressed.''",
    image:
      "https://ik.imagekit.io/obelussoft/Revio/user_Oq1tGw3F0.png?updatedAt=1684448816472",
    name: "Emma Sullivan",
    slogan: "E-commerce Consultant",
  },
  {
    testimonial:
      "''In an era where customer experience is king, Revio emerges as a game-changer. The impact it's made in the e-commerce industry is hard to ignore. It transforms mere transactions into meaningful conversations, creating a personalized shopping experience that today's customers crave. With Revio, you're not just selling products; you're building relationships. An essential tool for anyone in E-commerce.''",
    image:
      "https://ik.imagekit.io/obelussoft/Revio/user_Oq1tGw3F0.png?updatedAt=1684448816472",
    name: "James Burton",
    slogan: "Digital Marketing Strategist",
  },
  {
    testimonial:
      "''I can't stress enough the importance of authentic customer reviews in E-commerce. They boost credibility,SEO, and most importantly, influence purchase decisions and conversion rates. Revio, with its seamless integration into shopify takes this a step further. It’s not just about gathering reviews; it’s about starting a dialogue, understanding customers better, and making them feel heard. Revio isn't just a tool, it's a strategy for success.''",
    image:
      "https://ik.imagekit.io/obelussoft/Revio/user_Oq1tGw3F0.png?updatedAt=1684448816472",
    name: "Lisa R. McKinney",
    slogan: "CRO expert",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 data-aos="fade-up">What Ecomm experts say about Revio</h2>

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
