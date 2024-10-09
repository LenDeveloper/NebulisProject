// import { Link } from 'react-router-dom';
import banner from '/banner.png';
import logo from '/logo.png';

function Banner(){
    return (
        <>
            {/* <img src={banner} alt="Banner" className='pixelated banner w-full' /> */}
            {/* bg-blue-950  */}
            <div className='pixelated banner h-[600px]' style={{backgroundImage: `url(${banner})`}}>
                <div className='flex items-center p-2 bg-neutral-950/50 select-none'>
                    <img src={logo} className='w-10' />
                    <p className='ms-5 text-xl text-white font-bold'>Nebulis Project</p>

                    {/* target="_blank" rel="noopener noreferrer" */}
                    <a href="#download" className='ms-10 pt-1 text-md text-emerald-500 font-bold hover:text-emerald-700 cursor-pointer'>Descargar</a>

                    <a href="#news" className='ms-10 pt-1 text-md text-emerald-500 font-bold hover:text-emerald-700 cursor-pointer'>Novedades</a>

                </div>
            </div>

{/* <div className='pixelated banner h-[600px]' style={{ backgroundImage: `url(${banner})` }}>
  <div className='flex items-center justify-between p-2 bg-neutral-950/50'>
    <div className='flex items-center'>
      <img src={logo} className='w-10' />
      <p className='ms-5 text-xl text-white font-bold'>Nebulis Project</p>
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg text-white font-bold me-5">
        Descargar
    </button>
  </div>
</div> */}
        </>
    );
}
export default Banner