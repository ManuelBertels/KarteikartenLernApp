import style from "./showCards.module.css";
import LinkPages from "@/Components/LinkPages/LinkPages";

import { useState } from "react";

function ShowCards({ allDataShowCards, handleFilterShowcards }) {
  const [isVisible, setIsVisible] = useState(true);
  const [index, setIndex] = useState(0);

  let isVisibleAll = true;

  // Hier sollen nur Karten angezeigt werden die nicht gebookmarked sind und daher den default Wert False haben.
  // Daher werden hier alle Elemente mit dem Wert false gefiltert

  const allDataShowCardsFalse = allDataShowCards.filter(
    (element) => element.bookmark === false
  );

  // Hier wird beim drücken des Buttons die Indexnummer erhöht, um die nächste Karte anzuzeigen.
  // Wenn die letzte Karte erreicht ist, wird der Index auf 0 zurückgesetzt.

  function handleIndex() {
    if (index === allDataShowCardsFalse.length - 1) {
      setIndex(0);
      return;
    }

    setIndex(index + 1);
  }

  {
    /* Beim Funktionsaufruf wird der Bookmark value auf true gesetzt*/
  }
  async function handleSetBooleanPost() {
    if (allDataShowCardsFalse[index].bookmark === false) {
      const responseSetBoolean = await fetch("/api/hello", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: allDataShowCardsFalse[index]._id,
          bookmark: true,
        }),
      });

      const responseSetBooleanObj = await responseSetBoolean.json();
    } else {
      const responseSetBoolean = await fetch("/api/hello", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: allDataShowCardsFalse[index]._id,
          bookmark: false,
        }),
      });

      const responseSetBooleanObj = await responseSetBoolean.json();
    }
  }

  // Wenn keine Karten vorhanden sind, wird isVisibleAll auf false gesetzt damit die Meldung "Bitte wählen Sie eine andere category" angezeigt.

  if (
    allDataShowCardsFalse.length === 0 ||
    allDataShowCardsFalse === undefined
  ) {
    isVisibleAll = false;
  }

  return (
    <>
      {/* Anzeige des Filter Formulars  */}

      <div className={style.borderFormular}>
        <form
          className={style.filterFormular}
          onSubmit={(event) => {
            handleFilterShowcards(event);
          }}
        >
          <label className={style.filternHeadline} htmlFor="filter">
            Filtern
          </label>
          <select
            className={style.selectField}
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
          <button className={style.buttonFiltern} type="submit">
            Filtern
          </button>
        </form>
      </div>

      <details className={style.details}>
        Hier kannst du deine Karten nach einer Catergory filtern und
        nacheinander üben. Wenn du auf Bookmark drückst, dann verschwindet sie
        hier und landet auf der Bookmark Seite. Dort kannst du Sie hier wieder
        zufügen wenn du ein weiteres Mal auf Bookmark drückst.
      </details>

      {/* Wenn isVisibleAll false ist wird bitte wählen Sie eine andere Category angezeigt. Ansonsten die Frage und Antwort Section */}

      {isVisibleAll ? (
        isVisible ? (
          <section className={style.sectionAnswerandQuestion}>
            <button
              className={style.buttonBookmark}
              type="button"
              onClick={() => {
                handleSetBooleanPost();
              }}
            >
              Bookmark
            </button>
            <div className={style.categoryTextField}>
              {allDataShowCardsFalse[index]?.category}
            </div>
            <div className={style.flexContainer}>
              <p>{allDataShowCardsFalse[index]?.question}</p>
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
                handleSetBooleanPost();
              }}
            >
              Bookmark
            </button>
            <p className={style.categoryTextField}>
              {allDataShowCardsFalse[index]?.category}
            </p>
            <div className={style.flexContainer}>
              <p>{allDataShowCardsFalse[index]?.answer}</p>
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
        )
      ) : (
        <section className={style.cardNoDataAvalible}>
          <div>Bitte wählen Sie eine andere category</div>
        </section>
      )}

      {/*Anzeige des Buttons zum wählen der nachten Karte der die handleIndex funktion aufruft */}

      {isVisibleAll ? (
        <button
          className={style.buttonNextCard}
          type="button"
          onClick={() => {
            handleIndex();
          }}
        >
          Nächtes Karte
        </button>
      ) : null}

      {/*Link für die Navigation */}

      <LinkPages />
    </>
  );
}

export default ShowCards;
