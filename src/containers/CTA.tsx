import styles from "@/styles/CTA.module.scss";
import Image from "next/image";
import Input from "@/components/Input";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <Image
        src="https://ik.imagekit.io/obelussoft/Revio/man_mzNxJ6dIf7.png?updatedAt=1684448815814"
        alt="man"
        data-aos="fade-right"
        width="1000"
        height="1000"
      />
      <div data-aos="fade-down">
        <h3>Take your</h3>
        <span className={styles.ctaSpan}>Customer Experience</span>
        <h3 style={{ marginBottom: "2rem" }}>to new heights</h3>

        <Input />
      </div>
    </section>
  );
}
