import Container from "../layout/Container";
import vector from '../assets/home/half_background.svg';
import sofia from '../assets/home/Group 148.png';
import welcome from '../assets/home/Group 129.png';
import title from '../assets/home/que_puedo_hacer.svg';
import img1 from '../assets/home/image1.svg';
import img2 from '../assets/home/image2.svg';
import iconButton from '../assets/home/icon_button.svg';
import vectorMobile from '../assets/home/vector_mobile.svg';
import welcomeMobile from '../assets/home/welcome_mobile.svg';
import titleMobile from '../assets/home/que_puede_hacer_sofia_mobile.svg';
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <Container>
      {/* Mobile */}
      <div className="flex flex-col justify-center mt-[74px] lg:hidden">
        <div className="relative">
          <img src={vectorMobile} className="w-full" />
          <div className="w-full h-full absolute top-0 flex justify-center">
            <img src={sofia} className="h-[120px] mt-12 md:h-[200px] md:mt-36" />
          </div>
        </div>
        <img src={welcomeMobile} className="h-[320px] mt-16" />
        <div className="flex justify-center pt-7 mb-24">
          <button
            className="flex items-center font-bricolage text-[#FFFFDB] bg-[#39377F] rounded-full pl-4 pr-5 shadow-2xl cursor-pointer w-fit"
            onClick={() => navigate('/chatbot')}
          >
            <img src={iconButton} />
            Comenzar
          </button>
        </div>
        <div className="relative flex flex-col">
          <div className="bg-[#D2D1F0] w-full flex flex-col pt-5 text-[#39377F] font-firaMono text-sm">
            <div className="w-full flex flex-col items-start px-4">
              <img src={titleMobile} className="h-[130px] mb-3" />
              <p>Conoce y conversa con tu aliada contra la Violencia Digital de Género, SofIA, una asistente virtual que está aquí para brindarte apoyo y recursos, en los casos en que hayas o estés enfrentando violencia en línea. </p>
              <br />
              <p>Recuerda que no estás sola. Es muy importante reportar tu caso para que podamos contar con datos sistematizados y evidencias que contribuyan a incidir en políticas públicas y acciones colectivas que permitan abordar situaciones de violencia digital de género en nuestro país.</p>
            </div>
            <div className="h-[340px]"></div>
            <div className="flex justify-center absolute w-full bottom-[-10%]">
              <img src={img2} className="h-[400px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full mt-[100px] mb-28">
          <img src={img1} className="h-[400px] mb-5" />
          
        </div>
      </div>
      
      {/* Desktop */}
      <div className="relative hidden lg:flex mt-[74px]">
        <img src={vector} className=" h-full z-1 w-[55%]" />
        <img src={sofia} className="absolute w-auto z-10 top-[18%] left-[4%] h-[140px]" />
        <div className="flex flex-col absolute w-auto z-10 top-[10%] right-[5%] 2xl:top-[13%]">
          <img src={welcome} className="h-[300px] " />
          <div className="flex justify-end pt-7">
            <button
              className="flex items-center font-bricolage text-[#FFFFDB] bg-[#39377F] rounded-full pl-4 pr-5 shadow-2xl cursor-pointer w-fit"
              onClick={() => navigate('/chatbot')}
            >
              <img src={iconButton} />
              Comenzar
            </button>
          </div>
        </div>
        <div className="absolute flex top-[40%] w-full justify-around">
          <div className="pl-[4%]">
            <img src={title} />
            <p className="text-[#39377F] font-firaMono max-w-[358px] pt-8">Conoce y conversa con tu aliada contra la Violencia Digital de Género, SofIA, una asistente virtual que está aquí para brindarte apoyo y recursos, en los casos en que hayas o estés enfrentando violencia en línea.</p>
            <p className="text-[#39377F] font-firaMono max-w-[358px] pt-6">Recuerda que no estás sola. Es muy importante reportar tu caso para que podamos contar con datos sistematizados y evidencias que contribuyan a incidir en políticas públicas y acciones colectivas que permitan abordar situaciones de violencia digital de género en nuestro país.</p>
          </div>
          <div className="flex justify-between items-center">
            <img src={img2} className="h-[80%]" />
            <img src={img1} className="h-[80%]" />
            {/* <img src={img3} className="h-[80%]" /> */}
          </div>
        </div>
      </div>
    </Container>
  )
} 