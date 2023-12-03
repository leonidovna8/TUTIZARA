import styles from "./Collage.module.scss";

function Collage() {
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <img
          className={styles.image__photo}
          src="images/сollage/portfolio-1.png"
          alt="Laud"
        />
        <p className={styles.image__desc}>Laud</p>
        <p className={styles.image__subdesc}>Individual photo</p>
      </div>
      <div className={styles.image}>
        <img
          className={styles.image__photo}
          src="images/сollage/portfolio-2.png"
          alt="Olena&Misha"
        />
        <p className={styles.image__desc}>Olena&Misha</p>
        <p className={styles.image__subdesc}>love story</p>
      </div>
      <div className={styles.image}>
        <img
          className={styles.image__photo}
          src="images/сollage/portfolio-3.png"
          alt="Marina"
        />
        <p className={styles.image__desc}>Marina</p>
        <p className={styles.image__subdesc}>Individual photo</p>
      </div>
      <div className={styles.image}>
        <img
          className={styles.image__photo}
          src="images/сollage/portfolio-4.png"
          alt="Evgeniy"
        />
        <p className={styles.image__desc}>Evgeniy</p>
        <p className={styles.image__subdesc}>Individual photo</p>
      </div>
      <div className={styles.image}>
        <img
          className={styles.image__photo}
          src="images/сollage/portfolio-5.png"
          alt="Sergey"
        />
        <p className={styles.image__desc}>Sergey</p>
        <p className={styles.image__subdesc}>Individual photo</p>
      </div>
      <div className={styles.image}>
        <img
          className={styles.image__photo}
          src="images/сollage/portfolio-6.png"
          alt="Masha"
        />
        <p className={styles.image__desc}>Masha</p>
        <p className={styles.image__subdesc}>Individual photo</p>
      </div>
      <div className={styles.image}>
        <img
          className={styles.image__photo}
          src="images/сollage/portfolio-7.png"
          alt="Alex"
        />
        <p className={styles.image__desc}>Alex</p>
        <p className={styles.image__subdesc}>Individual photo</p>
      </div>
      <div className={styles.image}>
        <img
          className={styles.image__photo}
          src="images/сollage/portfolio-8.png"
          alt="Elena&Valentine"
        />
        <p className={styles.image__desc}>Elena&Valentine</p>
        <p className={styles.image__subdesc}>love story</p>
      </div>
    </div>
  );
}
export default Collage;
