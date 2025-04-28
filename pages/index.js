import CreateCard from "@/Components/CreateCard/CreateCard";
import DisplayCard from "@/Components/DisplayCard/DisplayCard";
import FilterCard from "@/Components/FilterCard/FilterCard";
import styles from "./index.module.css";

export default function Home({ handleCreateCard, allData, handleFilter }) {
  return (
    <div className={styles.background}>
      <CreateCard handleCreateCard={handleCreateCard} />

      <FilterCard handleFilter={handleFilter} />

      {allData.map((element) => {
        return <DisplayCard key={element.id} element={element} />;
      })}
    </div>
  );
}
