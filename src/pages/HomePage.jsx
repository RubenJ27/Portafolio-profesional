
export default function HomePage() {
  return (
    <>
      <div className="bg-primary-color flex bg-[url('./assets/profile/beautiful-geometric.png')] h-[87vh] mt-20 relative z-10 w-full justify-center">
        <div className="flex flex-col justify-start mt-6 z-30">
          <img src="src/assets/profile/AvatarMaker-2.png" className="flex w-5/4 h-2/4 rounded-full mt-2 self-center" alt="" />
          <h1 className="flex text-white text-4xl font-medium justify-center my-2">Ruben Jaramillo</h1>
          <p className="flex text-white text-[1.4rem] font-light justify-center mb-2">I’m a Front-End developer</p>

                <div className="flex justify-center w-full">
                    <a href="#" className="flex p-2 items-center justify-center w-auto h-auto" target="_blank">
                        <img src="src/assets/icons/instagram.svg" className="w-3/4 h-3/4" alt="Instagram" />
                    </a>
                    <a href="#" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="src/assets/icons/twitter.svg" className="w-3/4 h-3/4" alt="Twitter" />
                    </a>
                    <a href="#" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="src/assets/icons/linkedIn.svg" className="w-3/4 h-3/4" alt="LinkedIn" />
                    </a>
                    <a href="#" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="src/assets/icons/dribbble.svg" className="w-3/4 h-3/4"alt="Dribbble" />
                    </a>
                    <a href="#" className="flex p-2 items-center justify-center" target="_blank">
                        <img src="src/assets/icons/pinterest.svg" className="w-3/4 h-3/4"alt="Pinterest" />
                    </a>
                </div>

                <div className="flex justify-center">
                  <button className="bg-quinario-color-complement text-white w-5/6 h-2/3 rounded-3xl mr-12">Perfil</button>
                  <button className="flex bg-quinario-color-complement text-white w-5/6 h-2/3 rounded-3xl items-center"><img src="src/assets/icons/github.svg" className="w-2/4 h-3/5 justify-center self-center" alt="Instagram" />GitHub</button>
                </div>
        </div>
      </div>
    </>
  );
}
