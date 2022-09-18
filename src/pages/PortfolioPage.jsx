import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { projects } from "../database/projects";

export const PortfolioPage = ({ url, title, description }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center px-2 py-3 bg-primary-color flex-end relative" id="portafolio">
        <h1 className="flex container text-white font-bold text-3xl w-full my-12">
          Portafolio
        </h1>

        {/* row */}
        <div className="container grid gap-4 grid-cols-2 grid-rows-2 justify-between w-full h-full mb-24">
          {projects.map((project) => (
            <div key={project.id} className="flex container justify-between flex-col bg-secondary-color lg:flex flex-grow items-center w-[100%] h-[100%] px-5 py-2 rounded-md mr-5 my-10">
                <div className="flex flex-row w-full h-full justify-around">
                  <div className="flex flex-col justify-center w-2/5 h-full">
                    <img
                      src={project.url}
                      className="h-4/5 justify-center self-center rounded-lg"
                      alt="Instagram"
                    />
                  </div>
                  <div className="bg-secondary-color w-[40%] rounded-md p-4">
                    <div className="w-full">
                      <h1 className="text-white text-3xl font-bold mb-4">
                        {project.title}
                      </h1>
                      <p className="text-white">{project.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row w-full justify-around my-5">
                  <div className="flex justify-between">
                  <button className="flex bg-quinario-color-complement text-white w-full h-full px-16 rounded-3xl items-center py-1 mr-5">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="text-white
      mr-3 text-3xl justify-between"
                    />{" "}
                    GitHub
                  </button>
                  </div>

                  <div className="flex">
                  <button className="flex bg-quinario-color-complement text-white w-full h-full px-16 rounded-3xl items-center py-1">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-white mr-3 text-3xl"
                    />
                    Vista previa
                  </button>
                  </div>
                            
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
