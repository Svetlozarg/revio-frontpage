import Image from "next/image";
import styles from "@/styles/Testimonial.module.scss";

export interface TestimonialData {
  testimonial: string;
  image: any;
  name: string;
  slogan: string;
}

export default function Testimonial(props: TestimonialData) {
  const { testimonial, image, name, slogan } = props;

  return (
    <div className={styles.testimonial}>
      <p className={styles.testimonialText}>{testimonial}</p>

      <div>
        <h5>{name}</h5>
        <p>{slogan}</p>
      </div>
    </div>
  );
}
