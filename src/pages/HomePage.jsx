import { Link } from "react-scroll";

export default function HomePage() {
  return (
    <>
      <div className="bg-primary-color flex bg-[url('./assets/profile/beautiful-geometric.png')] relative z-10 w-full justify-center" id="home">
        <div className="flex flex-col justify-start mt-6 z-30">
          <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-landing-page.appspot.com/o/AvatarMaker-2.png?alt=media&token=d05c9093-34c4-449b-bfb3-a5833ef975d2" className="flex w-5/4 h-2/4 rounded-full mt-2 self-center" alt="" />
          <h1 className="flex text-white text-4xl font-bold justify-center my-2">Ruben Jaramillo</h1>
          <p className="flex text-white text-[1.4rem] font-normal justify-center mb-2">Soy un desarrollador Front-End</p>

                <div className="flex justify-center w-full">
                    <a href="#" className="flex p-2 items-center justify-center w-auto h-auto" target="_blank">
                        <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-landing-page.appspot.com/o/instagram.svg?alt=media&token=f95466a2-8763-41dc-9378-c92eead4bbe3" className="w-11/12 h-3/4" alt="Instagram" />
                    </a>
                    <a href="#" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-landing-page.appspot.com/o/twitter.svg?alt=media&token=e76b52fa-0b51-4459-a116-1896436e0fa5" className="w-11/12 h-3/4" alt="Twitter" />
                    </a>
                    <a href="#" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-landing-page.appspot.com/o/linkedin.svg?alt=media&token=c62f115d-67f9-48ed-9586-6be8efe38e04" className="w-11/12 h-3/4" alt="LinkedIn" />
                    </a>
                    <a href="#" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-landing-page.appspot.com/o/dribbble.svg?alt=media&token=a477c0ca-b301-4ef5-859a-a5bb61823377" className="w-11/12 h-3/4"alt="Dribbble" />
                    </a>
                    <a href="#" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-landing-page.appspot.com/o/pinterest.svg?alt=media&token=d4a75e53-05c3-4f96-9078-7a53b16dbc45" className="w-11/12 h-3/4"alt="Pinterest" />
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
                  
                  
                  <a href="https://github.com/RubenJ27" className="flex bg-quinario-color-complement text-white w-[45%] h-[70%] rounded-3xl items-center">
                  <button className="flex bg-quinario-color-complement text-white w-[100%] h-2/3 rounded-3xl items-center"><img src="https://firebasestorage.googleapis.com/v0/b/imagenes-landing-page.appspot.com/o/github.svg?alt=media&token=37e6200a-486d-47cc-813a-f2d42b022210" className="w-2/4 h-[80%] justify-center self-center" alt="GitHub" />GitHub</button>
                  </a>
                  
                </div>
        </div>
      </div>
    </>
  );
}
