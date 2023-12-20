import HeaderOther from "../../components/HeaderOther/HeaderOther";
import CityIcon from "../../components/UI/CityIcon";
import PhoneIcon from "../../components/UI/PhoneIcon";
import MailIcon from "../../components/UI/MailIcon";
import TelegramBlackIcon from "../../components/UI/TelegramBlackIcon";
import CameraIcon from "../../components/UI/CameraIcon";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import styles from "./ContactsPage.module.scss";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

function ContactsPage() {
    const navigate = useNavigate();
  const initialValues = {
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Обов'язкове поле"),
    phoneNumber: Yup.string().required("Обов'язкове поле"),
    email: Yup.string().email("Введіть коректний email"),
    message: Yup.string(),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <HeaderOther />
      <Container>
        <section className={styles.contactsContainer}>
          <div className={styles.contact}>
            <p className={styles.title}>Я завжди на звʼязку</p>
            <p className={styles.desc}>
              Ви завжди можете використовувати комфортний для Вас спосіб звʼязку
              для будь якого запиту, що у Вас виник: месседжер, пошта, телефон,
              форма зворотнього звʼязку
            </p>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                <CityIcon />
                <a href="#" className={styles.link}>
                  Україна, Київ
                </a>
              </li>
              <li className={styles.list__item}>
                <PhoneIcon />
                <a
                  className={styles.link}
                  target="blank"
                  href="tel:+380936715620"
                >
                  +380936715620
                </a>
              </li>
              <li className={styles.list__item}>
                <MailIcon />
                <a
                  className={styles.link}
                  target="blank"
                  href="mailto:tutizara11@gmail.com"
                >
                  tutizara11@gmail.com
                </a>
              </li>
              <li className={styles.list__item}>
                <TelegramBlackIcon />
                <a
                  className={styles.link}
                  target="blank"
                  href="https://t.me/tutizara"
                >
                  tutizara
                </a>
              </li>
              <li className={styles.list__item}>
                <CameraIcon />
                <a
                  className={styles.link}
                  target="blank"
                  href="https://www.instagram.com/tutizara_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                >
                  tutizara_ph
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <p className={styles.title}>Відправити повідомлення</p>
            <p className={styles.desc}>
              Якщо у Вас виникли будь які питання, Ви можете відправити їх
              користуючись формою ниже:
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div>
                  <label htmlFor="name" className={styles.userLabel}>
                    Ваше ім'я *
                  </label>
                  <Field className={styles.userInput} type="text" name="name" />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className={styles.userLabel}>
                    Номер телефону *
                  </label>
                  <IntlTelInput
                    style={{
                      border: "1px solid #292929",
                      height: "10px",
                      width: "480px",
                      padding: "16px 10px"
                    }}
                    fieldId="phoneNumber"
                    fieldName="phoneNumber"
                    defaultCountry="ua"
                    preferredCountries={["ua", "it", "gb"]}
                    autoComplete="tel"
                  />
                  <ErrorMessage name="phoneNumber" component="div" />
                </div>
                <div>
                  <label htmlFor="email" className={styles.userLabel}>
                    Електронна пошта *
                  </label>
                  <Field
                    className={styles.userInput}
                    type="email"
                    name="email"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <label htmlFor="message" className={styles.userLabel}>
                    Повідомлення *
                  </label>
                  <Field
                    className={styles.userInput__message}
                    as="textarea"
                    name="message"
                  />
                  <ErrorMessage name="message" component="div" />
                </div>
                <Button
                  type="button"
                  text="Відправити повідомлення"
                  className="btn"
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </Form>
            </Formik>
          </div>
        </section>
      </Container>
    </>
  );
}
export default ContactsPage;
