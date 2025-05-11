import LinkPages from "@/Components/LinkPages/LinkPages";
import style from "./bookmark.module.css";
import ShowBookmarkCard from "@/Components/ShowBookmarkCard";
function Bookmark({ allData }) {
  const bookmarkTrueData = allData.filter(
    (element) => element.bookmark === true
  );

  return (
    <>
      <details className={style.details}>
        Wenn du auf der Seite Üben warst und dort auf Bookmark gedrückt hast,
        werden diese Karten hier angezeigt. Wenn du Sie hier wieder raus haben
        möchtest dann drücke hier bitte wieder auf Bookmark und die Karten
        landen wieder auf der Seite zum Üben.
      </details>
      {bookmarkTrueData.map((element) => {
        return (
          <ShowBookmarkCard key={element._id} bookmarkTrueData={element} />
        );
      })}
      <LinkPages />
    </>
  );
}

export default Bookmark;
