import styles from "./FilterCard.module.css";

function FilterCard({ handleFilter }) {
  return (
    <>
      <div className={styles.divForm}>
        <form
          className={styles.filterForm}
          onSubmit={(event) => {
            handleFilter(event);
          }}
        >
          <label className={styles.label} htmlFor="filter">
            Filtern
          </label>
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
          <button className={styles.button} type="submit">
            Filtern
          </button>
        </form>
      </div>
    </>
  );
}

export default FilterCard;
