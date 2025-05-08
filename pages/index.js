import CreateCard from "@/Components/CreateCard/CreateCard";
import DisplayCard from "@/Components/DisplayCard/DisplayCard";
import FilterCard from "@/Components/FilterCard/FilterCard";
import LinkPages from "@/Components/LinkPages/LinkPages";
import style from "@/pages/index.module.css";

export default function Home({
  handleCreateCard,
  allData,
  handleFilter,
  handleDelete,
  handleUpdateCard,
}) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          backgroundColor: "white",
          height: 250,
          width: 375,
          top: 0,
        }}
      >
        <CreateCard handleCreateCard={handleCreateCard} />

        <FilterCard handleFilter={handleFilter} />
      </div>

      <div style={{ marginTop: 320 }}>
        <details className={style.details}>
          Hier kannst du deine Karten erstellen und alle erstellen Karten werden
          hier angezeigt. Du hast ebenfalls die Möglichkeit die Inhalte zu
          löschen indem Du auf das x drückst oder den Inhalt zu verändern in dem
          du auf den Stift drückst.
        </details>
        {allData.map((element) => {
          return (
            <DisplayCard
              key={element._id}
              element={element}
              handleDelete={handleDelete}
              handleUpdateCard={handleUpdateCard}
            />
          );
        })}
      </div>

      <LinkPages />
    </>
  );
}
