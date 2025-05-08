import { useState } from "react";
import styles from "./UpdateCard.module.css";
import Image from "next/image";

function UpdateCard({ element, handleUpdateCard }) {
  const [button, setButton] = useState(false);

  return (
    <>
      <button
        className={styles.buttonUpdateCard}
        type="button"
        onClick={() => {
          setButton(!button);
        }}
      >
        <Image src="./pen-line.svg" height={25} width={25} alt="bild"></Image>
      </button>
      {button && (
        <div className={styles.divUpdateCard}>
          <form
            className={styles.formUpdate}
            onSubmit={(event) => {
              handleUpdateCard(event, element);
              setButton(!button);
            }}
          >
            <label htmlFor="question">Frage</label>
            <input type="text" name="question" id="question" required></input>
            <label htmlFor="answer">Antwort</label>
            <input type="text" name="answer" id="answer" required></input>
            <label htmlFor="category">Category</label>
            <select name="category" id="category" required>
              <option>Category</option>
              <option value="allgemein">Allgemeine Fragen</option>
              <option value="mathematik">Mathematik</option>
              <option value="deutsch">Deutsch</option>
              <option value="englisch">Englisch</option>
            </select>
            <button type="submit">Karte Updaten</button>
          </form>
        </div>
      )}
    </>
  );
}

export default UpdateCard;
