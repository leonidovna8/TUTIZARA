import * as React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StudiosPage.module.scss";
import Button from "../../components/Button/Button";
import PriceIcon from "../../components/UI/PriceIcon";
import LocationIcon from "../../components/UI/LocationIcon";
import CameraIcon from "../../components/UI/CameraIcon";
import CityIcon from "../../components/UI/CityIcon";
import PhoneIcon from "../../components/UI/PhoneIcon";
import TimeIcon from "../../components/UI/TimeIcon";
import HeaderOther from "../../components/HeaderOther/HeaderOther";

function StudiosPage() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderOther />
      <section className={styles.studiosContainer}>
        <p className={styles.desc}>
          Рекомендовані фотостудії, які перевірені часом та досівдом
        </p>
        <p className={styles.descTwo}>
          Більш детальну інфомацію Ви можете знайти на сайті зазначеної
          фотостудії або в їх Інстаграмі
        </p>

        <div className={styles.studio}>
          <div className={styles.studio__info}>
            <div className={styles.studio__desc}>
              <h3 className={styles.studio__name}>
                Фотостудія{" "}
                <span className={styles.studio__subname}>LOFT31</span>
              </h3>
              <span className={styles.studio__span}>
                В студії присутні дві локації - ЗАЛ UNDERLOFT та LOFT{" "}
              </span>
              <p className={styles.studio__description}>
                ЗАЛ UNDERLOFT - це фотостудія з кабінетом для тих, кто шукає
                місце, де зняти чоловічий портрет - і не тільки чоловічий. В
                залі витримана стилістика інтерʼєру, фактурні стіни
              </p>
              <p className={styles.studio__description}>
                ЗАЛ LOFT - це фотостудія із циклорамою ідеально підійде для
                портретної зйомки, відеороликів, стокових фото та створення
                нового продукту. Особливість залу - ідеально білосніжні стіни й
                підлога
              </p>
              <p className={styles.studio__description}>
                Зал оснащений візажною зоною, гарячою водою, двома санвузлами,
                за потреби — окремим входом. У залі є кольорові фони
                (обов’язково в наявності білий, чорний, сірий, інша палітра — за
                умови попереднього бронювання), а також: чудова бетонна фактура
                з текстурою дерева, натуральна дерев’яна підлога, книжкова ніша,
                унікальна дерев’яна стіна, п’ять великих вікон (три з них
                панорамні), оригінальні гвинтові сходи.
              </p>
            </div>
            <ul className={styles.studio__price}>
              <li className={styles.studio__list}>
                <PriceIcon />
                <p className={styles.studio__link}>Прайс</p>
              </li>
              <li className={styles.studio__list}>
                <CameraIcon />
                <p className={styles.studio__link}>Фотостудія LOFT31</p>
              </li>
              <li className={styles.studio__list}>
                <LocationIcon />
                <p className={styles.studio__link}>
                  https://loftphotostudio.com/
                </p>
              </li>
              <li className={styles.studio__list}>
                <TimeIcon />
                <p className={styles.studio__link}>Графік роботи 8:00-21:00</p>
              </li>
              <li className={styles.studio__list}>
                <CityIcon />
                <p className={styles.studio__link}>
                  Київ, вул. Нижньоюрківська, 31
                </p>
              </li>
              <li className={styles.studio__list}>
                <PhoneIcon />
                <p className={styles.studio__link}>
                  +380974097499, +380948530780
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.studio__photo}>
            <img src="./images/studios/loft-1.png" alt="loft-1" />
            <img src="./images/studios/loft-2.png" alt="loft-2" />
            <img src="./images/studios/loft-3.png" alt="loft-3" />
          </div>
          <Button
            type="button"
            text="Замовити фотосессію"
            className="btn"
            onClick={() => {
              navigate("/price");
            }}
          />
        </div>

        <div className={styles.studio__grey}>
          <div className={styles.studio__info}>
            <div className={styles.studio__desc}>
              <h3 className={styles.studio__name}>
                Фотостудія{" "}
                <span className={styles.studio__subname}>
                  Icon rental Studio
                </span>
              </h3>
              <span className={styles.studio__span}>
                В студії присутні чотори локації{" "}
              </span>
              <p className={styles.studio__description}>
                ЗАЛ 1 - це глянцева циклорама 10х5, великі вікна на всю площу
                стіни (денне світло)
              </p>
              <p className={styles.studio__description}>
                ЗАЛ 2 - 128 м2 площа залу, який знаходиться на сонячній стороні,
                прямі сонячні промені з починаются з 10:00 ранку та закінчуются
                приблизно о 16:00. В залі найавні елементи інтерʼєру котрі
                постійно оновлюются
              </p>
              <p className={styles.studio__description}>
                ЗАЛ 3 - глянцева циклорама в лофт стилі. Ця зала не має прямих
                сонячних променів, але має мʼяке денне світло. В залі присутні
                такі структури як дерево, камінь
              </p>
              <p className={styles.studio__description}>
                ЗАЛ 5- глянцева циклорама, яка не має прямих сонячних променів,
                але має мʼяке денне світло. В залі присутні декорації
              </p>
              <p className={styles.studio__description}>
                В данній фотостудії можна окремо орендувати гримерку у холі
                студії – 100 грн/год. При оренді будь-якої зали можлива зйомка в
                холі-100 грн/год.
              </p>
            </div>
            <ul className={styles.studio__price}>
              <li className={styles.studio__list}>
                <PriceIcon />
                <p className={styles.studio__link}>Прайс</p>
              </li>
              <li className={styles.studio__list}>
                <CameraIcon />
                <p className={styles.studio__link}>
                  Фотостудія Icon rental Studio
                </p>
              </li>
              <li className={styles.studio__list}>
                <LocationIcon />
                <p className={styles.studio__link}>http://icon-kiev.com/</p>
              </li>
              <li className={styles.studio__list}>
                <TimeIcon />
                <p className={styles.studio__link}>Графік роботи цілодобово</p>
              </li>
              <li className={styles.studio__list}>
                <CityIcon />
                <p className={styles.studio__link}>
                  Київ, вул. Олександра Довженка 3
                </p>
              </li>
              <li className={styles.studio__list}>
                <PhoneIcon />
                <p className={styles.studio__link}>
                  +380977112266, +380930650941
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.studio__photo}>
            <img src="./images/studios/icon-1.png" alt="icon-1" />
            <img src="./images/studios/icon-2.png" alt="icon-2" />
            <img src="./images/studios/icon-3.png" alt="icon-3" />
          </div>
          <Button
            type="button"
            text="Замовити фотосессію"
            className="btn"
            onClick={() => {
              navigate("/price");
            }}
          />
        </div>

        <div className={styles.studio}>
          <div className={styles.studio__info}>
            <div className={styles.studio__desc}>
              <h3 className={styles.studio__name}>
                Фотостудія{" "}
                <span className={styles.studio__subname}>7sky_space</span>
              </h3>
              <p className={styles.studio__description}>
                Це триповерховий пентхаус на 27-му поверсі з окремою терасою та
                десятками фотозон
              </p>
              <p className={styles.studio__description}>
                ЗАЛ Delight - Студія позиціонується, як простір з природним
                освітленням і справжньою домашньою атмосферою. В день дуже
                багато освітлення з вікна, ввечері велика кількість
                підсвічування в інтер'єрі.
              </p>
              <p className={styles.studio__description}>
                ЗАЛ Bali - Зал наповнений променями східного та денного сонця,
                має гарне освітлення у вечірній час, а також додаткові джерела
                світла. В залі наявні фотостіна з живими рослинами, безліч
                тропічних рослин з повстяними гальками-пуфами для втілення
                будь-яких ідей для Вас.
              </p>
              <p className={styles.studio__description}>
                ЗАЛ Home - В залі "Home" атмосфера домашнього затишку в
                поєднанні з сучасним інтерьєром.В залі присутня вітальня з
                великим диваном, піаніно та каміном. Повністю функціональна
                кухня, на якій ви маєте можливість готувати будь-які страви.
                Спальня з величезним ліжком, виконана в ніжних рожево-сірих
                тонах. Ванна та душова
              </p>
            </div>
            <ul className={styles.studio__price}>
              <li className={styles.studio__list}>
                <PriceIcon />
                <p className={styles.studio__link}>Прайс</p>
              </li>
              <li className={styles.studio__list}>
                <CameraIcon />
                <p className={styles.studio__link}>Фотостудія 7sky_space</p>
              </li>
              <li className={styles.studio__list}>
                <LocationIcon />
                <p className={styles.studio__link}>
                  https://linktr.ee/7sky_space
                </p>
              </li>
              <li className={styles.studio__list}>
                <TimeIcon />
                <p className={styles.studio__link}>Графік роботи цілодобово</p>
              </li>
              <li className={styles.studio__list}>
                <CityIcon />
                <p className={styles.studio__link}>
                  Київ, вулиця Ованеса Туманяна, 15А
                </p>
              </li>
              <li className={styles.studio__list}>
                <PhoneIcon />
                <p className={styles.studio__link}>+380989580777</p>
              </li>
            </ul>
          </div>
          <div className={styles.studio__photo}>
            <img src="./images/studios/sky-1.png" alt="sky-1" />
            <img src="./images/studios/sky-2.png" alt="sky-2" />
            <img src="./images/studios/sky-3.png" alt="sky-3" />
          </div>
          <Button
            type="button"
            text="Замовити фотосессію"
            className="btn"
            onClick={() => {
              navigate("/price");
            }}
          />
        </div>

        <div className={styles.studio__grey}>
          <div className={styles.studio__info}>
            <div className={styles.studio__desc}>
              <h3 className={styles.studio__name}>
                Фотостудія{" "}
                <span className={styles.studio__subname}>INLIGHT</span>
              </h3>
              <p className={styles.studio__description}>
                INLIGHT PRODUCTION — українська продакшн компанія з повним
                спектром послуг для ваших творчих та високоякісних фото та відео
                потреб.Будь то мода, аксесуари, стиль життя або їжа – ми
                виробляємо візуальний контент для друкованих, діджітал кампаній
                та електронної комерції.
              </p>
              <p className={styles.studio__description}>
                NLIGHT STUDIO – це понад 1000 м.кв. art-простір для фото/відео
                зйомок, переговорів, заходів, тренінгів, показів і т.д. Свій
                окремий вхід та власне паркування на 15 місць. Просторе лобі для
                комфортного очікування та кафе, де можна випити смачну каву та
                перекусити. Пропонуємо оренду окремого кабінету для переговорів,
                з можливістю відеоспостереження за процесом. П'ять знімальних
                залів із різноманітними за стилем інтер'єрами та декораціями
                підійдуть для всіх видів зйомки. У нас є гримерна кімната на 3
                місця та власна костюмерна. А також локація "Сад" на вулиці із
                встановленими прапорами, що розсіюють, над зонами. Можливе
                підключення світлового обладнання.
              </p>
            </div>
            <ul className={styles.studio__price}>
              <li className={styles.studio__list}>
                <PriceIcon />
                <p className={styles.studio__link}>Прайс</p>
              </li>
              <li className={styles.studio__list}>
                <CameraIcon />
                <p className={styles.studio__link}>Фотостудія INLIGHT</p>
              </li>
              <li className={styles.studio__list}>
                <LocationIcon />
                <p className={styles.studio__link}>https://inlight.com.ua/</p>
              </li>
              <li className={styles.studio__list}>
                <TimeIcon />
                <p className={styles.studio__link}>
                  Графік роботи c 10:00 до 19:00
                </p>
              </li>
              <li className={styles.studio__list}>
                <CityIcon />
                <p className={styles.studio__link}>Київ, Козацька 122</p>
              </li>
              <li className={styles.studio__list}>
                <PhoneIcon />
                <p className={styles.studio__link}>+380935000497</p>
              </li>
            </ul>
          </div>
          <div className={styles.studio__photo}>
            <img src="./images/studios/inlight-1.png" alt="inlight-1" />
            <img src="./images/studios/inlight-2.png" alt="inlight-2" />
            <img src="./images/studios/inlight-3.png" alt="inlight-3" />
          </div>
          <Button
            type="button"
            text="Замовити фотосессію"
            className="btn"
            onClick={() => {
              navigate("/price");
            }}
          />
        </div>

        <div className={styles.studio}>
          <div className={styles.studio__info}>
            <div className={styles.studio__desc}>
              <h3 className={styles.studio__name}>
                Фотостудія{" "}
                <span className={styles.studio__subname}>Space11.studio</span>
              </h3>
              <p className={styles.studio__description}>
                Студія, яка створена з втіленням останніх світових трендів.
                Ексклюзивні елементи інтер’єру та декору, декоративні стіни,
                бетонна стеля, панорамні вікна та гладка сіра підлога –
                ідеальний простір для втілення будь-яких творчих задумів. Ми
                забезпечуємо проведення фотозйомок для комерційних та приватних
                потреб.
              </p>
              <p className={styles.studio__description}>
                Зал СULT - Мінімалістичний зал, в якому ти знайдеш для себе все
                для крутого стильного кадру.
              </p>
              <p className={styles.studio__description}>
                Зал NUDE - Зал в нюдових відтінках для любителів інтер'єрів у
                скандинавському та французькому стилях.
              </p>
              <p className={styles.studio__description}>
                Зал ART - Найсвітліший та найменший зал нашої студії у стилі
                Boho, дві декоративні стінки зроблені за останніми світовими
                трендами дизайну інтер'єру.
              </p>
            </div>
            <ul className={styles.studio__price}>
              <li className={styles.studio__list}>
                <PriceIcon />
                <p className={styles.studio__link}>Прайс</p>
              </li>
              <li className={styles.studio__list}>
                <CameraIcon />
                <p className={styles.studio__link}>Фотостудія space11.studio</p>
              </li>
              <li className={styles.studio__list}>
                <LocationIcon />
                <p className={styles.studio__link}>https://space11.com.ua/</p>
              </li>
              <li className={styles.studio__list}>
                <TimeIcon />
                <p className={styles.studio__link}>Графік роботи цілодобово</p>
              </li>
              <li className={styles.studio__list}>
                <CityIcon />
                <p className={styles.studio__link}>
                  Київ, вулиця Ованеса Туманяна, 15А
                </p>
              </li>
              <li className={styles.studio__list}>
                <PhoneIcon />
                <p className={styles.studio__link}>+380989580777</p>
              </li>
            </ul>
          </div>
          <div className={styles.studio__photo}>
            <img src="./images/studios/space-1.png" alt="space-1" />
            <img src="./images/studios/space-2.png" alt="space-2" />
            <img src="./images/studios/space-3.png" alt="space-3" />
          </div>
          <Button
            type="button"
            text="Замовити фотосессію"
            className="btn"
            onClick={() => {
              navigate("/price");
            }}
          />
        </div>
      </section>
    </>
  );
}
export default StudiosPage;
