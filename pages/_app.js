import "@/styles/globals.css";

import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [allData, setAllData] = useState([]);
  const [filter, setFilter] = useState("All");

  function handleCreateCard(event) {
    event.preventDefault();

    const inputQuestion = event.target.elements.question.value;
    const inputAnswer = event.target.elements.answer.value;
    const inputCategory = event.target.elements.category.value;

    const dataObject = {
      id: uid(),
      question: inputQuestion,
      answer: inputAnswer,
      category: inputCategory,
    };

    setAllData([...allData, dataObject]);
    console.log(allData);

    event.target.reset();
  }

  function handleFilter(event) {
    event.preventDefault();
    const filterCategory = event.target.elements.category.value;
    setFilter(filterCategory);
    event.target.reset();
  }

  let filterdData = undefined;
  if (filter === "All") {
    filterdData = allData;
  } else {
    filterdData = allData.filter((element) => {
      return element.category === filter;
    });
  }

  return (
    <Component
      {...pageProps}
      handleCreateCard={handleCreateCard}
      handleFilter={handleFilter}
      allData={filterdData}
    />
  );
}
