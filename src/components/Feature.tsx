import styles from "@/styles/Feature.module.scss";
import Image from "next/image";

export interface FeatureData {
  image: any;
  title: string;
  body: string;
}

export default function Feature(props: FeatureData) {
  const { image, title, body } = props;

  return (
    <div className={styles.feature}>
      <Image src={image} alt="feature image" />
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}
