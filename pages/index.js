import CreateCard from "@/Components/CreateCard/CreateCard";
import DisplayCard from "@/Components/DisplayCard/DisplayCard";

export default function Home({ handleCreateCard, allData }) {
  return (
    <>
      <CreateCard handleCreateCard={handleCreateCard} />

      {allData.map((element) => {
        return <DisplayCard key={element.id} element={element} />;
      })}
    </>
  );
}
