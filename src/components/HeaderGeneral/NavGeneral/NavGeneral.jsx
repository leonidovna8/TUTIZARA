import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
// import PropTypes from "prop-types";
import styles from "./NavGeneral.module.scss";
import TelegramIcon from "../../UI/TelegramIcon";
import InstaIcon from "../../UI/InstaIcon";

function NavGeneral({ showBurger, setShowBurger }) {
  // const closeBurgerMenu = () => {
  //   setShowBurger(false);
  // };
  return (
    <nav className={cn(styles.nav, { [styles.active]: showBurger })}>
      <div className={styles.container}>
        <div className={styles.logoNav}>
          <a
            target="blank"
            href="https://t.me/tutizara"
            className={styles.telegramIcon}
          >
            <TelegramIcon />
          </a>
          <Link to="/" className={styles.logo}>
            TUTIZARA
          </Link>

          <a
            target="blank"
            href="https://www.instagram.com/tutizara_?igshid=OGQ5ZDc2ODk2ZA=="
            className={styles.instaIcon}
          >
            <InstaIcon />
          </a>
        </div>

        <ul className={styles.list}>
          {}
          <li className={styles.list__item}>
            <Link
              to="/"
              className={styles.itemLink}
              // onClick={closeBurgerMenu}
            >
              Головна
            </Link>
          </li>
          {}
          <li className={styles.list__item}>
            <Link
              to="/portfolio"
              className={styles.itemLink}
              // onClick={closeBurgerMenu}
            >
              Портфоліо
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link
              to="/price"
              className={styles.itemLink}
              // onClick={closeBurgerMenu}
            >
              Прайс
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link
              to="/team"
              className={styles.itemLink}
              // onClick={closeBurgerMenu}
            >
              Наша команда
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link
              to="/studios"
              className={styles.itemLink}
              // onClick={closeBurgerMenu}
            >
              Фотостудії
            </Link>
          </li>

          <li className={styles.list__item}>
            <Link
              to="/contacts"
              className={styles.itemLink}
              // onClick={closeBurgerMenu}
            >
              Контакти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// NavGeneral.propTypes = {
// className: PropTypes.string,
//   showBurger: PropTypes.bool.isRequired,
//   setShowBurger: PropTypes.func.isRequired,
// };

export default NavGeneral;
