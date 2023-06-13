import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import logo from "../../img/Xtuning.png";
import { Link , NavLink } from "react-router-dom";
const Navbar = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [burger, setBurger] = useState(false);
  const NavBurgerFunc = () => {
    setBurger((burger) => !burger);
  };
  return (
    
    <React.Fragment>
      <div
        className={`navbar1 modal align-items-center justify-content-center ${
          burger ? "d-flex" : ""
        }`}
      >
        <div className="navbar1__ul modal-wrap">
          <ul type="none" className="nav-list">
            <li>
              <Link to="/" className="navbbb">
                НАШИ УСЛУГИ
              </Link>
            </li>
            <li>
              <Link className="navbbb" to="/info">
                О СЕРВИСЕ
              </Link>
            </li>
            <li>
              <Link className="navbbb" to="/Portfolio">
                ПОРТФОЛИО
              </Link>
            </li>
            <li>
              <Link className="navbbb" to="/Page">
                ОНЛАЙН-МАГАЗИН
              </Link>
            </li>
            <li>
              <Link className="navbbb" to="/Contacts">
                КОНТАКТЫ
              </Link>
            </li>
          </ul>

          <p>
            <i class="fff fa-solid fa-phone">
              {" "}
              <span> +998(97)7507103</span>
            </i>
          </p>
          <div className="modal-socials d-flex align-items-centre justify-content-between">
            <p>
              <Link to="/Registration">
                <i class="sss fa-solid fa-right-to-bracket"></i>
              </Link>
            </p>
            <p>
              <a href="https://www.facebook.com/people/%D0%A1ar-driver-detailing/100067617018705/">
                <i class="sss fa-brands fa-facebook"></i>
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/car_driver_detailing/">
                <i class="sss fa-brands fa-instagram"></i>
              </a>
            </p>
            <p>
              <a href="https://t.me/car_driver">
                <i class="sss fa-brands fa-telegram"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <nav className="navbar navbar--mobile">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="burger-icon" onClick={NavBurgerFunc}>
            <div className={`burger ${burger ? "close" : ""}`}></div>
          </div>
        </div>
      </nav>
      <div className="navbar navbar--desktop">
        <div className="container">
          <div className="Nav">
            <Link
              to="/img_page"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src={logo} alt="" />
            </Link>

            <div className="page">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "dropbtn2"
                    }
                  >
                    НАШИ УСЛУГИ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/info">
                    О СЕРВИСЕ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                   
                    to="/Portfolio"
                  >
                    ПОРТФОЛИО
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Page">
                    ОНЛАЙН-МАГАЗИН
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    
                    to="/Contacts"
                  >
                    КОНТАКТЫ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="contacts">
              <p data-aos="fade-up" data-aos-duration="3000">
                <i
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  class="  fa-solid fa-phone"
                ></i>{" "}
                +998(97)7507103
              </p>
              <p>
                <Link
                  to="/Registration"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <i class="ddd fa-solid fa-right-to-bracket"></i>
                </Link>
              </p>
              <p>
                <a
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  href="https://www.facebook.com/people/%D0%A1ar-driver-detailing/100067617018705/"
                >
                  <i class="ddd fa-brands fa-facebook"></i>
                </a>
              </p>
              <p>
                <a
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  href="https://www.instagram.com/car_driver_detailing/"
                >
                  <i class="ddd fa-brands fa-instagram"></i>
                </a>
              </p>
              <p>
                <a
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  href="https://t.me/car_driver"
                >
                  <i class="ddd fa-brands fa-telegram"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
