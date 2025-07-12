import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
  return (
    <>
      <div
        className="flex flex-wrap justify-center items-center px-2 py-3 bg-primary-color flex-end relative"
        id="services"
      >
        <h1 className="flex container text-white font-bold text-3xl w-full my-12">Servicios</h1>
        <div className="container flex h-full">
          {/* flex flex-col md:flex-wrap md:flex-row lg:flex-row container justify-between w-full my-9 */}
          <div className="flex flex-col sm:flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-nowrap justify-between h-2/4">
            {/* card */}
            <div className="flex flex-col mb-8 w-[100%] sm:mb-8 sm:w-[100%] md:mb-0 md:w-[48%] lg:w-[33%] lg:h-auto xl:h-auto h-2/5 bg-secondary-color lg:static lg:block lg:justify-start lg:mr-5 rounded-xl">
              <div className="flex justify-center m-0 p-0">
                <img src="service-web.svg" className="flex my-5" alt="icono web" />
              </div>

              <h1 className="text-white font-bold text-center my-3 text-3xl">Desarrollo web</h1>
              <p className="text-white w-2/3 text-center my-5 mx-auto">
                Ofrecemos no solo servicios de desarrollo de características específicas, sino también soluciones para
                resolver problemas corporativos y mejorar procesos.
              </p>
            </div>

            {/* card */}
            <div className="flex flex-col mb-8 w-[100%] sm:mb-8 sm:w-[100%] md:mb-0 md:w-[49%] lg:w-[33%] lg:h-auto xl:h-auto h-2/5 bg-secondary-color lg:static lg:block lg:justify-start lg:mr-5 rounded-xl">
              <div className="flex justify-center m-0 p-0">
                <img src="service-design.svg" className="flex my-5" alt="icono web" />
              </div>

              <h1 className="text-white font-bold text-center my-3 text-3xl">Experiencia de usuario</h1>
              <p className="text-white w-2/3 text-center my-5 mx-auto">
                Trabajamos en la mejor experiencia para la accesibilidad del proyecto y gestionamos de acuerdo a las
                necesidades del cliente para resolver problemas.
              </p>
            </div>

            {/* card */}
            <div className="flex flex-col w-[100%] sm:w-[100%]  md:w-[100%] lg:w-[33%] h-auto bg-secondary-color lg:static lg:block lg:justify-start rounded-xl md:mt-5 lg:mt-0">
              <div className="flex justify-center m-0 p-0">
                <img src="project_5.svg" className="flex my-5" alt="icono web" />
              </div>

              <h1 className="text-white font-bold text-center my-3 text-3xl">Gestión de proyectos</h1>
              <p className="text-white w-2/3 text-center my-5 mx-auto">
                Cuando se trata de la gestión de proyectos, se ofrece claridad sobre los problemas generales de
                planificación y cómo se abordarán y resolverán los problemas o las mejoras.
              </p>
            </div>
          </div>
        </div>

        {/* click contact */}

        <div className="flex container justify-center w-[100%] lg:w-[100%] xl:w-[50%] bg-secondary-color h-full py-3 mt-10 mb-5 rounded-lg">
          <div className="flex h-2/4">
            <div className="order-last hidden sm:flex sm:order-none">
              <p className="text-white">¿Buscas un trabajo personalizado?</p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=573224675055&text=Hola, Nececito mas informacion para realizar un proyecto!"
              target="_blank"
              className="text-quinario-color-complement cursor-pointer mx-2 font-medium"
            >
              Click aquí
            </a>{" "}
            <p className="text-white"> para contactar conmigo. </p>
            <FontAwesomeIcon icon={faWhatsapp} className="text-white ml-2 text-2xl my-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
