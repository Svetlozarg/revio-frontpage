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
      className={dark ? styles.benefit : styles.benefitReverse}
      style={{
        backgroundColor: dark ? "#000" : "var(--grey)",
      }}
    >
      {imageAlign === "left" && (
        <Image
          src={image}
          alt="benefit image"
          data-aos="fade-right"
          width="1000"
          height="1000"
        />
      )}

      <div data-aos="flip-left">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      {imageAlign === "right" && (
        <Image
          src={image}
          alt="benefit image"
          data-aos="fade-left"
          width="1000"
          height="1000"
        />
      )}
    </section>
  );
}
