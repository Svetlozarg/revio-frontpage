import { useState } from "react";
import styles from "@/styles/Question.module.scss";
import plus from "@/assets/plus.png";
import minus from "@/assets/minus.png";
import Image from "next/image";

export interface QuestionData {
  question: string;
  answer: string;
}

export default function Question(props: QuestionData) {
  const { question, answer } = props;
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <div className={styles.questionBox}>
      <div className={styles.question}>
        <h4>{question}</h4>
        <Image
          src={showAnswer ? minus : plus}
          alt="plus image"
          onClick={() => setShowAnswer(!showAnswer)}
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
