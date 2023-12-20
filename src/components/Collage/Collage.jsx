import * as React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import Button from "../Button/Button";
import styles from "./Collage.module.scss";

function Collage() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className={styles.viewPortfolio}>
          <p className={styles.desc}>
            Індивідуальний стиль - це те, за що мене обирають клієнти
          </p>
          <Button
            type="button"
            text="Переглянути портфоліо"
            className="btn"
            onClick={() => {
              navigate("/portfolio");
            }}
          />
        </div>
      </Container>
      <div className={styles.collage}>
        <div className={styles.image}>
          <img
            className={styles.image__photo}
            src="images/сollage/portfolio-1.png"
            alt="Laud"
          />
          <p className={styles.image__desc}>LAUD</p>
          <p className={styles.image__subdesc}>individual photo</p>
        </div>
        <div className={styles.image}>
          <img
            className={styles.image__photo}
            src="images/сollage/portfolio-2.png"
            alt="Olena&Misha"
          />
          <p className={styles.image__desc}>OLENA&MISHA</p>
          <p className={styles.image__subdesc}>love story</p>
        </div>
        <div className={styles.image}>
          <img
            className={styles.image__photo}
            src="images/сollage/portfolio-3.png"
            alt="Marina"
          />
          <p className={styles.image__desc}>MARINA</p>
          <p className={styles.image__subdesc}>individual photo</p>
        </div>
        <div className={styles.image}>
          <img
            className={styles.image__photo}
            src="images/сollage/portfolio-4.png"
            alt="Evgeniy"
          />
          <p className={styles.image__desc}>EVGENIY</p>
          <p className={styles.image__subdesc}>individual photo</p>
        </div>
        <div className={styles.image}>
          <img
            className={styles.image__photo}
            src="images/сollage/portfolio-5.png"
            alt="Sergey"
          />
          <p className={styles.image__desc}>SERGEY</p>
          <p className={styles.image__subdesc}>individual photo</p>
        </div>
        <div className={styles.image}>
          <img
            className={styles.image__photo}
            src="images/сollage/portfolio-6.png"
            alt="Masha"
          />
          <p className={styles.image__desc}>MASHA</p>
          <p className={styles.image__subdesc}>individual photo</p>
        </div>
        <div className={styles.image}>
          <img
            className={styles.image__photo}
            src="images/сollage/portfolio-7.png"
            alt="Alex"
          />
          <p className={styles.image__desc}>ALEX</p>
          <p className={styles.image__subdesc}>individual photo</p>
        </div>
        <div className={styles.image}>
          <img
            className={styles.image__photo}
            src="images/сollage/portfolio-8.png"
            alt="Elena&Valentine"
          />
          <p className={styles.image__desc}>ELENA&VALENTINE</p>
          <p className={styles.image__subdesc}>love story</p>
        </div>
      </div>
    </>
  );
}
export default Collage;
