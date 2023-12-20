import * as React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TeamPage.module.scss";
import HeaderOther from "../../components/HeaderOther/HeaderOther";
import Button from "../../components/Button/Button";

function TeamPage() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderOther />
      <section className={styles.teamContainer}>
        <p className={styles.teamDescription}>
          Ми - команда, в яку входять фотограф та спеціалісти по візажу та
          зачіскам. Ми працюємо разом, щоб забезпечити вам повний образ для
          фотосесій. Ви можете довіряти нам, оскільки маємо багаторічний досвід
          і безмежний ентузіазм.
        </p>
        <div className={styles.tanya}>
          <picture className={styles.tanya__photo}>
            <img
              src="/images/team/Tanya-1.png"
              width="315"
              height="430"
              alt="Tetyana Kluchko"
              className={styles.tanya__one}
            />
            <img
              src="/images/team/Tanya-2.png"
              width="315"
              height="430"
              alt="Tetyana Kluchko"
              className={styles.tanya__two}
            />
          </picture>
          <div className={styles.tanya__info}>
            <h3 className={styles.tanya__name}>Tetyana Kluchko</h3>
            <p className={styles.tanya__prof}>Візажист-стиліст по зачіскам</p>
            <p className={styles.tanya__desc}>
              Більше 2 років роботи в одній із найпопулярніших мереж салонів
              краси G. Bar на посаді топ-майстеа “Візажист-бровіст”. Більше 3
              років працюю на себе та викладаю свої автоські курси “Сам собі
              візажист” та “Візажист PRO”
            </p>
            <p className={styles.tanya__desc}>
              Робила мейк відомим людям, таким як Надя Дорофеева, Мішель Андаде,
              Jerry Heil, Стася Ровінська та багатьом іншим відомим блогерам
            </p>
            <a target="blank" href="https://www.instagram.com/key2_beauty/">
              <Button
                type="button"
                text="Переглянути Instagram"
                className="btn"
                onClick={() => {
                  navigate("/price");
                }}
              />
            </a>
          </div>
        </div>
        <p className={styles.personsWork}>
          Портфоліо стиліста-візажиста Тетяни
        </p>
      </section>
      <div className={styles.works}>
        <img src="/images/team/tanya-work-hover-1.png" alt="tanya-work-1" />
        <img src="/images/team/tanya-work-hover-2.png" alt="tanya-work-2" />
        <img src="/images/team/tanya-work-hover-3.png" alt="tanya-work-3" />
        <img src="/images/team/tanya-work-hover-4.png" alt="tanya-work-4" />
      </div>
      <section
        className={`${styles.teamContainer} ${styles.teamContainerBackground}`}
      >
        <div className={styles.nata}>
          <div className={styles.nata__info}>
            <h3 className={styles.nata__name}>Natalya Bozhenko</h3>
            <p className={styles.nata__prof}>Стиліст по зачіскам</p>
            <p className={styles.nata__desc}>
              Я навчалась в Київській академії перукарського мистецтва,а також
              пройшла всі курси підвищення кваліфікації в Юлії Ксеніти
            </p>
            <p className={styles.nata__desc}>В професії загалом 5 років</p>
            <p className={styles.nata__desc}>
              Три з них працюю в G. Bar ,через 1,5 роки стала Топ майстром
            </p>
            <p className={styles.nata__desc}>
              Маю також свою студію, де рада бачити своїх клієнтів і там же
              проводжу свої МК по зачіскам
            </p>
            <a
              target="blank"
              href="https://www.instagram.com/nataa_bozhenko_hair/"
            >
              <Button
                type="button"
                text="Переглянути Instagram"
                className="btn"
                onClick={() => {
                  navigate("/price");
                }}
              />
            </a>
          </div>
          <picture className={styles.nata__photo}>
            <img
              src="/images/team/Natalya-1.png"
              width="315"
              height="430"
              alt="Natalya Bozhenko"
              className={styles.nata__one}
            />
            <img
              src="/images/team/Natalya-2.png"
              width="315"
              height="430"
              alt="Natalya Bozhenko"
              className={styles.nata__two}
            />
          </picture>
        </div>
        <p className={styles.personsWork}>
          Портфоліо стиліста по зачіскам Наталії
        </p>
      </section>
      <div className={styles.works}>
        <img src="/images/team/natalya-work-hover-1.png" alt="natalya-work-1" />
        <img src="/images/team/natalya-work-hover-2.png" alt="natalya-work-2" />
        <img src="/images/team/natalya-work-hover-3.png" alt="natalya-work-3" />
        <img src="/images/team/natalya-work-hover-4.png" alt="natalya-work-4" />
      </div>
    </>
  );
}
export default TeamPage;
