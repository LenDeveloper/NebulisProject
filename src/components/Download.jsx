function Download(){
    return(
        <>
        <p className="text-md text-white font-bold m-12 ps-36 pe-36 flex items-center text-4xl flex justify-center" id="download">Descargar</p>
        <p className="text-md text-white text-md ps-36 pe-36 mb-5">Por favor, ten en cuenta que el software se encuentra en una fase muy temprana de lo que se tiene en mente por lo que puedes encontrarte con algunos bugs aunque ya ha sido probada todo lo posible, también los modelos de IA están siendo desarrollados desde cero y se encuentran en un nivel muy temprano de desarrollo por lo tanto puede que algunas veces el modelo no llegue a entenderte completamente. Si deseas colaborar con el proyecto puedes realizar una colaboración a <a className="font-bold text-blue-600" href="paypal.me/JesusLeandro948" target="_blank" rel="noopener noreferrer">paypal.me/JesusLeandro948</a> cualquier colaboración sería de mucha utilidad par apoyar el desarrollo de ésta herramienta, también puedes pasar por mi canal de youtube <a className="font-bold text-red-500" href="www.youtube.com/@lendv" target="_blank" rel="noopener noreferrer">@lenDv</a> para estar al tanto de cualquier novedad de éste o cualquier software que tenga en desarrollo.</p>
        <div className="grid grid-cols-2 gap-4 text-white ps-36 pe-36">
            <div className="bg-gray-900 p-5 rounded-md">
                <p className="text-md text-white font-bold flex items-center text-xl">Windows</p>
                <a className="hover:underline text-md flex items-center mt-5" href="https://mega.nz/file/JskCFSwA#a0z-QQSKrhQ6t2b_V3MWf0EV47078b6CR-a6k-01PiE" target="_blank">Ejecutable Ver. 0.0.5 x64</a>
            </div>
            <div className="bg-gray-900 p-5 rounded-md">
                <p className="text-md text-white font-bold flex items-center text-xl">Linux</p>
                <a className="hover:underline text-md flex items-center mt-5" href="#" target="_blank">AppImage Ver. 0.0.5 x64</a>
                <a className="hover:underline text-md flex items-center mt-5" href="#" target="_blank">Snap Ver. 0.0.5 x64</a>
            </div>                
        </div>
        </>
    );
}

export default Download;
