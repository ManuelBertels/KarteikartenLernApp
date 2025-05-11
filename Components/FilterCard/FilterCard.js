import styles from "./FilterCard.module.css";

function FilterCard({ handleFilter }) {
  // Funktion zum Verarbeiten des Formulars
  const handleSubmit = (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
    handleFilter(event); // Übergibt das Event an die übergebene Funktion
  };

  return (
    <div className={styles.divForm}>
      <form className={styles.filterForm} onSubmit={handleSubmit}>
        {/* Label für die Filterauswahl */}
        <label className={styles.label} htmlFor="category">
          Filtern
        </label>

        {/* Dropdown-Menü für die Kategorien */}
        <select
          className={styles.select}
          name="category"
          id="category"
          required
        >
          <option value="All">All</option>
          <option value="allgemein">Allgemeine Fragen</option>
          <option value="mathematik">Mathematik</option>
          <option value="deutsch">Deutsch</option>
          <option value="englisch">Englisch</option>
        </select>

        {/* Button zum Filtern */}
        <button className={styles.button} type="submit">
          Filtern
        </button>
      </form>
    </div>
  );
}

export default FilterCard;
