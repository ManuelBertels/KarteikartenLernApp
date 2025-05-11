import { useState } from "react";
import style from "@/pages/showCards.module.css";

function ShowBookmarkCard({ bookmarkTrueData }) {
  const [isVisible, setIsVisible] = useState(false);

  // Funktion zum Entfernen des Bookmarks
  async function handleSetBookmarkfalse(bookmarkTrueData) {
    const responseData = await fetch("/api/hello", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: bookmarkTrueData._id, bookmark: false }),
    });

    const responseDataObj = await responseData.json();
  }

  // Umschalten zwischen Frage und Antwort
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className={style.sectionAnswerandQuestion}>
      {/* Bookmark-Button */}
      <button
        className={style.buttonBookmark}
        type="button"
        onClick={() => handleSetBookmarkfalse(bookmarkTrueData)}
      >
        Bookmark
      </button>

      {/* Kategorie anzeigen */}
      <div className={style.categoryTextField}>{bookmarkTrueData.category}</div>

      {/* Frage oder Antwort anzeigen */}
      <div className={style.flexContainer}>
        <p>{isVisible ? bookmarkTrueData.answer : bookmarkTrueData.question}</p>
        <button
          className={style.buttonShowAndHideAnswer}
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? "show question" : "show answer"}
        </button>
      </div>
    </section>
  );
}

export default ShowBookmarkCard;
