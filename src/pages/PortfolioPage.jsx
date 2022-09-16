import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand, faPlay, faVideo } from '@fortawesome/free-solid-svg-icons'

export const PortfolioPage = ({ url, title, description }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center px-2 py-3 bg-primary-color flex-end relative">
        <h1 className="flex container text-white font-bold text-3xl w-full my-12">
          Portafolio
        </h1>

        {/* row */}
        <div className="container flex justify-between w-full h-full mb-10">
          {/* card */}
          <div className="flex flex-col bg-secondary-color lg:flex flex-grow justify-around items-center w-2/4 h-2/5 px-5 py-8 rounded-md mr-20">
            <div className="flex flex-row justify-around">
              {/* card img */}
              <div className="flex flex-col justify-center w-2/5 h-full">
                <img
                  src="src/assets/portfolio/Portfolio–02.png"
                  className="h-4/6 justify-center self-center rounded-lg"
                  alt="Instagram"
                />
              </div>
              {/* card text */}
              <div className="bg-secondary-color w-[50%] rounded-md p-4 pt-0">
                <div className="w-full">
                  <h1 className="text-white text-3xl mb-4">Honours Degree</h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto sirius lapsu rom.
                  </p>
                </div>
              </div>
            </div>

            {/* buttons */}
            <div className="flex flex-row mt-10">
              <button className="flex justify-center bg-quinario-color-complement text-white w-3/6 h-2/3 px-20 rounded-3xl items-center py-2 mr-5">
                < FontAwesomeIcon  
                icon = { [ 'fab' ,  'github' ] }  
                className="text-white mr-3 text-2xl"
                / > 
                GitHub
              </button>

              <button className="flex justify-center bg-quinario-color-complement text-white w-3/6 h-2/3 px-12 rounded-3xl items-center py-2">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-white mr-3 text-2xl"
                />
                Vista previa
              </button>
            </div>
          </div>

          {/* card */}
          <div className="flex flex-col bg-secondary-color lg:flex flex-grow justify-around items-center w-2/4 h-2/5 px-5 py-8 rounded-md mr-20">
            <div className="flex flex-row justify-around">
              {/* card img */}
              <div className="flex flex-col justify-center w-2/5 h-full">
                <img
                  src="src/assets/portfolio/Portfolio–02.png"
                  className="h-4/6 justify-center self-center rounded-lg"
                  alt="Instagram"
                />
              </div>
              {/* card text */}
              <div className="bg-secondary-color w-[50%] rounded-md p-4 pt-0">
                <div className="w-full">
                  <h1 className="text-white text-3xl mb-4">Honours Degree</h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto sirius lapsu rom.
                  </p>
                </div>
              </div>
            </div>

            {/* buttons */}
            <div className="flex flex-row mt-10">
              <button className="flex justify-center bg-quinario-color-complement text-white w-3/6 h-2/3 px-20 rounded-3xl items-center py-2 mr-5">
                < FontAwesomeIcon  
                icon = { [ 'fab' ,  'github' ] }  
                className="text-white mr-3 text-2xl"
                / > 
                GitHub
              </button>

              <button className="flex justify-center bg-quinario-color-complement text-white w-3/6 h-2/3 px-12 rounded-3xl items-center py-2">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-white mr-3 text-2xl"
                />
                Vista previa
              </button>
            </div>
          </div>
        </div>

        {/* row */}
        <div className="container flex justify-between w-full h-full mb-10">
          {/* card */}
          <div className="flex flex-col bg-secondary-color lg:flex flex-grow justify-around items-center w-2/4 h-2/5 px-5 py-8 rounded-md mr-20">
            <div className="flex flex-row justify-around">
              {/* card img */}
              <div className="flex flex-col justify-center w-2/5 h-full">
                <img
                  src="src/assets/portfolio/Portfolio–02.png"
                  className="h-4/6 justify-center self-center rounded-lg"
                  alt="Instagram"
                />
              </div>
              {/* card text */}
              <div className="bg-secondary-color w-[50%] rounded-md p-4 pt-0">
                <div className="w-full">
                  <h1 className="text-white text-3xl mb-4">Honours Degree</h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto sirius lapsu rom.
                  </p>
                </div>
              </div>
            </div>

            {/* buttons */}
            <div className="flex flex-row mt-10">
              <button className="flex justify-center bg-quinario-color-complement text-white w-3/6 h-2/3 px-20 rounded-3xl items-center py-2 mr-5">
                < FontAwesomeIcon  
                icon = { [ 'fab' ,  'github' ] }  
                className="text-white mr-3 text-2xl"
                / > 
                GitHub
              </button>

              <button className="flex justify-center bg-quinario-color-complement text-white w-3/6 h-2/3 px-12 rounded-3xl items-center py-2">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-white mr-3 text-2xl"
                />
                Vista previa
              </button>
            </div>
          </div>

          {/* card */}
          <div className="flex flex-col bg-secondary-color lg:flex flex-grow justify-around items-center w-2/4 h-2/5 px-5 py-8 rounded-md mr-20">
            <div className="flex flex-row justify-around">
              {/* card img */}
              <div className="flex flex-col justify-center w-2/5 h-full">
                <img
                  src="src/assets/portfolio/Portfolio–02.png"
                  className="h-4/6 justify-center self-center rounded-lg"
                  alt="Instagram"
                />
              </div>
              {/* card text */}
              <div className="bg-secondary-color w-[50%] rounded-md p-4 pt-0">
                <div className="w-full">
                  <h1 className="text-white text-3xl mb-4">Honours Degree</h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto sirius lapsu rom.
                  </p>
                </div>
              </div>
            </div>

            {/* buttons */}
            <div className="flex flex-row mt-10">
              <button className="flex justify-center bg-quinario-color-complement text-white w-3/6 h-2/3 px-20 rounded-3xl items-center py-2 mr-5">
                < FontAwesomeIcon  
                icon = { [ 'fab' ,  'github' ] }  
                className="text-white mr-3 text-2xl"
                / > 
                GitHub
              </button>

              <button className="flex justify-center bg-quinario-color-complement text-white w-3/6 h-2/3 px-12 rounded-3xl items-center py-2">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-white mr-3 text-2xl"
                />
                Vista previa
              </button>
            </div>
          </div>
        </div>

        


      </div>
    </>
  );
};
