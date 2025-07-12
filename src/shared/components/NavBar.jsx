import {
  faAddressCard,
  faBusinessTime,
  faFolderOpen,
  faHouse,
  faUser,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

export default function Navbar() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    trackVisibility: true,
    delay: 100,
    rootMargin: "-150px 0px 0px 0px",
  });

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  let [navInterceptor, setNavInterceptor] = useState(Number);
  let windowWidth = window.innerWidth;

  useEffect(() => {
    windowWidth = window.innerWidth;
    if (windowWidth < 1280) {
      setOpen(false);
      setNavInterceptor(-450);
    } else if (windowWidth > 1280) {
      setOpen(true);
      setNavInterceptor(-70);
    }
  }, []);

  window.onresize = function () {
    windowWidth = window.innerWidth;
    if (windowWidth < 1280) {
      closeNav();
      setOpen(false);
    }
  };
  const closeNav = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="flex flex-wrap items-center justify-center px-2 py-3 bg-primary-color sticky top-0 w-full z-50">
        <div className="container flex flex-wrap items-center justify-center">
          <div className="w-full relative flex justify-between xl:w-auto xl:static xl:block xl:justify-start">
            <a
              className="text-xl font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white"
              href=""
            >
              <img src="JadaLogo.png" alt="Logo-imagen" className="w-14 h-14" />
            </a>

            {/* menu-responsive */}
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block xl:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          </div>
          <div
            className={
              "xl:flex flex-grow items-center" +
              (navbarOpen ? " animate__animated animate__fadeInLeftBig flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul
              className="flex w-full flex-col lg:flex lg:w-full list-none lg:ml-0 lg:flex-col xl:ml-auto xl:flex-row xl:w-auto"
              ref={ref}
            >
              <Link
                offset={navInterceptor}
                smooth
                spy
                to="home"
                className={inView ? "✅" : "❌"}
                onClick={() => {
                  if (windowWidth < 1280) {
                    closeNav();
                    setOpen(false);
                  }
                }}
              >
                <span className="block pr-0 py-5 xl:p-5 xl:inline ml-0 text-white text-xl cursor-pointer hover:bg-secondary-color rounded-sm">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                  />{" "}
                  Inicio
                </span>
              </Link>

              <Link
                offset={navInterceptor}
                smooth
                spy
                to="about-me"
                onClick={() => {
                  if (windowWidth < 1280) {
                    closeNav();
                    setOpen(false);
                  }
                }}
              >
                <span className="block pr-0 py-5 xl:p-5 xl:inline ml-0 text-white text-xl cursor-pointer hover:bg-secondary-color rounded-sm">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                  />{" "}
                  Sobre mí
                </span>
              </Link>

              <Link
                offset={navInterceptor}
                smooth
                spy
                to="services"
                onClick={() => {
                  if (windowWidth < 1280) {
                    closeNav();
                    setOpen(false);
                  }
                }}
              >
                <span className="block pr-0 py-5 xl:p-5 xl:inline ml-0 text-white text-xl cursor-pointer hover:bg-secondary-color rounded-sm">
                  <FontAwesomeIcon
                    icon={faWrench}
                    className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                  />{" "}
                  Servicios
                </span>
              </Link>
              <Link
                offset={navInterceptor}
                smooth
                spy
                to="experience"
                onClick={() => {
                  if (windowWidth < 1280) {
                    closeNav();
                    setOpen(false);
                  }
                }}
              >
                <span className="block pr-0 py-5 xl:p-5 xl:inline ml-0 text-white text-xl cursor-pointer hover:bg-secondary-color rounded-sm">
                  <FontAwesomeIcon
                    icon={faBusinessTime}
                    className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                  />{" "}
                  Experiencia
                </span>
              </Link>
              <Link
                offset={navInterceptor}
                smooth
                spy
                to="portafolio"
                onClick={() => {
                  if (windowWidth < 1280) {
                    closeNav();
                    setOpen(false);
                  }
                }}
              >
                <span className="block pr-0 py-5 xl:p-5 xl:inline ml-0 text-white text-xl cursor-pointer hover:bg-secondary-color rounded-sm">
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                  />{" "}
                  Portafolio
                </span>
              </Link>
              <Link
                offset={navInterceptor}
                smooth
                spy
                to="contact"
                onClick={() => {
                  if (windowWidth < 1280) {
                    closeNav();
                    setOpen(false);
                  }
                }}
              >
                <span className="block pr-0 py-5 xl:p-5 xl:inline ml-0 text-white text-xl cursor-pointer hover:bg-secondary-color rounded-sm">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                  />{" "}
                  Contacto
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
