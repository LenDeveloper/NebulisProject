import Banner from "./../../assets/Banner.png";
import BannerGif from "./../../assets/Banner.gif";
import "./Header.css";

import NebulisVersion from "./../../helpers/NebulisVersion";

export default function () {
  return (
    <>
      <div
        className="relative h-screen bg-no-repeat bg-cover banner bg-top"
        style={{ backgroundImage: `url(${BannerGif})`, imageRendering: "pixelated" }}
      >
        {/* Capa de superposición negra con transparencia */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Contenido centrado */}
        <div className="absolute inset-5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-950/85 sm:me-36 pt-5 ps-5 pe-5 pb-5 rounded-lg">
              <p className="text-gray-400 text-5xl select-none BebasNeue">Laboratorios</p>
              <p className="text-white text-8xl select-none BebasNeue">Nebulis</p>
              <p className="text-white text-xl select-none BebasNeue pt-0 mb-8">{ NebulisVersion }</p>

              {/*Botones*/}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <a href="#download" type="button" className="p-4 bg-everglade-800 text-everglade-50 hover:bg-everglade-900 rounded-lg font-bold me-4 cursor-pointer transition duration-300 w-11/12 mb-5 sm:mb-auto">
                  Descargar
                </a>

                <a href="#features" className="p-4 bg-tangaroa-800 hover:bg-tangaroa-900 text-tangaroa-50 rounded-lg font-bold cursor-pointer cursor-pointer transition duration-300 w-11/12">
                  Novedades
                </a>
              </div>

              <p className="text-gray-300 text-xl select-none LexEnd mt-8 mb-5">
                Laboratorios Nebulis es una plataforma de laboratorios virtuales para programadores con una interfaz tipo "juego". Gestiona proyectos fácilmente y recibe asistencia de Kamus, tu IA para programación, y Stella, tu organizadora personal.
              </p>

            </div>

            <div>{/* Espacio vacío o contenido adicional */}</div>
          </div>
        </div>

        {/* Onda SVG */}
        <svg className="absolute bottom-0 w-full mt-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#18272f" fillOpacity="1" d="M0,300L26.7,305.3C53.3,310,107,320,160,320C213.3,320,267,310,320,308C373.3,306,427,310,480,308C533.3,306,587,300,640,298.7C693.3,297,747,303,800,304C853.3,305,907,303,960,304C1013.3,305,1067,310,1120,308C1173.3,306,1227,300,1280,298.7C1333.3,297,1387,300,1413,301.3L1440,302L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
            </path>
        </svg>




      </div>

      {/* <div className="h-screen bg-green-300"></div> */}
    </>
  );
}
