import * as React from "react";
import styles from "./OrderTrack.module.scss";
import { useState } from "react";

function OrderTrack() {
  const stages = [
    "Консультація",
    "Передоплата",
    "Бронювання",
    "Створення образу",
    "Фотосессія",
    "Обробка фото",
    "Передача фото",
  ];

  const [currentStage, setCurrentStage] = useState(0);

  const handleNextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handlePreviousStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };
  return (
    <div className={styles.track}>
      <h2 className={styles.pro}>
        Pro
        <span className={styles.proSpan}> співпрацю з фотографом</span>
      </h2>
      <div className={styles.orderTrack}>
        <button className={styles.trackButton} onClick={handlePreviousStage}>
          Previous
        </button>
        <div className={`${styles.trackName}`}>
          <span className={`${styles.stageNumber}`}>{currentStage + 1}</span>{" "}
          <span className={`${styles.stageText}`}>{stages[currentStage]}</span>
        </div>
        <button className={styles.trackButton} onClick={handleNextStage}>
          Next
        </button>
      </div>
    </div>
  );
}
export default OrderTrack;
