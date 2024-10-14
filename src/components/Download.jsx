function Download(){
    return(
        <>
        <p className="text-md text-white font-bold m-12 ps-36 pe-36 flex items-center text-4xl flex justify-center" id="download">Descargar</p>
        <p className="text-md text-white m-5 text-md md:ps-36 md:pe-36 mb-5">Por favor, ten en cuenta que el software se encuentra en una fase muy temprana de lo que se tiene en mente por lo que puedes encontrarte con algunos bugs aunque ya ha sido probada todo lo posible, también los modelos de IA están siendo desarrollados desde cero y se encuentran en un nivel muy temprano de desarrollo por lo tanto puede que algunas veces el modelo no llegue a entenderte completamente. Si deseas colaborar con el proyecto puedes apoyar el desarrollo de ésta herramienta pasandote por mi canal de youtube <a className="font-bold text-red-500" href="www.youtube.com/@lendv" target="_blank">@lenDv</a> para estar al tanto de cualquier novedad de éste o cualquier software que tenga en desarrollo.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white md:ps-36 md:pe-36">
            <div className="bg-gray-900 p-5 rounded-md">
                <p className="text-md text-white font-bold flex items-center text-xl">Windows</p>
                <a className="hover:underline text-md flex items-center mt-5" href="https://www.mediafire.com/file/t5fd27rkx794fx9/nebulisproject-0.0.5-setup.exe/file" target="_blank">Ejecutable Ver. 0.0.5 x64</a>
            </div>
            <div className="bg-gray-900 p-5 rounded-md">
                <p className="text-md text-white font-bold flex items-center text-xl">Linux</p>
                <a className="hover:underline text-md flex items-center mt-5" href="https://www.mediafire.com/file/iw7kxqejdsvcl90/nebulisproject-0.0.5.AppImage/file" target="_blank">AppImage Ver. 0.0.5 x64</a>
                <a className="hover:underline text-md flex items-center mt-5" href="https://www.mediafire.com/file/3ic1c86z72o9mzd/nebulisproject_0.0.5_amd64.snap/file" target="_blank">Snap Ver. 0.0.5 x64</a>
            </div>                
        </div>
        </>
    );
}

export default Download;
