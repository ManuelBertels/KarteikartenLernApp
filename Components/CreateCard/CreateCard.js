import styles from "./CreateCard.module.css";

function CreateCard({ handleCreateCard }) {
  // Funktion zum Verarbeiten des Formulars
  const handleSubmit = (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
    handleCreateCard(event); // Übergibt das Event an die übergebene Funktion
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Frage */}
        <label className={styles.label} htmlFor="question">
          Frage
        </label>
        <input
          className={styles.input}
          type="text"
          name="question"
          id="question"
          required
        />

        {/* Antwort */}
        <label className={styles.label} htmlFor="answer">
          Antwort
        </label>
        <input
          className={styles.input}
          type="text"
          name="answer"
          id="answer"
          required
        />

        {/* Kategorie */}
        <label className={styles.label} htmlFor="category">
          Kategorie
        </label>
        <select
          className={styles.select}
          name="category"
          id="category"
          defaultValue="" // Standardwert für die Dropdown-Auswahl
          required
        >
          <option value="" disabled>
            Kategorie auswählen
          </option>
          <option value="allgemein">Allgemeine Fragen</option>
          <option value="mathematik">Mathematik</option>
          <option value="deutsch">Deutsch</option>
          <option value="englisch">Englisch</option>
        </select>

        {/* Erstellen-Button */}
        <button className={styles.buttonCreateCard} type="submit">
          Karte erstellen
        </button>
      </form>
    </>
  );
}

export default CreateCard;
