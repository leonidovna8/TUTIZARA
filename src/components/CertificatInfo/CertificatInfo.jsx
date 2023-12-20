import * as React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./CertificatInfo.module.scss";
import Button from "../Button/Button";

function CertificatInfo() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className={styles.container}>
          <div className={styles.certificate}>
            <h3 className={styles.certificate__title}>Pro Certificate</h3>
            <h4 className={styles.certificate__subtitle}>
              Cертифікат подарунковий
            </h4>
            <div className={styles.certificate__content}>
              <p className={styles.certificate__desc}>
                Сертефікат на фотосесію це універсальний і в той же час
                ексклюзивний подарунок. Ідеальний варіант для людини, яка вам
                цінна.
              </p>
              <p className={styles.certificate__desc}>
                Дизайн сертифіката продуманий до дрібниць : стильний та водночас
                мінімалістичний сертифікат вкладений у магнітний конверт з
                авторським пакуванням.
              </p>
            </div>
          </div>
          <Button
            type="button"
            text="Переглянути портфоліо"
            className="btn"
            onClick={() => {
              navigate("/price");
            }}
          />
        </div>
      </Container>
      <div className={styles.certificateContainer}>
        <img src="/images/Certificate.png" alt="Certificate" />
      </div>
    </>
  );
}
export default CertificatInfo;
