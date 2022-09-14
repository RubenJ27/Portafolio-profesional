import React from "react";


export default function Footer() {
  return (
    <>
      <footer className="flex flex-wrap items-center justify-center px-2 py-5 bg-primary-color flex-end w-full absolute bottom-0">
        <div className="container flex flex-wrap items-center justify-center">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <p
              className="text-2xl font-light leading-relaxed inline-block whitespace-nowrap text-white items-center"
            >Ruben Jaramillo Copyright © 2022 todos los derechos reservados. 
            </p>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center"
            }
            id="example-navbar-danger"
          >
            <p
              className="flex text-xl text-white flex-col lg:flex-row list-none lg:ml-auto justify-items-center justify-self-center items-center"
            >Creado por <>&nbsp;</><p 
            className="flex text-2xl font-bold text-secondary-color justify-items-center justify-self-center"
          >Ruben Jaramillo
          </p>
            </p>
            
            
          </div>
        </div>
      </footer>
    </>
  );
}
