import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {  } from "../App.css";

export default function Experience() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center px-2 py-3 bg-secondary-color flex-end relative" id="experience">
        <h1 className="flex container text-white font-bold text-3xl w-full my-12">
          Experiencia
        </h1>
        <div className="container flex justify-evenly h-full mb-12">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between h-2/4">

            {/* card */}
            <div className="flex sm:w-[100%] mb-8 md:mb-8 md:w-[100%] lg:[33%] w-[100%] h-auto bg-primary-color lg:w-auto lg:static mr-5 justify-between items center rounded-xl py-7">
                {/* card icon */}
              <div className="hidden sm:flex flex-col m-4 mt-6 items-start justify-start self-start">

                <div className="flex flex-col w-full justify-center">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-white items-start justify-start ml-2 text-2xl my-auto"
                />
                  <span id="line" className="flex w-full justify-center self-center mx-auto"></span>

                </div>

                <div className="flex flex-col w-full justify-center mt-6 ">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-white items-start justify-start ml-2 mb-2 text-2xl my-auto"
                />
                  <span id="line" className="flex w-full justify-center self-center mx-auto"></span>

                </div>

                <div className="flex flex-col w-full justify-center mt-6 ">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-white items-start justify-start ml-2 mb-2 text-2xl my-auto"
                />
                  <span id="line" className="flex w-full justify-center self-center mx-auto"></span>

                </div>
                
              </div>
             {/* card info */} 
             <div className="flex flex-col my-4">
             <div className="bg-secondary-color w-[90%] h-[40%] m-4 p-4 px-10 rounded-xl">
                <p className="text-white text-start my-3">2021 - Presente</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Diplomado front end react
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Diplomado realizado en la Fundación Internacional María Luisa de Moreno especializado en desarrollo fron end con react.
                </p>
              </div>
              
              <div className="bg-secondary-color w-[90%] h-[40%] m-4 p-4 px-10 rounded-xl">
                <p className="text-white text-start my-3">2021 - 2022</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Bootcamp Rio Software
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Bootcamp realizado en la escuela robotica del Choco enfocado en desarrollo web.
                </p>
              </div>

              <div className="bg-secondary-color w-[90%] h-[40%] m-4 p-4 px-10 rounded-xl">
                <p className="text-white text-start my-3">2020 - 2021</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Desarrollo web con PHP
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Se realizo la formacion certificada en el servicio de aprendizaje sena.
                </p>
              </div>

             </div>
              
            </div>

            {/* card */}
            <div className="flex sm:w-[100%] mb-8 md:w-[100%] lg:[33%] w-[100%] h-2/5 bg-primary-color lg:w-auto lg:static justify-between items center rounded-xl py-7">
                {/* card icon */}
              <div className="hidden sm:flex flex-col m-4 mt-6 items-start justify-start self-start">

                <div className="flex flex-col w-full justify-center">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-white items-start justify-start ml-2 text-2xl my-auto"
                />
                  <span id="line" className="flex w-full justify-center self-center mx-auto"></span>

                </div>

                <div className="flex flex-col w-full justify-center mt-6 ">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-white items-start justify-start ml-2 mb-2 text-2xl my-auto"
                />
                  <span id="line" className="flex w-full justify-center self-center mx-auto"></span>

                </div>

                <div className="flex flex-col w-full justify-center mt-6 ">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-white items-start justify-start ml-2 mb-2 text-2xl my-auto"
                />
                  <span id="line" className="flex w-full justify-center self-center mx-auto"></span>

                </div>
                
              </div>
             {/* card info */} 
             <div className="flex flex-col my-4">
             <div className="bg-secondary-color w-[90%] h-[40%] m-4 p-4 px-10 rounded-xl">
                <p className="text-white text-start my-3">2022 - Presente</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Desarrollador freelancer
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Se presta servicio de funcionalidad de software a las empresas e igualmente desarrollo de sitio y plataformas.
                </p>
              </div>
              
              <div className="bg-secondary-color w-[90%] h-[40%] m-4 p-4 px-10 rounded-xl">
                <p className="text-white text-start my-3">2021 - 2022</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Front-End Developer
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Se desarrollaron funcionalidades especificas para solucionar las problematicas de una empresa.
                </p>
              </div>

              <div className="bg-secondary-color w-[90%] h-[40%] m-4 p-4 px-10 rounded-xl">
                <p className="text-white text-start my-3">2020 - 2021</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Tecnico Auxiliar TIC
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Encargado de dar soporte tecnologico a toda la empresa en cuanto a los equipos y reparacion ademas requerimientos de software.
                </p>
              </div>

             </div>
              
            </div>

            
          </div>

        </div>
      </div>
    </>
  );
}
