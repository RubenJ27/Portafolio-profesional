import React from "react";
import { Link } from "react-scroll";
import { Squash as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBusinessTime, faFolderOpen, faHouse, faUser, faWrench } from "@fortawesome/free-solid-svg-icons";


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
            ><img src="JadaLogo.png" alt="Logo-imagen" className="w-14 h-14" />
            </a>


            {/* menu-responsive */}
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block xl:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Hamburger />
            </button>
          </div>
          <div
          
            className={
              "xl:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex list-none lg:ml-0 lg:flex-col xl:ml-auto xl:flex-row">
              <Link
              offset={-50}
                smooth
                spy
                to="home"
              >
                <span className="block py-5 xl:p-0 xl:inline ml-0 xl:ml-2 mr-4 text-white text-xl cursor-pointer">
                <FontAwesomeIcon
                  icon={faHouse}
                  className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                /> Inicio
                </span>
              </Link>

              <Link
              offset={-70}
                smooth
                spy
                to="about-me"
              >
                <span className="block py-5 xl:p-0 xl:inline ml-0 xl:ml-2 mr-4 text-white text-xl cursor-pointer">
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                /> Sobre mi
                </span>
              </Link>
              
              <Link
              offset={-70}
                smooth
                spy
                to="services"
              >
                <span className="block py-5 xl:p-0 xl:inline ml-0 xl:ml-2 mr-4 text-white text-xl cursor-pointer">
                <FontAwesomeIcon
                  icon={faWrench}
                  className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                /> Servicios
                </span>
              </Link>
              <Link
              offset={-70}
                smooth
                spy
                to="experience"
              >
                <span className="block py-5 xl:p-0 xl:inline ml-0 xl:ml-2 mr-4 text-white text-xl cursor-pointer">
                <FontAwesomeIcon
                  icon={faBusinessTime}
                  className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                /> Experiencia
                </span>
              </Link>
              <Link
              offset={-70}
                smooth
                spy
                to="portafolio"
              >
                <span className="block py-5 xl:p-0 xl:inline ml-0 xl:ml-2 mr-4 text-white text-xl cursor-pointer">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                /> Portafolio
                </span>
              </Link>
              <Link
              offset={-70}
                smooth
                spy
                to="contact"
              >
                <span className="block py-5 xl:p-0 xl:inline ml-0 xl:ml-2 mr-4 text-white text-xl cursor-pointer">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className="mr-3 xl:hidden text-white items-start justify-start ml-2 text-2xl my-auto"
                /> Contacto
                </span>
              </Link>
            </ul>
          </div>
        </div>

        
      </nav>

      
    </>
  );
}


