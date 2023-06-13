import React from "react";
import "../Home/Home.scss";
import Servises from "./Servises/Servises";
import TelegramBot from "../TelegramBot/TelegramBot";
import Our from "../../Our";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="about">
          <div className="img-p">
            <img
              data-aos="fade-up"
              src="https://cdn.shopgo.me/20220628-store-x0cv/branding/banner-41177278874.gif?format=jpeg"
              alt=""
            />
            <div className="text-1" data-aos="fade-up">
              <p>
                Хотели бы выполнить тонировку стекол автомобиля? Нужна
                определенная светопропускаемость, оттенок наносимой пленки?
                Рассчитываете изменить внешний вид автомобиля, сделать его более
                респектабельным? Желаете получить обязательную гарантию на
                выполненную работу, при необходимости, устранить недостатки?
                Тонировка стекол автомобиля пленками последнего поколения.
                Особенно востребован этот вид услуг среди владельцев новых
                автомобилей премиум-класса или автомобилей с небольшим сроком
                эксплуатации и пробегом. Имеется большой ассортимент пленок
                <span>STEK, LLUMAR, ARMOLAN</span> различной тональности от 50%
                до 95%.
              </p>
              <div className="icon" data-aos="fade-up">
                <img
                  src="https://car-driver.uz/wp-content/uploads/2019/09/logo_windowsfilm.jpg"
                  alt=""
                />
              </div>
              <div className="info">
                <h3 className="string" data-aos="fade-up">
                  Тонировка в сервисном центре Car Driver & Detailing
                </h3>
                <ul data-aos="fade-up">
                  <li>⚡️ Выполнить тонировку передних, задних стекол;</li>
                  <li>
                    ⚡️ Подобрать материал с учетом класса автомобиля, типа
                    кузова;
                  </li>
                  <li>
                    ⚡️ Использовать только оригинальные пленки, соответствующие
                    требованиям ГОСТ, имеющие определенную светопропускаемость;
                  </li>
                  <li>
                    ⚡️ Получить гарантию на материалы и комплекс реализованных
                    мероприятий;
                  </li>
                </ul>
              </div>
              <div className="info-1">
                <h3 className="string" data-aos="fade-up">
                  Преимущества тонировки авто
                </h3>
                <ul data-aos="fade-up">
                  <li>⚡️ повышенная комфортабельность для водителя;</li>
                  <li>⚡️ исключается выгорание чехлов и обивки;</li>
                  <li>
                    ⚡️ повышение крепости стекла за счет связующих свойств
                    пленочного покрытия;
                  </li>
                  <li>
                    ⚡️ экономия бензина в летнее время на работе
                    климат-контроля и кондиционера.
                  </li>
                  <li>⚡️ снижение угрозы краж из салона;</li>
                </ul>
              </div>
              <div className="stoimost">
                <h3 className="string" data-aos="fade-up">
                  Стоимость тонировки
                </h3>
                <ul data-aos="fade-up">
                  <li>⚡️ Заднее стекло от 450 000 сум Рассчитать</li>
                  <li>⚡️ Задние двери от 450 000 сум Рассчитать</li>
                  <li>⚡️ Передние двери от 450 000 сум Рассчитать</li>
                  <li>
                    ⚡️ Полоса на переднее лобовое от 50 000 сум Рассчитать
                  </li>
                  <li>⚡️ Люк / Панорама от 200 000 сум Рассчитать</li>
                </ul>

                <br />

                <p className="string" data-aos="fade-up">
                  На наши услуги доступна рассрочка от ZOODPAY. 0% переплаты +
                  10% кешбэк
                </p>
                <h7 data-aos="fade-up">
                  <span className="span"> 1.</span> Качество тонирования
                  полностью или частично не устроит? Стоимость
                  <br />
                  <span className="span"> 2.</span> услуги окажется слишком
                  высокой для личного бюджета?
                </h7>
              </div>
            </div>
          </div>

          <Servises />
        </div>

        <div className="koment">
          <ul>
            <br />
            <br />
            <li data-aos="fade-left">
              ⚡️ Мы тонируем любые автомобили с использованием защитной,
              зеркальной, атермальной пленки.
            </li>
            <li data-aos="fade-left">
              ⚡️ Высокая квалификация мастеров и большой опыт работы позволяют
              успешно решить любую задачу, связанную с тюнингом автомобиля.
            </li>
            <li data-aos="fade-left">
              ⚡️ Время установки пленки не превышает пары часов.
            </li>
            <li data-aos="fade-left">
              ⚡️ На выполненную работу предоставляем обязательную гарантию.
            </li>
            <li data-aos="fade-left">
              ⚡️ Наши клиенты могут рассчитывать на выгодные скидки,
              праздничные акции.
            </li>
            <li data-aos="fade-left">
              ⚡️ Оплатить работу легко любым наличным и безналичным способом.
            </li>
            <li data-aos="fade-left">
              ⚡️ Если возникнут замечания к работе, устраняем их
              незамедлительно за свой счет.
            </li>
            <li data-aos="fade-left">
              ⚡️ На всех эта пах работы осуществляем контроль качества.
            </li>
          </ul>
          <img
            data-aos="fade-up"
            className="tonirovka"
            src="https://foreignaffairsmotorsports.com/wp-content/uploads/2020/05/car-tuning-1024x538.jpg"
            alt=""
          />
          <h3 data-aos="fade-up" className="string" >С нами работать выгодно</h3>
          <p data-aos="fade-up" className="stred" >
            Автосервис Car Driver & Detailing следует нормам законодательства,
            имеет необходимые разрешительные документы. Мы используем только
            сертифицированную пленку, изготовленную из безопасного и
            качественного сырья. Выполненная по всем правилам тонировка придаст
            автомобилю презентабельный внешний облик. Стоимость услуг доступна,
            рассчитана на автолюбителей с разным бюджетом.
          </p>
        </div>
      </div>
      <TelegramBot />
      <Our />
      <Map />
      <Footer />
    </div>
  );
}

export default Home;
