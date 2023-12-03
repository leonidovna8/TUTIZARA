import { useState, useEffect, useRef } from "react";
import styles from "./DinamicInfo.module.scss";

function DinamicInfo() {
  const refNum = useRef(null);
  const refRate = useRef(null);
  const refNumber = useRef(null);
  const refRates = useRef(null);

  const [numValue, setNumValue] = useState(0);
  const [rateValue, setRateValue] = useState(0);
  const [numberValue, setNumberValue] = useState(0);
  const [ratesValue, setRatesValue] = useState(0);

  useEffect(() => {
    const spanNum = refNum.current;
    const spanRate = refRate.current;
    const spanRates = refNumber.current;
    const spanNumber = refRates.current;

    const handleNumAnimation = () => {
      let number = 0;
      const totalNumber = 4;
      const step = 10;
      const timeInterval = 30;
      const interval = setInterval(() => {
        number += step;
        if (number >= totalNumber) {
          clearInterval(interval);
          number = totalNumber;
        }
        setNumValue(number);
        spanNum.innerText = `${number}+`;
      }, timeInterval);
    };

    const handleNumberAnimation = () => {
      let number = 0;
      const totalNumber = 500;
      const step = 10;
      const timeInterval = 30;
      const interval = setInterval(() => {
        number += step;
        if (number >= totalNumber) {
          clearInterval(interval);
          number = totalNumber;
        }
        setNumberValue(number);
        spanNumber.innerText = `${number}+`;
      }, timeInterval);
    };

    const handleRateAnimation = () => {
      let number = 0;
      const totalNumber = 20;
      const step = 2;
      const timeInterval = 50;
      const interval = setInterval(() => {
        number += step;
        if (number >= totalNumber) {
          clearInterval(interval);
          number = totalNumber;
        }
        setRateValue(number);
        spanRate.innerText = `${number}+`;
      }, timeInterval);
    };

    const handleRatesAnimation = () => {
      let number = 0;
      const totalNumber = 80;
      const step = 2;
      const timeInterval = 50;
      const interval = setInterval(() => {
        number += step;
        if (number >= totalNumber) {
          clearInterval(interval);
          number = totalNumber;
        }
        setRatesValue(number);
        spanRates.innerText = `${number}+`;
      }, timeInterval);
    };

    setTimeout(() => {
      handleNumAnimation();
      handleNumberAnimation();
      handleRateAnimation();
      handleRatesAnimation();
    }, 1000);
  }, []);

  return (
      <main className={styles.infoWrapper}>
        <img src="./images/general-3.png" alt="About" className={styles.img} />
        <div className={styles.info}>
          <h4 className={styles.info__title}>
            Наше досягнення - ваше задоволення
          </h4>

          <ul className={styles.dataSet}>
            <li className={styles.dataSet__item}>
              <span ref={refNum} className={styles.data}>
                {numValue}+
              </span>
              <p className={styles.text}>Індивідуальних фотосессій</p>
            </li>
            <li className={styles.dataSet__item}>
            <span ref={refRates} className={styles.data}>
                {ratesValue}+
              </span>
              <p className={styles.text}>Індивідуальних фотосессій</p>
            </li>
            <li className={styles.dataSet__item}>
              <span ref={refRate} className={styles.data}>
                {rateValue}+
              </span>
              <p className={styles.text}>Подарункових сертифікатів</p>
            </li>
            <li className={styles.dataSet__item}>
            <span ref={refNumber} className={styles.data}>
                {numberValue}+
              </span>
              <p className={styles.text}>Подарункових сертифікатів</p>
            </li>
          </ul>
        </div>
      </main>
  );
}
export default DinamicInfo;
