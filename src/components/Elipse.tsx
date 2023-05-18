import styles from "@/styles/Elipse.module.scss";

interface Props {
  elipse: any;
}

export default function Elipse(props: Props) {
  const { elipse } = props;

  return (
    <div className={styles.div}>
      <h4>{elipse.value}</h4>
      <h5>{elipse.text}</h5>
    </div>
  );
}
