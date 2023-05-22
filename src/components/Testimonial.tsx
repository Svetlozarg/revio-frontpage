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

      <Image src={image} alt="user image" width="1000" height="1000" />

      <h5>{name}</h5>
      <p>{slogan}</p>
    </div>
  );
}
