import styles from "@/styles/CTA.module.scss";
import Image from "next/image";
import man from "../../public/assets/man.png";
import Input from "@/components/Input";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <Image src={man} alt="man" data-aos="fade-right" />
      <div data-aos="fade-down">
        <h3>Take your</h3>
        <span className={styles.ctaSpan}>Customer Experience</span>
        <h3 style={{ marginBottom: "2rem" }}>to new heights</h3>

        <Input />
      </div>
    </section>
  );
}
