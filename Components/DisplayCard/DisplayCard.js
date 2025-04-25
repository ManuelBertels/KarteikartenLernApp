import { useState } from "react";
import styles from "./DisplayCard.module.css";

function DisplayCard({ element }) {
  const [button, setButton] = useState(true);

  let isVisible = undefined;

  if (button === true) {
    isVisible = true;
  } else {
    isVisible = false;
  }
  return (
    <>
      {isVisible ? (
        <section className={styles.question}>
          <p>{element.question}</p>
          <button
            className={styles.button}
            type="button"
            onClick={() => {
              setButton(!button);
            }}
          >
            show answer
          </button>
        </section>
      ) : (
        <section className={styles.answer}>
          <p>{element.answer}</p>
          <button
            className={styles.button}
            type="button"
            onClick={() => {
              setButton(!button);
            }}
          >
            show question
          </button>
        </section>
      )}
    </>
  );
}

export default DisplayCard;
