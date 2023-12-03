import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./InfoAbout.module.scss";

function InfoAbout() {
  const navigate = useNavigate();
  return (
    <Container>
      <main className={styles.info}>
        <div className={styles.info__content}>
          <h3 className={styles.info__title}>Anastasia Dukhovna</h3>
          <h5 className={styles.info__subtitle}>Фотограф</h5>
          <p className={styles.info__desc}>
            Я займаюся фотографією близько 4-х років. Камера для мене - це
            інструмент задля відображення краси,почуттів, передачі сенсів, це
            спосіб доторкнутися до внутрішнього світу людини.{" "}
          </p>
          <p className={styles.info__desc}>
            Мені подобається працювати з людьми, розкривати нові грані та
            закохувати їх у самих себе. Фотографія для мене - це не лише
            красивий кадр, а й телепорт за допомогою якого можна знову відчути
            та прожити певні почуття. Мене надихає реакція людей, коли вони
            отримують свої портрети, як реагують на пережитий досвід в кадрі.
          </p>
        </div>
        <Button
          type="button"
          text="Вибрати фотосессію"
          className="btn"
          onClick={() => {
            navigate("/price");
          }}
        />
      </main>
    </Container>
  );
}

export default InfoAbout;
