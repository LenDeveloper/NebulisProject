import KamusPicture from "./../../assets/KamusPicture.png";
import StellaPicture from "./../../assets/StellaPicture.png";
import Icon from "./../../assets/icon.png";
import Windows from "./../../assets/windows.png";
import Linux from "./../../assets/linux.png";

import KamusAlertInfo from "./../../components/Alerts/KamusAlertInfo";
import StellaAlertInfo from "./../../components/Alerts/StellaAlertInfo";


export default function () {

    return (
        <>
        <div className="relative bg-firefly-900 pb-24">
        {/* Onda SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#18272f" fillOpacity="1" d="M0,64L26.7,96C53.3,128,107,192,160,229.3C213.3,267,267,277,320,250.7C373.3,224,427,160,480,149.3C533.3,139,587,181,640,197.3C693.3,213,747,203,800,186.7C853.3,171,907,149,960,160C1013.3,171,1067,213,1120,202.7C1173.3,192,1227,128,1280,112C1333.3,96,1387,128,1413,144L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        


        {/*Cuadros IAS*/}
        <div className="flex justify-center gap-32">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Cuadro de KAMUS */}
        <div className="flex justify-center shadow-2xl m-5 bg-green-200">
          <div className="flex bg-slate-200 p-2 rounded-md">
            <img 
              src={KamusPicture} 
              alt="KamusPicture" 
              className="rounded-lg border-4 me-3 shadow-2xl" 
            />
            <div>
              <p className="text-black font-bold BebasNeue text-2xl break-words">K a m u s</p>
              <p className="text-black LexEnd text-md break-words"> 
                Kamus tu asistente virtual de programación... 
              </p>
              <p 
                onClick={ KamusAlertInfo } 
                className="text-everglade-500 LexEnd text-md break-words font-bold hover:text-teal-950 cursor-pointer"
              >
                Click Para mas info
              </p>
            </div>
          </div>
        </div>
        {/* Cuadro de Stella */}
        <div className="flex justify-center shadow-2xl m-5 bg-green-200">
          <div className="flex bg-slate-200 p-2 rounded-md">
            <img 
              src={StellaPicture} 
              alt="KamusPicture" 
              className="rounded-lg border-4 me-3 shadow-2xl" 
            />
            <div>
              <p className="text-black font-bold BebasNeue text-2xl break-words">S t e l l a</p>
              <p className="text-black LexEnd text-md break-words"> 
                Stella tu secretaria virtual personal...
              </p>
              <p 
                onClick={ StellaAlertInfo } 
                className="text-everglade-500 LexEnd text-md break-words font-bold hover:text-teal-950 cursor-pointer"
              >
                Click Para mas info
              </p>
            </div>
          </div>
        </div>


        </div>
        </div>
        {/*FIN Cuadros IAS*/}

        {/* Logo Nebulis */}
        <img src={Icon} alt="NebulisLogo" className="w-32 m-auto block mt-32 bg-firefly-900 rounded-full" />
        {/* Info Del Proyecto */}
        <div className="mt-5 bg-firefly-950 sm:mx-48 p-5 LexEnd rounded-lg">
            <p className="font-bold text-xl text-firefly-50">
                Bienvenido al Proyecto Nebulis: Transformando la Programación en una Experiencia Interactiva
            </p>
            <p className="text-firefly-50 mt-8">
                El Proyecto Nebulis es una innovadora propuesta que revoluciona el concepto de laboratorios virtuales de programación. Diseñado para optimizar tu tiempo y agilizar el proceso de recordar y buscar entre la inmensa variedad de sintaxis que los programadores utilizan a diario, Nebulis ofrece una interfaz intuitiva inspirada en el estilo de los videojuegos, que combina elegancia, relajación y una experiencia agradable.
            </p>
            <p className="text-firefly-50 mt-8">
                Con Nebulis, podrás gestionar tus proyectos de programación desde la comodidad de cualquier PC en el laboratorio. Abre tus proyectos con facilidad utilizando herramientas como VSCode o Sublime Text, accede a tu administrador de archivos y organiza tu trabajo de manera eficiente. Además, tendrás la capacidad de eliminar proyectos, crear copias de seguridad comprimidas y gestionar tu repositorio de Git sin complicaciones.
            </p>
            <p className="text-firefly-50 mt-8">
                Descubre una nueva forma de programar y optimiza tu flujo de trabajo con el Proyecto Nebulis. ¡Únete a nosotros en esta emocionante aventura!
            </p>
        </div>
        {/* Info De Constante Desarrollo */}
        <div className="mt-16 bg-firefly-950 sm:mx-48 p-5 LexEnd rounded-lg">
            <p className="font-bold text-xl text-firefly-50">
                Nota Importante sobre el Software
            </p>
            <p className="text-firefly-50 mt-8">
                Queremos informarte que el software se encuentra actualmente en una fase temprana de desarrollo. Aunque hemos realizado pruebas exhaustivas para garantizar su funcionamiento, es posible que encuentres algunos errores o bugs. Los modelos de inteligencia artificial están siendo creados desde cero y están en una etapa inicial, por lo que en ocasiones pueden no comprender completamente tus requerimientos.
            </p>
            <p className="text-firefly-50 mt-8">
                Tu apoyo es fundamental para el crecimiento de este proyecto. Si deseas colaborar o estar al tanto de las últimas novedades, te invitamos a visitar nuestro canal de YouTube @lenDv, donde compartimos actualizaciones sobre el desarrollo de esta herramienta y otros proyectos en marcha.
            </p>
            <p className="text-firefly-50 mt-8">
                Agradecemos tu comprensión y tu interés en ser parte de esta emocionante aventura.
            </p>
        </div>
        {/* Botones de Descarga*/}
        <div className="mt-16 bg-firefly-950 sm:mx-48 p-5 LexEnd rounded-lg">
        {/* 
        "Descarga Laboratorios Nebulis y Transforma tu Experiencia de Programación"
        "Obtén Laboratorios Nebulis: Tu Nueva Herramienta de Programación"
        "Descarga Ahora Laboratorios Nebulis y Optimiza tus Proyectos"
        "Empieza a Usar Laboratorios Nebulis: ¡Descárgalo Aquí!"
        "Descarga Laboratorios Nebulis y Lleva tu Programación al Siguiente Nivel"
        */}
        <p className="LexEnd text-md break-words text-white font-bold text-2xl mb-10" id="download">Descarga Laboratorios Nebulis y Transforma tu Experiencia de Programación</p>

        <div className="flex justify-center gap-32">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Descargar Windows */}
        <div className="flex justify-center shadow-2xl sm:me-24">
            <div className="flex bg-slate-200 p-2 rounded-md mb-5">
                <img src={Windows} alt="Windows" className="rounded-lg border-4 me-3 shadow-2xl w-28 h-auto" />
                <div>
                    <p className="text-black font-bold BebasNeue text-2xl break-words">W i n d o w s</p>
                    {/* <p className="text-black LexEnd text-md break-words w-60">
                        Obtén la Versión para Windows 10 (64 Bits) Ahora
                    </p> */}
                    <a href="https://www.mediafire.com/file/t5fd27rkx794fx9/nebulisproject-0.0.5-setup.exe/file" target="_blank" className="text-everglade-800 LexEnd text-md break-words w-60 font-bold">
                        Descargar .Exe (X64)
                    </a>
                </div>
            </div>
        </div>
        {/* Descargar Linux */}
        <div className="flex justify-center shadow-2xl">
            <div className="flex bg-slate-200 p-2 rounded-md">
                <img src={Linux} alt="KamusPicture" className="rounded-lg border-4 me-3 shadow-2xl" />
                <div>
                    <p className="text-black font-bold BebasNeue text-2xl break-words">L i n u x  - (X64)</p>
                    {/* <p className="text-black LexEnd text-md break-words w-60">
                        Obtén la Versión para Linux (64 Bits) Ahora
                    </p> */}
                    <a href="https://www.mediafire.com/file/iw7kxqejdsvcl90/nebulisproject-0.0.5.AppImage/file" target="_blank" className="text-everglade-800 LexEnd text-md break-words w-60 font-bold">
                        Descargar .AppImage
                    </a>
                    <br />
                    <a href="https://www.mediafire.com/file/3ic1c86z72o9mzd/nebulisproject_0.0.5_amd64.snap/file" target="_blank" className="text-everglade-800 LexEnd text-md break-words w-60 font-bold mt-4">
                        Descargar .Snap
                    </a>
                </div>
            </div>
        </div>
        </div>
        </div>

        </div>


        {/* Actualizaciones */}
        <div className="mt-16 bg-firefly-950 sm:mx-48 p-5 LexEnd rounded-lg">
            <p className="font-bold text-xl text-firefly-50" id="features">
                Novedades
            </p>
            <p className="font-bold text-xl text-firefly-50 mt-8">
                0.0.5 -> Versión de lanzamiento
            </p>
            <p className="text-firefly-50 mt-1 ms-5">
                Creacion de escenarios
            </p>
            <p className="text-firefly-50 mt-1 ms-5">
                Creacion de Kamus y Stella
            </p>
            <p className="text-firefly-50 mt-1 ms-5">
                Creación de inicio de sesión y creación de cuentas
            </p>
        </div>





        </div>

        </>
    );
}
