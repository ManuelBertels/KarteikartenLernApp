import { useState } from "react";
import DeleteCard from "../DeleteCard/DeleteCard";
import UpdateCard from "../UpdateCard/UpdateCard";
import styles from "./DisplayCard.module.css";

function DisplayCard({ element, handleDelete, handleUpdateCard }) {
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);

  // Umschalten zwischen Frage und Antwort
  const toggleVisibility = () => {
    setIsQuestionVisible(!isQuestionVisible);
  };

  return (
    <section className={isQuestionVisible ? styles.question : styles.answer}>
      {/* Kategorie anzeigen */}
      <p style={{ marginLeft: 5, marginBottom: 6, marginTop: 6 }}>
        {element.category}
      </p>

      {/* Frage oder Antwort anzeigen */}
      <p style={{ marginLeft: 110, marginBottom: 6 }}>
        {isQuestionVisible ? element.question : element.answer}
      </p>

      {/* Button zum Umschalten */}
      <button
        style={{ marginLeft: 110 }}
        className={styles.button}
        type="button"
        onClick={toggleVisibility}
      >
        {isQuestionVisible ? "show answer" : "show question"}
      </button>

      {/* Komponenten für Löschen und Aktualisieren */}
      <DeleteCard element={element} handleDelete={handleDelete} />
      <UpdateCard element={element} handleUpdateCard={handleUpdateCard} />
    </section>
  );
}

export default DisplayCard;
