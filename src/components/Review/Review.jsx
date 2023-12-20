import * as React from "react";
import styles from "./Review.module.scss";
import Container from "../Container/Container";

function Review() {
  return (
    <>
      <Container>
        <h2 className={styles.title}>Ваші відгуки</h2>
        <section className={styles.reviewContainer}>
          <div className={styles.review}>
            <img src="/images/review-1.png" width="80" height="80" alt="Anna" />
            <h3 className={styles.userName}>Anna</h3>
            <p className={styles.userReview}>
              Я настільки вражена який Ви професіонал своєї справи, як можете
              грамотно поставити питання, не в наказовому тоні, а розслаблено
              допомогти, підштовхнувши до гарних поз, поправити волосся, зробити
              ще гарнішою в кадрі. Дякую, це було ідеально.
            </p>
          </div>
          <div className={styles.review}>
            <img src="/images/review-2.png" width="80" height="80" alt="Yana" />
            <h3 className={styles.userName}>Yana</h3>
            <p className={styles.userReview}>
              Боже, Настя, ну який це космос просто! Яка ти крутезна! Дякую
              тобі, фото нереальні просто, вже вкотре переглядаю і так кайфую.
              Дякую тобі за таку естетичну насолоду. Яка це класна була ідея
              подарунку для себе!
            </p>
          </div>
          <div className={styles.review}>
            <img
              src="/images/review-3.png"
              width="80"
              height="80"
              alt="Roman"
            />
            <h3 className={styles.userName}>Roman</h3>
            <p className={styles.userReview}>
              Настя, величезне тобі спасибі! Дуже цікаво подивитися на себе з
              боку. Я досить рідко фоткаюся, а тут одразу багато себе, у різних
              образах, настроях та ракурсах. Прям якийсь терапевтичний ефект не
              передати словами.
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}
export default Review;
