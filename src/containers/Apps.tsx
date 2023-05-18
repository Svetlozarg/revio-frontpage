import styles from "@/styles/Apps.module.scss";
import Image from "next/image";

export default function Apps() {
  return (
    <section className={styles.apps}>
      <h2 data-aos="fade-up">Integrate into your existing reviews app</h2>

      <div data-aos="fade-up">
        <Image
          src="https://ik.imagekit.io/obelussoft/Revio/yotpo_LdrSRBdzQ.png?updatedAt=1684448816731"
          alt="app image"
          width="1000"
          height="1000"
        />
        <Image
          src="https://ik.imagekit.io/obelussoft/Revio/judgeme_zQLhnKdkz.png?updatedAt=1684448815378"
          alt="app image"
          width="1000"
          height="1000"
        />
        <Image
          src="https://ik.imagekit.io/obelussoft/Revio/stamped_ow0xgsrs3.png?updatedAt=1684448816502"
          alt="app image"
          width="1000"
          height="1000"
        />
        <Image
          src="https://ik.imagekit.io/obelussoft/Revio/loox_CP4qjhpRy.png?updatedAt=1684448815438"
          alt="app image"
          width="1000"
          height="1000"
        />
        <Image
          src="https://ik.imagekit.io/obelussoft/Revio/star_y6fVnHX6l.png?updatedAt=1684448816541"
          alt="app image"
          width="1000"
          height="1000"
        />
      </div>
    </section>
  );
}
