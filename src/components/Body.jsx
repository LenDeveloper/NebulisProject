import stella from "/stella.png";
import kamus from "/kamus.png";
import News from "./News.jsx"
import Download from "./Download.jsx";

function Body(){

    return (
    <>
        <p className='text-lg text-emerald-200 font-bold mt-12 text-center select-none'>Laboratios Virtuales De Programación</p>
        <p className='text-5xl text-white font-bold text-center select-none'>Laboratorios Nebulis</p>
        <p className="text-md text-white font-bold m-12 ps-36 pe-36 flex items-center">El Proyecto Nebulis se trata de una novedosa idea para implementar laboratorios virtuales de programación enfocado en la optimización de tiempo en el trabajo agilizando el proceso de recordar e investigar la innumerable cantidad de sintaxis que son utilizadas día a día entre programadores, todo esto por medio de una intuitiva interfáz de modo de "juego" que buscan ser lo más elegante, relajado y agradable posible.</p>
        <p className="text-md text-white font-bold m-12 ps-36 pe-36 flex items-center">Administra tus proyectos de programación desde alguna PC del laboratorio, desde el PC puedes abrir tu proyecto desde VSCode, Sublime Text y tu administrador de archivos, también puedes eliminar tu proyecto, comprimir un respaldo de tu proyecto y administra tu proyecto de GIT.</p>
        <p className="text-md text-white font-bold m-12 ps-36 pe-36 flex items-center">Dentro de los Laboratorios Nebulis te encontrarás hasta el momento con 2 inteligencias aritificiales (IA) desarrolladas totalmente desde cero y en constante desarrollo, ¡te las presento!:</p>

        <div className="flex flex-row items-start ms-48 me-36">
            <img src={kamus} alt="kamus" className="w-28 pixelated" />
            <div className="flex flex-col ms-4">
                <p className="text-lg text-emerald-200 font-bold">KAMUS</p>
                <p className="text-lg text-white">Kamus es tu <b>asistente de programación</b>, puedes consultarle hasta el momento sobre <b>HTML, CSS, JS y PHP vanilla</b>. También puedes pedirle que cree por tí plantillas Vite de <b>React, Vanilla, Vue, Preact, Lit, Svelte, Solid, Qwik</b> o solicita  o <b>clonar un repositorio de GITHUB</b> y solicitar investigar en la Web</p>
            </div>
        </div>

        <div className="flex flex-row items-start ms-48 me-36 mt-12">
            <img src={stella} alt="stella" className="w-52 pixelated" />
            <div className="flex flex-col ms-4">
                <p className="text-lg text-emerald-200 font-bold">STELLA</p>
                <p className="text-lg text-white">Stella es tu <b>secretaria</b>, hasta el momento ella será la encargada de tu organización, pídele que registre un evento o recordatorio y dile cuántos minutos antes del evento debe empezar a notificarte, ella se encargará del resto, o tal vez tengas una <b>lista de tareas que tienen los requisitos del software que estás desarrollando</b>, primero pídele regístrala luego puedes pedirle que te muestre la lista de tareas pendientes, si ya completaste la tarea puedes hacer click sobre ella para marcarla como completada y también puedes solicitarle su lista de tareas completadas.</p>
                <br/>
                <p className="text-lg text-white"><b>¿Necesitas instalar un programa?</b> Pídeselo a Stella, ella te <b>solicitará el nombre el programa y te devolverá una lista de programas</b>, haz click sobre el programa a instalar y <b>ella se encargará del resto</b>.</p>
            </div>
        </div>

        {/* <div className="flex justify-center">
            <img src={kamus} alt="kamus" className="w-16 pixelated" />
            <p>Soy el tilin</p>
        </div>
        <div className="flex justify-center">
            <img src={stella} alt="stella" className="w-16 pixelated" />
        </div> */}

        <Download />
        
        <News />

    </>
    );
}

export default Body;