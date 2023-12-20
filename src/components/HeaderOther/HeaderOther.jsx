import React, { useState, useEffect } from "react";
import cn from "classnames";
import NavOther from "./NavOther/NavOther";
import styles from "./HeaderOther.module.scss";

function HeaderOther() {
  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      if (scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (scrollY >= 400) {
        setHide(true);
      } else {
        setHide(false);
      }

      if (scrollY < prevScrollY) {
        setHide(false);
      }

      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, prevScrollY]);
  return (
    <header
      className={cn(styles.header, {
        [styles.scrolled]: scrolled,
        [styles.hide]: hide,
      })}
    >
      <NavOther />
    </header>
  );
}
export default HeaderOther;
