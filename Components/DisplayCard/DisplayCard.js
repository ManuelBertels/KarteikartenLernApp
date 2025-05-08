import { useState } from "react";
import DeleteCard from "../DeleteCard/DeleteCard";
import styles from "./DisplayCard.module.css";
import UpdateCard from "../UpdateCard/UpdateCard";

function DisplayCard({ element, handleDelete, handleUpdateCard }) {
  const [button, setButton] = useState(true);

  return (
    <>
      {button ? (
        <section className={styles.question}>
          <p style={{ marginLeft: 5, marginBottom: 6, marginTop: 6 }}>
            {element.category}
          </p>
          <p style={{ marginLeft: 110, marginBottom: 6 }}>{element.question}</p>
          <button
            style={{ marginLeft: 110 }}
            className={styles.button}
            type="button"
            onClick={() => {
              setButton(!button);
            }}
          >
            show answer
          </button>
          <p style={{ marginLeft: 6 }}></p>
          <DeleteCard element={element} handleDelete={handleDelete} />
          <UpdateCard element={element} handleUpdateCard={handleUpdateCard} />
        </section>
      ) : (
        <section className={styles.answer}>
          <p style={{ marginLeft: 5, marginBottom: 6, marginTop: 6 }}>
            {element.category}
          </p>
          <p style={{ marginLeft: 110, marginBottom: 6, marginTop: 6 }}>
            {element.answer}
          </p>
          <button
            style={{ marginLeft: 110 }}
            className={styles.button}
            type="button"
            onClick={() => {
              setButton(!button);
            }}
          >
            show question
          </button>
          <p style={{ marginLeft: 6 }}></p>
          <DeleteCard element={element} handleDelete={handleDelete} />
          <UpdateCard element={element} handleUpdateCard={handleUpdateCard} />
        </section>
      )}
    </>
  );
}

export default DisplayCard;
