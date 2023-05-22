import { useState } from "react";
import styles from "@/styles/Question.module.scss";
import Image from "next/image";

export interface QuestionData {
  question: string;
  answer: string;
}

export default function Question(props: QuestionData) {
  const { question, answer } = props;
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <div
      className={styles.questionBox}
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <div className={styles.question}>
        <h4>{question}</h4>
        <Image
          src={
            showAnswer
              ? "https://ik.imagekit.io/obelussoft/Revio/minus_Pqvr4JhfI7.png?updatedAt=1684448815575"
              : "https://ik.imagekit.io/obelussoft/Revio/plus_MRHTpIWCj.png?updatedAt=1684448816307"
          }
          alt="plus image"
          width="1000"
          height="1000"
        />
      </div>

      {showAnswer && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
