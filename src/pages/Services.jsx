import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center px-2 py-3 bg-primary-color flex-end relative" id="services">
        <h1 className="flex container text-white font-bold text-3xl w-full my-12">
          Servicios
        </h1>
        <div className="container flex h-full">
          <div className="flex h-2/4">
            {/* card */}
            <div className="flex w-[33%] h-2/5 bg-secondary-color lg:w-auto lg:static lg:block lg:justify-start mr-5 rounded-xl">
              <div className="flex justify-center m-0 p-0">
              <img
                src="src/assets/img-services/service-web.svg"
                className="flex my-5"
                alt="icono web"
              />
              </div>
              
              <h1 className="text-white font-bold text-center my-3 text-3xl">Desarrollo web</h1>
              <p className="text-white w-2/3 text-center my-5 mx-auto">Se ofrece servicios de desarrollo de funciones expecificas, ademas de soluciones para solventar los problemas en tu empresa y mejorar las procesos.</p>
            </div>

           {/* card */}
           <div className="flex w-[33%] h-2/5 bg-secondary-color lg:w-auto lg:static lg:block lg:justify-start mr-5 rounded-xl">
              <div className="flex justify-center m-0 p-0">
              <img
                src="src/assets/img-services/service-design.svg"
                className="flex my-5"
                alt="icono web"
              />
              </div>
              
              <h1 className="text-white font-bold text-center my-3 text-3xl">Experiencia de usuario</h1>
              <p className="text-white w-2/3 text-center my-5 mx-auto">Se trabaja de acuerdo a la mejor experiencia para la accesibilidad del proyecto y de la misma maneja de acuerdo a lo que requiera el cliente para solventar su problema.</p>
            </div>

            {/* card */}
            <div className="flex w-[33%] h-2/5 bg-secondary-color lg:w-auto lg:static lg:block lg:justify-start rounded-xl">
              <div className="flex justify-center m-0 p-0">
              <img
                src="src/assets/img-services/project_5.svg"
                className="flex my-5"
                alt="icono web"
              />
              </div>
              
              <h1 className="text-white font-bold text-center my-3 text-3xl">Gestion de proyectos</h1>
              <p className="text-white w-2/3 text-center my-5 mx-auto">En cuanto a gestion de proyectos se ofrece claridad en todo el tema de planificacion de como se abordara y resolvera el problema o mejora.</p>
            </div>

            
          </div>
        </div>

        {/* click contact */}

        <div className="flex container justify-center w-2/4 bg-secondary-color h-full py-3 mt-10 mb-5 rounded-lg">
          <div className="flex h-2/4">
            <p className="text-white">¿Buscas un trabajo personalizado?</p> <a className="text-quinario-color-complement cursor-pointer mx-2">Click aqui</a> <p className="text-white"> para contactar conmigo. </p><FontAwesomeIcon icon={faHand} className="text-white ml-2 text-2xl my-auto" />
          </div>
        </div>



        
      </div>
    </>
  );
}
