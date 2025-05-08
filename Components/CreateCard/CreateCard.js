import styles from "./CreateCard.module.css";

function CreateCard({ handleCreateCard }) {
  return (
    <>
      <form
        className={styles.form}
        onSubmit={(event) => {
          handleCreateCard(event);
        }}
      >
        <label className={styles.label} htmlFor="question">
          Frage
        </label>
        <input
          className={styles.input}
          type="text"
          name="question"
          id="question"
          required
        ></input>
        <label className={styles.label} htmlFor="answer">
          Antwort
        </label>
        <input
          className={styles.input}
          type="text"
          name="answer"
          id="answer"
          required
        ></input>
        <label className={styles.label} htmlFor="category">
          Category
        </label>
        <select
          className={styles.select}
          name="category"
          id="category"
          required
        >
          <option>Category</option>
          <option value="allgemein">Allgemeine Fragen</option>
          <option value="mathematik">Mathematik</option>
          <option value="deutsch">Deutsch</option>
          <option value="englisch">Englisch</option>
        </select>
        <button className={styles.buttonCreateCard} type="submit">
          Karte erstellen
        </button>
      </form>
    </>
  );
}

export default CreateCard;
