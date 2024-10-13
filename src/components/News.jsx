// import { Link } from 'react-router-dom';

function News(){
    return (
        <>
        <p className="text-md text-white font-bold m-2 mt-10 mb-1 md:m-12 md:ps-36 md:pe-36 flex items-center text-xl md:text-4xl flex justify-center" id="news">Novedades. Ult actualización: 14-09-2024</p>

        <div className="grid grid-cols-1 text-white md:ps-36 md:pe-36">
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