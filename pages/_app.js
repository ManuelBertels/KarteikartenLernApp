import "@/styles/globals.css";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [allData, setAllData] = useState([]);

  function handleCreateCard(event) {
    event.preventDefault();

    const inputQuestion = event.target.elements.question.value;
    const inputAnswer = event.target.elements.answer.value;

    const dataObject = {
      id: uid(),
      question: inputQuestion,
      answer: inputAnswer,
    };

    setAllData([...allData, dataObject]);
    console.log(allData);

    event.target.reset();
  }

  return (
    <Component
      {...pageProps}
      handleCreateCard={handleCreateCard}
      allData={allData}
    />
  );
}
