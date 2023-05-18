import styles from "@/styles/Hero.module.scss";
import Image from "next/image";
import heroImg from "@/assets/hero-img.png";
import Input from "@/components/Input";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBox}>
        <h2>
          Boost your customer <span>Feedback and Sales</span> via chat marketing
        </h2>

        <p className={styles.normalP}>
          Revio provides the easiest way to get more user generated content,
          high conversions and loyalty. Your customers are on 💬 WhatsApp. Revio
          combines Sales, Marketing and Customer Support from a single solution.
        </p>

        <p className={styles.boldP}>That’s the magic of Revio</p>

        <Input />
      </div>
      <Image
        src={heroImg}
        className={styles.heroImg}
        alt="Hero Image"
        data-aos="fade-left"
      />
    </section>
  );
}
