import Container from "../layout/Container";
import welcome from '../assets/team/welcome_team.svg';
import coordinacion from '../assets/team/coordinacion.svg';
import diseno from '../assets/team/diseno.svg';
import desarrollo from '../assets/team/desarrollo.svg';
import photo from '../assets/team/photo.svg';
import star from '../assets/team/vector.svg';
import financiamiento from '../assets/team/financiamiento.svg';
import vectoMobile from '../assets/team/Group_247_mobile.svg';
import titleMobile from '../assets/team/Group_270_mobile.svg';

export default function Team() {
  return (
    <Container>
      {/* Mobile */}
      <div className="flex flex-col justify-center lg:hidden mb-28 mt-32 items-center">
        <img src={vectoMobile} className="h-[210px]" />
        <img src={titleMobile} className="mt-12 h-[450px]" />

        <img src={coordinacion} className="h-6 mt-14" />
        <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative mt-12">
          <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
          <img src={photo} className="h-[170px] mt-6" />
          <p className="text-white text-center py-6 font-firaMono">Patricia Peña</p>
        </div>
        <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative mt-12">
          <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
          <img src={photo} className="h-[170px] mt-6" />
          <p className="text-white text-center py-6 font-firaMono">Daniela Moyano</p>
        </div>

        <img src={desarrollo} className="h-6 mt-16" />
        <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative mt-12">
          <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
          <img src={photo} className="h-[170px] mt-6" />
          <p className="text-white text-center py-6 font-firaMono">Jorge Ortiz</p>
        </div>
        <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative mt-12">
          <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
          <img src={photo} className="h-[170px] mt-6" />
          <p className="text-white text-center py-6 font-firaMono">Tania Baquedano</p>
        </div>
        <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative mt-12">
          <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
          <img src={photo} className="h-[170px] mt-6" />
          <p className="text-white text-center py-6 font-firaMono">Consuelo Anguita</p>
        </div>

        <img src={diseno} className="h-6 mt-16" />
        <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative mt-12">
          <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
          <img src={photo} className="h-[170px] mt-6" />
          <p className="text-white text-center py-6 font-firaMono">Antonia Publins</p>
        </div>
        <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative mt-12">
          <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
          <img src={photo} className="h-[170px] mt-6" />
          <p className="text-white text-center py-6 font-firaMono">Karina Hyland</p>
        </div>
      </div>

      {/* Desktop */}
      <div className="relative hidden lg:flex lg:flex-col mt-[74px]">
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-74px)] w-full">
          <div className="flex justify-center items-center w-full pt-[150px]">
            <img src={welcome} className="h-[300px]" />
          </div>
          {/* coordinación */}
          <div className="flex flex-col justify-center pt-[230px]">
            <img src={coordinacion} className="h-11" />
            <div className="flex pt-7 justify-between">
              <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative ">
                <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
                <img src={photo} className="h-[170px] mt-6" />
                <p className="text-white text-center py-6 font-firaMono">Patricia Peña</p>
              </div>
              <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative">
                <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
                <img src={photo} className="h-[170px] mt-6" />
                <p className="text-white text-center py-6 font-firaMono">Daniela Moyano</p>
              </div>
            </div>
          </div>
          {/* desarrollo */}
          <div className="flex flex-col justify-center pt-[100px]">
            <img src={desarrollo} className="h-11" />
            <div className="flex pt-7 justify-between">
              <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative">
                <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
                <img src={photo} className="h-[170px] mt-6" />
                <p className="text-white text-center py-6 font-firaMono">Jorge Ortiz</p>
              </div>
              <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 mx-10 relative">
                <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
                <img src={photo} className="h-[170px] mt-6" />
                <p className="text-white text-center py-6 font-firaMono">Tania Baquedano</p>
              </div>
              <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative">
                <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
                <img src={photo} className="h-[170px] mt-6" />
                <p className="text-white text-center py-6 font-firaMono">Consuelo Anguita</p>
              </div>
            </div>
          </div>
          {/* diseno */}
          <div className="flex flex-col justify-center pt-[100px] min-w-[440px]">
            <img src={diseno} className="h-11" />
            <div className="flex pt-7 justify-between">
              <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative">
                <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
                <img src={photo} className="h-[170px] mt-6" />
                <p className="text-white text-center py-6 font-firaMono">Antonia Publins</p>
              </div>
              <div className="bg-[#39377F] w-fit rounded-3xl flex flex-col justify-center px-4 relative">
                <img src={star} className="h-8 absolute top-[13px] right-[17px]" />
                <img src={photo} className="h-[170px] mt-6" />
                <p className="text-white text-center py-6 font-firaMono">Karina Hyland</p>
              </div>
            </div>
          </div>
          <div className="mt-[100px] mb-32 relative w-[800px] flex justify-center">
            <img src={financiamiento} className="absolute" />
            <p className="text-[#D1CEED]  max-w-[900px] font-firaMono w-[710px] text-sm mt-10">El financiamiento de este proyecto es posible en esta etapa gracias a la red de Investigación en Inteligencia Artificial Feminista - FAIR (Feminist Artificial Intelligence Research Network) en su hub de la plataforma internacional APlus Alliance - Alianza por Algoritmos Inclusivos, con apoyo de IDRC de Canadá, el Tecnológico de Monterrey y la Fundación Tecnológica de Costa Rica.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}