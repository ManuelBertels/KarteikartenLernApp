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
        <label htmlFor="question">Frage</label>
        <input type="text" name="question" id="question" required></input>
        <label htmlFor="answer">Antwort</label>
        <input type="text" name="answer" id="answer" required></input>
        <button className={styles.formElements} type="submit">
          Karte erstellen
        </button>
      </form>
    </>
  );
}

export default CreateCard;
