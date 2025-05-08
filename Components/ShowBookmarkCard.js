import { useState } from "react";
import style from "@/pages/showCards.module.css";

function ShowBookmarkCard({ bookmarkTrueData }) {
  const [isVisible, setIsVisible] = useState(false);

  async function handleSetBookmarkfalse(bookmarkTrueData) {
    const responseData = await fetch("/api/hello", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: bookmarkTrueData._id, bookmark: false }),
    });

    const responseDataObj = await responseData.json();
  }
  return (
    <>
      {isVisible ? (
        <section className={style.sectionAnswerandQuestion}>
          <button
            className={style.buttonBookmark}
            type="button"
            onClick={() => {
              handleSetBookmarkfalse(bookmarkTrueData);
            }}
          >
            Bookmark
          </button>
          <div className={style.categoryTextField}>
            {bookmarkTrueData.category}
          </div>

          <div className={style.flexContainer}>
            <p>{bookmarkTrueData.question}</p>
            <button
              className={style.buttonShowAndHideAnswer}
              type="button"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              show answer
            </button>
          </div>
        </section>
      ) : (
        <section className={style.sectionAnswerandQuestion}>
          <button
            className={style.buttonBookmark}
            type="button"
            onClick={() => {
              handleSetBookmarkfalse(bookmarkTrueData);
            }}
          >
            Bookmark
          </button>
          <p className={style.categoryTextField}>{bookmarkTrueData.category}</p>

          <div className={style.flexContainer}>
            <p>{bookmarkTrueData.answer}</p>
            <button
              className={style.buttonShowAndHideAnswer}
              type="button"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              show question
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default ShowBookmarkCard;
