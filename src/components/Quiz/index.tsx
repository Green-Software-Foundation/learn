import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type Answer = {
  text: string;
  isCorrect: boolean;
};

type QuizItem = {
  question: string;
  answers: Answer[];
  chosenAnswer?: number | undefined;
};

function QuizItem({ question, answers, chosenAnswer }: QuizItem) {
  const [selectedAnswer, setSelectedAnswer] = React.useState<
    number | undefined
  >();
  return (
    <div>
      <div>
        <h3>{question}</h3>
        <div className="radio">
          {answers.map((answer, index) => {
            const isChosen = chosenAnswer === index;
            let bgColor = "#e5e5e5";
            if (selectedAnswer === index) {
              bgColor = "var(--ifm-color-content)";
            }
            if (isChosen && answer.isCorrect) {
              bgColor = "var(--ifm-color-success)";
            } else if (isChosen && !answer.isCorrect) {
              bgColor = "var(--ifm-color-danger)";
            }
            if (answer.isCorrect && chosenAnswer !== undefined) {
              bgColor = "var(--ifm-color-success)";
            }

            return (
              <label
                className={styles.radio_btn__wrapper}
                style={{ borderColor: bgColor }}
                key={index}
              >
                <input
                  className={styles.radio_btn}
                  type="radio"
                  name={question}
                  value={answer.text}
                  onChange={() => setSelectedAnswer(index)}
                  required
                />
                {answer.text}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Quiz({ QuizList }): JSX.Element {
  console.log(QuizList);
  // State to collect the user's answers' index
  const [userAnswers, setUserAnswers] = React.useState<number[]>([]);

  // Console log the answers
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // console log all the answers
    // loop through the QuizList and console log the answers
    QuizList.forEach((item) => {
      const answer = item.answers.findIndex(
        (answer) => answer.text === data.get(item.question)
      );
      // Update the userAnswers state
      setUserAnswers((prev) => [...prev, answer]);
    });
  };
  return (
    <section className={styles.quizs}>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          {QuizList.map((quiz, idx) => (
            <QuizItem
              key={quiz.question}
              question={quiz.question}
              answers={quiz.answers}
              chosenAnswer={userAnswers[idx]}
            />
          ))}
          <button
            style={{ alignSelf: "center" }}
            className="button button--primary button--lg"
            type="submit"
          >
            Check your answers
          </button>
        </form>
      </div>
    </section>
  );
}
