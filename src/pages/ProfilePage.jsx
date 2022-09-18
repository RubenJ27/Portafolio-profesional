import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faMugHot, faThumbsUp, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function ProfilePage() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center px-2 py-3 bg-secondary-color flex-end relative" id="about-me">
        <h1 className="flex container text-white font-bold text-3xl w-full mt-12">
          Sobre mi
        </h1>
        <div className="container flex justify-evenly h-full">
          <div className="flex items-center justify-center h-2/4">
            {/* img */}
            <div className="w-full h-full flex flex-col justify-start lg:w-auto lg:static lg:block lg:justify-start">
              <img
                src="src/assets/profile/AvatarMaker-6.png"
                className="flex w-2/4 h-full rounded-full"
                alt=""
              />
            </div>

            {/* group skills */}

            <div className="bg-primary-color lg:flex flex-grow justify-between w-3/4 items-center h-2/4 p-10 py-10 flex rounded-md">
              <div className="flex flex-col justify-center w-2/5">
                <p className="flex flex-col text-xl text-white justify-center self-center items-center lg:flex-row lg:ml-auto">       
                  Soy un desarrollador web y me especializo en Front-end, también me encanta realizar proyectos de tecnología, hoteles, etc.
                </p>
                <button className="flex bg-quinario-color-complement text-white mt-12 w-48 h-10 rounded-3xl items-center justify-center">
                  <img
                    src="src/assets/icons/download_icon.svg"
                    className="h-3/5 justify-center self-center mr-3"
                    alt="Instagram"
                  />
                  Descargar CV
                </button>
              </div>

              <div className="bg-secondary-color w-2/5 rounded-md p-4">
                {/* skill-1 */}
                <div className="w-full mb-8">
                  <div className="flex justify-between mb-2">
                    <h1 className="text-white">Desarrollo</h1>{" "}
                    <h1 className="text-white">85%</h1>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-yellow-progress h-2.5 rounded-full w-[85%]"></div>
                  </div>
                </div>
                {/* skill-2 */}
                <div className="w-full mb-8">
                  <div className="flex justify-between mb-2">
                    <h1 className="text-white">Diseño web</h1>{" "}
                    <h1 className="text-white">80%</h1>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-red-progress h-2.5 rounded-full w-4/5"></div>
                  </div>
                </div>
                {/* skill 3 */}
                <div className="w-full mb-3">
                  <div className="flex justify-between mb-2">
                    <h1 className="text-white">Gestion de proyectos</h1>{" "}
                    <h1 className="text-white">70%</h1>
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

        <div className="flex flex-col lg:flex-row container justify-between w-full my-9">
          {/* card-1 */}
          <div className="bg-primary-color flex flex-row rounded-lg w-[100%] lg:w-[20%] my-5">
            <div className="flex py-8 px-4">
            <FontAwesomeIcon icon={faThumbsUp} className="text-white text-5xl" />
            </div>
            <div className="flex-col m-5">
              <h1 className="text-white font-extrabold text-3xl">19</h1>
              <p className="text-white mt-2">Projects completed</p>
            </div>
          </div>

          {/* card-2 */}
          <div className="bg-primary-color flex flex-row rounded-lg w-[100%] lg:w-[20%] my-5">
            <div className="flex py-8 px-4">
            <FontAwesomeIcon icon={faMugHot} className="text-white text-5xl" />
            </div>
            <div className="flex-col m-5">
              <h1 className="text-white font-extrabold text-3xl">130</h1>
              <p className="text-white mt-2">Cup of coffee</p>
            </div>
          </div>

          {/* card-3 */}
          <div className="bg-primary-color flex flex-row rounded-lg w-[100%] lg:w-[20%] my-5">
            <div className="flex py-8 px-4">
            <FontAwesomeIcon icon={faUserGroup} className="text-white text-5xl" />
            </div>
            <div className="flex-col m-5">
              <h1 className="text-white font-extrabold text-3xl">130</h1>
              <p className="text-white mt-2">Satisfied clients</p>
            </div>
          </div>

           {/* card-4 */}
           <div className="bg-primary-color flex flex-row rounded-lg w-[100%] lg:w-[20%] my-5">
            <div className="flex py-8 px-4">
            <FontAwesomeIcon icon={faAward} className="text-white text-5xl" />
            </div>
            <div className="flex-col m-5">
              <h1 className="text-white font-extrabold text-3xl">11</h1>
              <p className="text-white mt-2">Honors</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
