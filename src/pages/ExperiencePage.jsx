import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {  } from "../App.css";

export default function Experience() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center px-2 py-3 bg-secondary-color flex-end relative">
        <h1 className="flex container text-white font-bold text-3xl w-full my-12">
          Experience
        </h1>
        <div className="container flex justify-evenly h-full mb-12">
          <div className="flex justify-between h-2/4">

            {/* card */}
            <div className="flex w-[33%] h-2/5 bg-primary-color lg:w-auto lg:static mr-5 justify-between items center rounded-xl py-7">
                {/* card icon */}
              <div className="flex flex-col m-4 mt-6 items-start justify-start self-start">

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
                <p className="text-white text-start my-3">2019 - Present</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Academic Degree
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
                </p>
              </div>
              
              <div className="bg-secondary-color w-[90%] h-[40%] m-4 p-4 px-10 rounded-xl">
                <p className="text-white text-start my-3">2017 - 2013</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Bachelor’s Degree
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
                </p>
              </div>

              <div className="bg-secondary-color w-[90%] h-[40%] m-4 p-4 px-10 rounded-xl">
                <p className="text-white text-start my-3">2013 - 2009</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Honours Degree
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
                </p>
              </div>

             </div>
              
            </div>

            {/* card */}
            <div className="flex w-[33%] h-2/5 bg-primary-color lg:w-auto lg:static justify-between items center rounded-xl py-7">
                {/* card icon */}
              <div className="flex flex-col m-4 mt-6 items-start justify-start self-start">

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
                <p className="text-white text-start my-3">2019 - Present</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Web Designer
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
                </p>
              </div>
              
              <div className="bg-secondary-color w-[90%] h-[40%] m-4 p-4 px-10 rounded-xl">
                <p className="text-white text-start my-3">2017 - 2013</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Front-End Developer
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
                </p>
              </div>

              <div className="bg-secondary-color w-[90%] h-[40%] m-4 p-4 px-10 rounded-xl">
                <p className="text-white text-start my-3">2013 - 2009</p>
                <h1 className="text-white font-bold text-start my-3 text-3xl">
                Back-End Developer
                </h1>
                <p className="text-white w-2/3 h-[33%] text-start my-5">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.
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
