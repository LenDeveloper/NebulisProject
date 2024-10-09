// import { Link } from 'react-router-dom';

function News(){
    return (
        <>
        <p className="text-md text-white font-bold m-12 ps-36 pe-36 flex items-center text-4xl flex justify-center" id="news">Novedades. Ult actualización: 14-09-2024</p>

        <div className="grid grid-cols-1 gap-4 text-white ps-36 pe-36">
            <div className="bg-gray-900 p-5 rounded-md max-h-96 min-h-96">
                <p>Ver. 0.0.5</p>
                <p>Fecha de actualización: 14-09-2024</p>
                <li>Versión de lanzamiento</li>
            </div>
        </div>

        </>
    );
}

export default News