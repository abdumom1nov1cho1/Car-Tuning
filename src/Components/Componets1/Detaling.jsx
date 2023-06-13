import React from "react";
import "../Componets1/Detaling.scss";
import TelegramBot from "../TelegramBot/TelegramBot"
import Map from "../Map/Map"
import Footer from "../Footer/Footer"
function Detaling() {
  return (
    <div>
      <div className="container">
        <div className="Dry-cleaning">
          <div className="info-clening">
            <p>
              <span>Химчистка салона автомобиля </span> — процесс <br />{" "}
              профессиональной очистки и обработки <br /> кожаных поверхностей,
              пластиковых и <br /> металлических деталей. Детейлинг химчистка —
              <br /> это дополнительная обработка кожаных <br /> поверхностей,
              пластика и металлических <br /> деталей при помощи мойки,
              полировки, <br /> керамических покрытий и жидкого стекла. <br />
              Также детейлинг химчистка включает уборку <br /> чехлов, мойку
              сидений и других деталей <br /> автомобиля. Для процедуры
              используются <br /> специальные материалы и оборудование. В <br />
              зависимости от требований клиента, можно <br /> провести детейлинг
              мойку, детейлинг салона, <br /> паровую химчистку салона
              автомобиляv, <br /> полировку авто и керамику для авто. Для узнать
              <br /> больше о детейлинге химчистке салона, <br /> детейлинг
              мойке, детейлинге салона и других <br /> услугах по уходу за
              автомобилем можно <br />
              оставить отзыв или задать вопрос нашим <br /> специалистам.
            </p>
            <img
              src="https://car-driver.uz/wp-content/uploads/2021/05/photo_2020-10-15_11-26-40.jpg"
              alt=""
            />
          </div>
          <div className="Avto-salon">
            <h3>Что такое химчистка салона авто?</h3>
            <p>
              Химчистка салона авто — это процедура для очищения и обработки
              внутренних поверхностей <br /> автомобиля. Она предназначена для
              улучшения внешнего вида авто, повышения комфорта и продления{" "}
              <br /> срока службы салона. В химчистку могут входить детейлинг
              химчистка, паровая химчистка, мойка <br /> детейлинг, детейлинг
              салона, полировка авто, керамика, ламинация авто и др.
            </p>
          </div>
          
        </div>
        
      </div>
      <TelegramBot/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default Detaling;