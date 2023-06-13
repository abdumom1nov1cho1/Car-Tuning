import React from "react";
import "../TelegramBot/TelegramBot.scss";
function TelegramBot() {
  return (
    <div className="container">
      <div className="napisat-telegram">
        <h2 data-aos="fade-up-right" >
          НУЖНА ТОНИРОВКА
          <br />
          АВТОМОБИЛЯ?
        </h2>
        <h1 data-aos="fade-up-right" >
          <br />
          Напишите нам и получите БЕСПЛАТНУЮ консультацию!
          <br />
          Наши мастера готовы решить ваши проблемы в короткий срок
        </h1>
        <br />
        <div className="number" >
          <a data-aos="fade-up-right" href="https://t.me/gembabobot" target="_blank">Написать в телеграм</a>
          <p data-aos="fade-up-left" >или звоните +998977507103</p>
        </div>
        
      </div>
    </div>
  );
}

export default TelegramBot;
