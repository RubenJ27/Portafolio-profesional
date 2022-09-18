import React from "react";
import { Link } from "react-scroll";


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-center px-2 py-3 bg-primary-color sticky top-0 w-full z-50">
        <div className="container flex flex-wrap items-center justify-center">
          <div className="w-full relative flex justify-between xl:w-auto xl:static xl:block xl:justify-start">
            <a
              className="text-xl font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white"
              href=""
            ><img src="src/assets/Mi-logo/JadaLogo.png" alt="Logo-imagen" className="w-14 h-14" />
            </a>

            {/* menu-responsive */}
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block xl:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
          
            className={
              "xl:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link
              offset={-50}
                smooth
                spy
                to="home"
              >
                <span className="ml-2 mr-4 text-white text-xl cursor-pointer">
                  Inicio
                </span>
              </Link>

              <Link
              offset={-70}
                smooth
                spy
                to="about-me"
              >
                <span className="ml-2 mr-4 text-white text-xl cursor-pointer">
                  Sobre mi
                </span>
              </Link>
              
              <Link
              offset={-70}
                smooth
                spy
                to="services"
              >
                <span className="ml-2 mr-4 text-white text-xl cursor-pointer">
                  Servicios
                </span>
              </Link>
              <Link
              offset={-70}
                smooth
                spy
                to="experience"
              >
                <span className="ml-2 mr-4 text-white text-xl cursor-pointer">
                  Experiencia
                </span>
              </Link>
              <Link
              offset={-70}
                smooth
                spy
                to="portafolio"
              >
                <span className="ml-2 mr-4 text-white text-xl cursor-pointer">
                  Portafolio
                </span>
              </Link>
              <Link
              offset={-70}
                smooth
                spy
                to="contact"
              >
                <span className="ml-2 mr-4 text-white text-xl cursor-pointer">
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


