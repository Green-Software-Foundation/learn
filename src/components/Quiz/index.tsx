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
                {/* Check mark for correct answer and cross for wrong one */}

                <input
                  className={styles.radio_btn}
                  type="radio"
                  name={question}
                  value={answer.text}
                  onChange={() => setSelectedAnswer(index)}
                  required
                />
                {answer.text}

                {isChosen && answer.isCorrect && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="var(--ifm-color-success)"
                    width={24}
                    height={24}
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {isChosen && !answer.isCorrect && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="var(--ifm-color-danger)"
                    width={24}
                    height={24}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
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
