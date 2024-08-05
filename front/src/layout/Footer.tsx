import idrc from '../assets/img_footer/idrc.svg';
import aplus from '../assets/img_footer/alliance.svg'
import odegi from '../assets/img_footer/odegi.svg';
import fair from '../assets/img_footer/feminist_ia.svg';
import wat from '../assets/img_footer/women.svg';
import dt from '../assets/img_footer/datos_protegidos.svg';
import tec from '../assets/img_footer/tec_costa_rica.svg';

export default function Footer() {
  return (
    <div className="bg-[#39377F] w-full flex justify-center items-center">
      <div className="px-5 py-6 w-full flex flex-wrap justify-around items-center max-w-7xl">
        <img className="h-16 md:h-[60px] p-3" src={idrc} />
        <img className="h-20 md:h-[80px] p-3" src={aplus} />
        <img className="h-16 md:h-[60px] p-3" src={fair} />
        <img className="h-16 md:h-[60px] p-3" src={odegi}/>
        <img className="h-16 md:h-[60px] p-3" src={wat} />
        <img className="h-16 md:h-[60px] p-3" src={dt} />
        <img className="h-16 md:h-[55px] p-3" src={tec} />
      </div>
    </div>
  )
}