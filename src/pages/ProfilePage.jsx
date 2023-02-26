import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faMugHot, faThumbsUp, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function ProfilePage() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center px-2 py-3 bg-secondary-color flex-end relative" id="about-me">
        <h1 className="flex container text-white font-bold text-3xl w-full mt-12 mb-6">
          Sobre mi
        </h1>
        <div className="container flex flex-wrap justify-evenly h-full">
          <div className="flex container flex-col lg:flex-row items-center justify-center h-2/4">
            {/* img */}
            <div className="hidden w-full h-full flex-col items-center lg:w-auto lg:static lg:block">
              <img
                src="AvatarMaker-2.png"
                className="flex w-2/4 h-full rounded-full"
                alt=""
              />
            </div>

      
            <div className="bg-primary-color flex-col md:flex-row lg:flex-row lg:flex flex-grow justify-between items-center w-[100%] lg:w-3/4 h-2/4 p-10 py-10 flex rounded-md">
              <div className="flex flex-col justify-center w-[100%] mb-10 md:w-2/5 lg:w-2/5">
                <p className="flex flex-col text-xl text-white justify-center self-center items-center lg:flex-row lg:ml-auto">       
                  Soy un desarrollador web y me especializo en front end, también me encanta realizar proyectos de tecnología para tu empresa o idea de negocios.
                </p>
                <a href="CV-FRONT-END-RUBEN-JARA.pdf" download="CV-Ruben-J" className="flex bg-quinario-color-complement text-white mt-12 w-48 h-10 rounded-3xl items-center justify-center">
                  <img
                    src="download_icon.svg"
                    className="h-3/5 justify-center self-center mr-3"
                    alt="Descargar"
                  />
                  Descargar CV
                </a>
              </div>
              {/* group skills */}

              <div className="flex flex-col bg-secondary-color w-[100%] md:w-2/5 lg:w-2/5 rounded-md p-4">
                {/* skill-1 */}
                <div className="w-full mb-8">
                  <div className="flex justify-between mb-2">
                    <h1 className="text-white">Desarrollo web</h1>{" "}
                   {/*  <h1 className="text-white">85%</h1> */}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-yellow-progress h-2.5 rounded-full w-[85%]"></div>
                  </div>
                </div>
                {/* skill-2 */}
                <div className="w-full mb-8">
                  <div className="flex justify-between mb-2">
                    <h1 className="text-white">Diseño web</h1>{" "}
                    {/* <h1 className="text-white">80%</h1> */}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-red-progress h-2.5 rounded-full w-4/5"></div>
                  </div>
                </div>
                {/* skill 3 */}
                <div className="w-full mb-3">
                  <div className="flex justify-between mb-2">
                    <h1 className="text-white">Gestion de proyectos</h1>{" "}
                    {/* <h1 className="text-white">70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-projects-management-progress h-2.5 rounded-full w-[70%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* cards group */}

        <div className="flex flex-col md:flex-wrap md:flex-row lg:flex-row container justify-between w-full my-9">
          {/* card-1 */}
          <div className="bg-primary-color flex flex-row rounded-lg w-[100%] md:w-[45%] lg:w-[23%] my-5">
            <div className="flex py-8 px-4">
            <FontAwesomeIcon icon={faThumbsUp} className="text-white text-5xl" />
            </div>
            <div className="flex-col m-5">
              <h1 className="text-white font-extrabold text-3xl">19</h1>
              <p className="text-white mt-2">Proyectos completados</p>
            </div>
          </div>

          {/* card-2 */}
          <div className="bg-primary-color flex flex-row rounded-lg w-[100%] md:w-[45%] lg:w-[23%] my-5">
            <div className="flex py-8 px-4">
            <FontAwesomeIcon icon={faMugHot} className="text-white text-5xl" />
            </div>
            <div className="flex-col m-5">
              <h1 className="text-white font-extrabold text-3xl">102</h1>
              <p className="text-white mt-2">Tazas de cafe</p>
            </div>
          </div>

          {/* card-3 */}
          <div className="bg-primary-color flex flex-row rounded-lg w-[100%] md:w-[45%] lg:w-[23%] my-5">
            <div className="flex py-8 px-4">
            <FontAwesomeIcon icon={faUserGroup} className="text-white text-5xl" />
            </div>
            <div className="flex-col m-5">
              <h1 className="text-white font-extrabold text-3xl">15</h1>
              <p className="text-white mt-2">Clientes satisfechos</p>
            </div>
          </div>

           {/* card-4 */}
           <div className="bg-primary-color flex flex-row rounded-lg w-[100%] md:w-[45%] lg:w-[23%] my-5">
            <div className="flex py-8 px-4">
            <FontAwesomeIcon icon={faAward} className="text-white text-5xl" />
            </div>
            <div className="flex-col m-5">
              <h1 className="text-white font-extrabold text-3xl">11</h1>
              <p className="text-white mt-2">Honores</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
