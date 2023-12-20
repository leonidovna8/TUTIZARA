import * as React from "react";
import { useNavigate } from "react-router-dom";
import OrderTrack from "../../components/OrderTrack/OrderTrack";
import Button from "../../components/Button/Button";
import styles from "./PricePage.module.scss";
import HeaderOther from "../../components/HeaderOther/HeaderOther";

function PricePage() {
  const navigate = useNavigate();
  return (
    <>
        <HeaderOther />
      <section className={styles.priceContainer}>
        <OrderTrack />
        <h2 className={styles.price}>Price</h2>
        <ul className={styles.price__list}>
          <li className={styles.price__item}>
            <h4 className={styles.price__name}>“Basic”</h4>
            <p className={styles.price__cost}>3 000 грн</p>
            <span className={styles.price__desc}>1 година фотосесії</span>
            <span className={styles.price__desc}>
              до 100 фото в базовій обробці{" "}
            </span>
            <span className={styles.price__desc}>
              допомога з ідеєю та образом
            </span>
            <span className={styles.price__desc}>
              допомога у виборі локації
            </span>
            <span className={styles.price__desc}>
              готові фотографії протягом 10 днів
            </span>
            <a
              target="blank"
              href="https://www.instagram.com/tutizara_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            >
              <Button type="button" className="btn" />
            </a>
          </li>
          <li className={styles.price__item}>
            <h4 className={styles.price__name}>“Standart”</h4>
            <p className={styles.price__cost}>4 500 грн</p>
            <span className={styles.price__desc}>1 година фотосесії</span>
            <span className={styles.price__desc}>
              до 100 фото в базовій обробці{" "}
            </span>
            <span className={styles.price__desc}>
              10 фото в детальній ретуші
            </span>
            <span className={styles.price__desc}>
              допомога з ідеєю та образом
            </span>
            <span className={styles.price__desc}>
              допомога у виборі локації
            </span>
            <span className={styles.price__desc}>
              готові фотографії протягом 10 днів
            </span>
            <a
              target="blank"
              href="https://www.instagram.com/tutizara_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            >
              <Button type="button" className="btn" />
            </a>
          </li>
          <li className={styles.price__item}>
            <h4 className={styles.price__name}>“Premium”</h4>
            <p className={styles.price__cost}>7 200 грн</p>
            <span>1 година фотосесії</span>
            <span>до 100 фото в базовій обробці </span>
            <span>10 фото в детальній ретуші</span>
            <span>макіяж та укладка стиліста</span>
            <span>оренда студії та гримерної</span>
            <span>готові фотографії протягом 10 днів</span>
            <a
              target="blank"
              href="https://www.instagram.com/tutizara_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            >
              <Button type="button" className="btn" />
            </a>
          </li>
          <li className={styles.gift}>
            <div className={styles.imageContainer}>
              <img src="./images/priceCertificate.png" alt="Gift Certificate" />
            </div>
            <div className={styles.gift__content}>
              <h4 className={styles.gift__name}>Gift Certificate</h4>
              <p className={styles.gift__certificate}>
                Cертифікат подарунковий
              </p>
              <p className={styles.gift__cost}>4 500 грн</p>
              <span className={styles.gift__desc}>
                Сертифікат на фотосесію це універсальний і в той же час
                ексклюзивний подарунок. Ідеальний варіант для людини, яка вам
                цінна.
              </span>
              <span className={styles.gift__desc}>1 година фотосесії</span>
              <span className={styles.gift__desc}>
                10 фото в детальній ретуші
              </span>
              <span className={styles.gift__desc}>
                до 70 фото в авторській кольоровій обробці
              </span>
              <span className={styles.gift__desc}>
                готові фотографії протягом 10 днів
              </span>
              <a
                target="blank"
                href="https://www.instagram.com/tutizara_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                className={styles.gift__btn}
              >
                <Button type="button" className="btn" />
              </a>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
export default PricePage;
