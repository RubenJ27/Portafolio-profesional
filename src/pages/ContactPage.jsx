import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faGraduationCap,
  faHandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import {} from "../App.css";

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center px-2 py-3 bg-secondary-color flex-end relative">
        <h1 className="flex container text-white font-bold text-3xl w-full my-12">
          Contacto
        </h1>
        <div className="container flex justify-evenly w-full h-full mb-12">
          <div className="flex justify-between w-full h-2/4">
            {/* card */}
            <div className="flex flex-col w-[50%] h-2/5 bg-primary-color lg:w-auto lg:static mr-5 justify-between rounded-xl px-16 py-10">
              <h1 className="text-white font-bold text-3xl w-full">
              Hablemos de lo que necesitas
              </h1>

              {/* click contact */}
              <div className="flex">
              <p className="text-white">
              ¿No te gustan los formularios? envíame un
                  </p>{" "}
                  <a className="text-quinario-color-complement cursor-pointer mx-2">
                    mensaje privado
                  </a>{" "}
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-white ml-2 text-2xl my-auto"
                  />
              </div>
                 
            </div>

            {/* card */}
            <div className="flex w-[50%] h-3/4 bg-primary-color lg:w-auto lg:static justify-between items center rounded-xl py-7">
              <form action="" className="flex flex-col w-full h-full px-[3.5rem]">
                <input type="text" placeholder="Nombre" className="bg-secondary-color w-[30rem] placeholder-white px-5 py-3 rounded-xl mb-6" />
                <input type="email" className="bg-secondary-color text-white px-5 py-3 placeholder-white rounded-xl mb-6" name="email" id="email" placeholder="Correo" />

                <textarea id="Message" className="bg-secondary-color text-white px-5 py-3 placeholder-white rounded-xl mb-6" name="Message" placeholder="Mensaje" rows="6" maxLength="3000" required></textarea>
                
                <button className="flex justify-center bg-quinario-color-complement text-white w-2/4 h-2/3 px-18 rounded-3xl items-center py-2 mr-5">
                <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-white ml-2 text-2xl my-auto mr-3"
                  />{" "}
                    Enviar mensaje
                  </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
