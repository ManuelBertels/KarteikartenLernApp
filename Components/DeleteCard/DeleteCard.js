import Image from "next/image";
import { useState } from "react";
import styles from "./DeleteCard.module.css";

function DeleteCard({ element, handleDelete }) {
  const [button, setButton] = useState(false);

  function handleButton() {
    setButton(!button);
  }

  return (
    <>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          handleButton(element);
        }}
      >
        <Image src="/circle-x.svg" height={25} width={25} alt="bild"></Image>
      </button>

      {button && (
        <div className={styles.deleteContainer}>
          <button
            onClick={() => {
              handleDelete(element);
              handleButton();
            }}
            className={styles.buttonDelete}
          >
            löschen
          </button>
          <button
            onClick={() => {
              setButton(!button);
            }}
            className={styles.buttonDelete}
          >
            nein
          </button>
        </div>
      )}
    </>
  );
}

export default DeleteCard;
