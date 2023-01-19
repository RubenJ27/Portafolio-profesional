import { Link } from "react-scroll";


export default function HomePage() {
  return (
    <>
      <div className="bg-primary-color flex bg-[url('/beautiful-geometric.png')] relative z-10 w-full justify-center" id="home">
        <div className="flex flex-col justify-start mt-6 z-30">
          <img src="AvatarMaker-2.png" className="flex w-5/4 h-2/4 rounded-full mt-2 self-center" alt="" />
          <h1 className="flex text-white text-4xl font-bold justify-center my-2">Ruben Jaramillo</h1>
          <p className="flex text-white text-[1.4rem] font-normal justify-center mb-2">Soy un desarrollador Front-End</p>

                <div className="flex justify-center w-full">
                    <a href="#" className="flex p-2 items-center justify-center w-auto h-auto" target="_blank">
                        <img src="instagram.svg" className="w-11/12 h-3/4" alt="Instagram" />
                    </a>
                    <a href="#" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="twitter.svg" className="w-11/12 h-3/4" alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/ruben-dario-jaramillo-cervantes-a193a8192/" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="linkedin.svg" className="w-11/12 h-3/4" alt="LinkedIn" />
                    </a>
                    {/*  */}
                    <a href="#" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="dribbble.svg" className="w-11/12 h-3/4"alt="Dribbble" />
                    </a>
                    <a href="#" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="pinterest.svg" className="w-11/12 h-3/4"alt="Pinterest" />
                    </a>
                </div>

                {/* buttons */}
                <div className="flex justify-center">
                <Link
              offset={-70}
                smooth
                spy
                to="about-me"
                className="flex bg-quinario-color-complement text-white w-[45%] h-[70%] rounded-3xl items-center mr-5"
              >
                <button className="bg-quinario-color-complement text-white w-[100%] h-2/3 rounded-3xl">Perfil</button>
                </Link>
                  
                  
                  <a href="https://github.com/RubenJ27" target="_blank" className="flex bg-quinario-color-complement text-white w-[45%] h-[70%] rounded-3xl items-center">
                  <button className="flex bg-quinario-color-complement text-white w-[100%] h-2/3 rounded-3xl items-center"><img src="github.svg" className="w-2/4 h-[80%] justify-center self-center" alt="GitHub" />GitHub</button>
                  </a>
                  
                </div>
        </div>
      </div>
    </>
  );
}
