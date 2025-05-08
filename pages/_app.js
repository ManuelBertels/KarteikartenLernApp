import "@/styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [allData, setAllData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filterdDataShowCategory, setFilterdDataShowCategory] = useState("All");

  // Fetch all Data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/hello");

      const responseObj = await response.json();
      setAllData(responseObj);
    }

    fetchData();

    setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // DELETE elements
  async function handleDelete(element) {
    const responseDelete = await fetch("/api/hello", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: element._id }),
    });

    const responseDeleteObj = await responseDelete.json();
  }

  // CREATE elements
  async function handleCreateCard(event) {
    event.preventDefault();

    const inputQuestion = event.target.elements.question.value;
    const inputAnswer = event.target.elements.answer.value;
    const inputCategory = event.target.elements.category.value;

    const responseCreateCard = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: inputQuestion,
        answer: inputAnswer,
        category: inputCategory,
        bookmark: false,
      }),
    });

    const responseCreateCardObj = await responseCreateCard.json();

    event.target.reset();
  }

  // Update elements
  async function handleUpdateCard(event, element) {
    event.preventDefault();

    const inputUpdateQuestion = event.target.elements.question.value;
    const inputUpdateAnswer = event.target.elements.answer.value;
    const inputUpdateCategory = event.target.elements.category.value;

    const responeUdate = await fetch("/api/hello", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: element._id,
        question: inputUpdateQuestion,
        answer: inputUpdateAnswer,
        category: inputUpdateCategory,
      }),
    });

    const responeUdateObj = await responeUdate.json();

    event.target.reset();
  }

  // FILTER elements
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

  function handleFilterShowcards(event) {
    event.preventDefault();
    const filterdData = event.target.elements.category.value;
    setFilterdDataShowCategory(filterdData);
  }

  let filterdDataShowCards = undefined;
  if (filterdDataShowCategory === "All") {
    filterdDataShowCards = allData;
  } else {
    filterdDataShowCards = allData.filter((element) => {
      return element.category === filterdDataShowCategory;
    });
  }

  return (
    <Component
      {...pageProps}
      handleDelete={handleDelete}
      handleCreateCard={handleCreateCard}
      handleFilter={handleFilter}
      handleUpdateCard={handleUpdateCard}
      handleFilterShowcards={handleFilterShowcards}
      allData={filterdData}
      allDataShowCards={filterdDataShowCards}
    />
  );
}
