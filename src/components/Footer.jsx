

export default function Footer() {
  return (
    <>
      <footer className="flex flex-wrap items-center justify-center px-2 py-3 bg-primary-color flex-end w-full relative bottom-0">
        <div className="md:container flex flex-row items-center justify-center">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex w-full"> <p
              className="tall:bg-red-700 tall:text-[1.8vh] text-[2.7vh] sm:text-sm md:text-sm lg:text-2xl font-light leading-relaxed whitespace-nowrap text-white items-center"
            >Ruben Jaramillo Copyright © 2022 todos los derechos reservados. 
            </p></div>
           
          </div>

          <div className={
              "flex lg:flex w-[50%] flex-grow items-center justify-end"
            }
            id="example-navbar-danger"
          >
            <p
              className="hidden sm:hidden md:flex md:text-sm lg:text-2xl text-white flex-col lg:flex-row list-none lg:ml-auto justify-items-center justify-self-center items-center"
            >Creado por <>&nbsp;</>
            </p>
            <p 
            className="hidden sm:hidden md:flex  md:text-sm lg:text-2xl font-bold text-secondary-color justify-items-center justify-self-center"
          >Ruben Jaramillo
          </p>
            
            
          </div>
        </div>
      </footer>
    </>
  );
}
