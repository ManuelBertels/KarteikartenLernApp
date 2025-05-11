import Image from "next/image";
import { useState } from "react";
import styles from "./DeleteCard.module.css";

function DeleteCard({ element, handleDelete }) {
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  // Umschalten der Bestätigungsanzeige
  function toggleConfirmation() {
    setIsConfirmationVisible(!isConfirmationVisible);
  }

  return (
    <>
      {/* Haupt-Löschen-Button */}
      <button
        className={styles.buttonDeleteImage}
        type="button"
        onClick={toggleConfirmation}
      >
        <Image src="/circle-x.svg" height={25} width={25} alt="Delete Icon" />
      </button>

      {/* Bestätigungsdialog */}
      {isConfirmationVisible && (
        <div className={styles.deleteContainer}>
          <button
            onClick={() => {
              handleDelete(element); // Löschen der Karte
              toggleConfirmation(); // Bestätigungsdialog schließen
            }}
            className={styles.buttonDelete}
          >
            Löschen
          </button>
          <button
            onClick={toggleConfirmation} // Dialog schließen
            className={styles.buttonDelete}
          >
            Abbrechen
          </button>
        </div>
      )}
    </>
  );
}

export default DeleteCard;
