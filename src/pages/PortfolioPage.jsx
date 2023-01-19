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
        <div className="container grid gap-4 grid-cols-1 lg:grid-cols-2 grid-rows-2 justify-between w-full h-full mb-24">
          {projects.map((project) => (
            <div key={project.id} className="flex container justify-between flex-col bg-secondary-color lg:flex flex-grow items-center w-[100%] h-[100%] px-5 py-5 rounded-md sm:mr-5 sm:my-10">
                <div className="flex flex-row w-full h-full justify-around">
                  <div className="flex flex-col justify-center w-[50%] h-[80%]">
                    <img
                      src={project.url}
                      className="h-auto justify-center self-center rounded-lg"
                      alt="Imagen-portafolio"
                    />
                  </div>
                  <div className="bg-secondary-color w-[50%] sm:w-[40%] rounded-md p-4">
                    <div className="w-full">
                      <h1 className="text-white text-3xl font-bold mb-4">
                        {project.title}
                      </h1>
                      <p className="text-white text-lg">{project.description}</p>
                    </div>
                  </div>
                </div>

                {/* btns */}
                <div className="flex flex-row w-full justify-around mb-5">
                  <div className="flex">
                    <a href={project.url_github} target="_blank">
                      <button className="flex sm: bg-quinario-color-complement text-white w-auto h-auto px-4 sm:px-16 rounded-3xl items-center py-1 mr-5">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="text-white
      mr-3 text-3xl justify-between"
                    />{" "}
                    GitHub
                  </button>
                  </a>
                  </div>

                  <div className="flex">
                  <a href={project.url_live} target="_blank">
                  <button className="flex bg-quinario-color-complement text-white w-full h-full px-4 sm:px-16 rounded-3xl items-center py-1">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-white mr-3 text-3xl"

                    />
                    En vivo    
                  </button>
                  </a>
                    
                  </div>
                            
                </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};
