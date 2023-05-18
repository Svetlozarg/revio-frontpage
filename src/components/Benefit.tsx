import styles from "@/styles/Benefit.module.scss";
import Image from "next/image";

export interface BenefitData {
  dark: boolean;
  image: any;
  imageAlign: string;
  title: string;
  body: string;
}

export default function Benefit(props: BenefitData) {
  const { dark, image, imageAlign, title, body } = props;

  return (
    <section
      className={styles.benefit}
      style={{ backgroundColor: dark ? "#000" : "var(--grey)" }}
    >
      {imageAlign === "left" && (
        <Image src={image} alt="benefit image" data-aos="fade-right" />
      )}

      <div data-aos="flip-left">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      {imageAlign === "right" && (
        <Image src={image} alt="benefit image" data-aos="fade-left" />
      )}
    </section>
  );
}
