import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import InstaIcon from "../UI/InstaIcon";
import TelegramIcon from "../UI/TelegramIcon";


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <ul className={styles.contact}>
          <li className={styles.contact__item}>
            <p className={styles.contact__text}>Phone</p>
            <a className={styles.contact__link} href="tel:+380936715620">
              +380936715620
            </a>
          </li>
          <li className={styles.contact__item}>
            <p className={styles.contact__text}>Social</p>
            <a
              target="blank"
              href="https://t.me/tutizara"
              className={styles.telegramIcon}
            >
              <TelegramIcon />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/tutizara_?igshid=OGQ5ZDc2ODk2ZA=="
              className={styles.instaIcon}
            >
              <InstaIcon />
            </a>
          </li>
          <li className={styles.contact__item}>
            <p className={styles.contact__text}>Email</p>
            <a
              className={styles.contact__link}
              href="mailto:tutizara11@gmail.com"
            >
              tutizara11@gmail.com
            </a>
          </li>
        </ul>
        <ul className={styles.menu}>
          <Link to="/" className={styles.menu__item}>
            {" "}
            Головна{" "}
          </Link>
          <Link to="/portfolio" className={styles.menu__item}>
            {" "}
            Портфоліо{" "}
          </Link>
          <Link to="/price" className={styles.menu__item}>
            {" "}
            Прайс{" "}
          </Link>
          <Link to="/team" className={styles.menu__item}>
            {" "}
            Наша команда{" "}
          </Link>
          <Link to="/studios" className={styles.menu__item}>
            {" "}
            Фотостудії{" "}
          </Link>
          <Link to="/contacts" className={styles.menu__item}>
            {" "}
            Контакти{" "}
          </Link>
        </ul>
        <p className={styles.desc}>©2023 Company Name. All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
