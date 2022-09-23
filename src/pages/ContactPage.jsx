import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {} from "../App.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactPage() {
 
  const { register, formState: { errors } ,handleSubmit } = useForm();
  const patterns = {
    name: /^[A-Za-z]+$/i,
    email: /^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+\.)+[a-z]{2,5}$/,
  };

  
  const onSubmit = (userInfo) => console.log(userInfo);

  
  

  return (
    <>
      <div
        className="flex flex-wrap justify-center items-center px-2 py-3 bg-secondary-color flex-end relative"
        id="contact"
      >
        <h1 className="flex container text-white font-bold text-3xl w-full my-12">
          Contacto
        </h1>
        <div className="container flex justify-evenly w-full h-full mb-12">
          <div className="flex flex-col xl:flex-row justify-between w-full h-2/4">
            {/* card */}
            <div className="flex flex-col w-[100%] h-2/5 bg-primary-color lg:w-auto lg:static mr-0 xl:mr-5 mb-5 xl:mb-0 justify-between rounded-xl px-3 sm:px-16 py-10">
              <h1 className="text-white font-bold text-3xl w-full mb-3">
                Hablemos de lo que necesitas
              </h1>

              {/* click contact */}
              <div className="flex">
                <p className="text-white">
                  ¿No te gustan los formularios? envíame un
                </p>{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=573224675055&text=Hola, Nececito mas informacion para realizar proyecto!"
                  className="text-quinario-color-complement cursor-pointer font-medium mx-2"
                >
                  mensaje privado
                </a>{" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-white ml-2 hidden sm:flex text-2xl my-auto"
                />
              </div>
            </div>

            {/* card */}
            <div className="flex w-[100%] lg:w-auto h-3/4 bg-primary-color lg:static justify-between items center rounded-xl py-7">
              <form
                onSubmit={handleSubmit(onSubmit)}
                /* action="https://formsubmit.co/tiburones.tk@gmail.com" method="POST" */ className="flex flex-col w-full h-full px-2.5 sm:px-[3.5rem]"
              >
                <div className="mb-6">
                <input
                  {...register("name", {
                    required: true,
                    minLength: 3,
                    pattern: /^[a-zA-Z ]+$/
                  })}
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  className="text-white bg-secondary-color w-full xl:w-[25rem] placeholder-white px-5 py-3 rounded-xl relative"
                />

                {errors.name?.type === 'required' && <p className="text-red-600 font-bold ml-1 mt-2"> <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="text-red-600 ml-1 pt-1 text-2xl my-auto mr-3"
                  />El campo nombre es requerido </p>}
                {errors.name?.type === 'minLength' && <p className="text-red-600 font-bold ml-1 mt-2"> <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="text-red-600 pt-1 text-2xl mr-2"
                  />El campo debe tener como minimo 3 caracteres </p>}
                   {errors.name?.type === 'pattern' && <p className="text-red-600 font-bold ml-1 mt-2"> <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="text-red-600 pt-1 text-2xl mr-2"
                  />No se admiten caracteres especiales en este campo </p>}
                  
                </div>
                
                <div className="mb-6">
                <input
                 {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+\.)+[a-z]{2,5}$/
                })}
                  type="email"
                  name="email"
                  className="bg-secondary-color text-white px-5 py-3 placeholder-white rounded-xl w-full "
                  placeholder="Correo"
                />

                {errors.email?.type === 'pattern' && <p className="text-red-600 font-bold ml-1 mt-2"><FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="text-red-600 ml-1 pt-1 text-2xl my-auto mr-3"
                  />Introduzca una direccion de correo valida</p>}
                </div>
                
                <div className="mb-6">
                <textarea
                {...register("message", {
                  required: true,
                  minLength: 10
                })}

                  className="bg-secondary-color text-white px-5 py-3 placeholder-white rounded-xl w-full"
                  name="message"
                  placeholder="Mensaje"
                  rows="6"
                  resize="true"
                  maxLength="3000"
                ></textarea>

                {errors.message?.type === 'minLength' && <p className="text-red-600 font-bold ml-1 mt-2"> <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="text-red-600 pt-1 text-2xl mr-2"
                  />El campo debe tener como minimo 10 caracteres </p>}
                </div>
                

                

                <button className="flex justify-center bg-quinario-color-complement text-white w-[60%] sm:w-[35%] md:w-[40%] xl:w-2/4 h-2/3  px-18 rounded-3xl items-center py-2 mr-5">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-white ml-2 text-2xl my-auto mr-3"
                  />{" "}
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
