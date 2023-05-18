import styles from "@/styles/Apps.module.scss";
import yotpo from "@/assets/yotpo.png";
import judgeme from "@/assets/judgeme.png";
import stamped from "@/assets/stamped.png";
import loox from "@/assets/loox.png";
import star from "@/assets/star.png";
import Image from "next/image";

export default function Apps() {
  return (
    <section className={styles.apps}>
      <h2 data-aos="fade-up">Integrate into your existing reviews app</h2>

      <div data-aos="fade-up">
        <Image src={yotpo} alt="app image" />
        <Image src={judgeme} alt="app image" />
        <Image src={stamped} alt="app image" />
        <Image src={loox} alt="app image" />
        <Image src={star} alt="app image" />
      </div>
    </section>
  );
}
