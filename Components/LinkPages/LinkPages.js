import styles from "./LinkPages.module.css";
import Link from "next/link";

function LinkPages() {
  return (
    <div className={styles.divFlex}>
      <Link href="./">Karten erstellen</Link>
      <Link href="./showCards">Üben</Link>
      <Link href="./bookmark">Bookmark</Link>
    </div>
  );
}

export default LinkPages;
