import Elipse from "@/components/Elipse";
import styles from "@/styles/Impact.module.scss";

interface ElipseData {
  text: string;
  value: string;
}

const elipseData: Array<ElipseData> = [
  {
    value: "2.5x",
    text: "Reviews with WhatsApp",
  },
  {
    value: "15%+",
    text: "Avarage Order value",
  },
  {
    value: "3x",
    text: "Retained customers",
  },
  {
    value: "25%",
    text: "Less abandoned carts",
  },
  {
    value: "10x",
    text: "Higher open rate than E-mail",
  },
];

export default function Impact() {
  return (
    <section className={styles.impact}>
      <h2 data-aos="fade-down">
        Revio <span>Impact</span> On Your Ecommerce Business
      </h2>

      <div className={styles.elipseArray} data-aos="fade-right">
        {elipseData.map((elipse: ElipseData, i: number) => {
          return (
            <>
              <Elipse elipse={elipse} />
            </>
          );
        })}
      </div>
    </section>
  );
}
