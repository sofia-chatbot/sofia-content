import Container from "../layout/Container";
import title from '../assets/vdg/que_es_vdg.svg';
import left from '../assets/vdg/left_1.svg';
import right from '../assets/vdg/right_1.svg';
import how from '../assets/vdg/how.svg';
import img1 from '../assets/vdg/ident_1.svg';
import img2 from '../assets/vdg/ident_2.svg';
import img3 from '../assets/vdg/ident_3.svg';
import img4 from '../assets/vdg/ident_4.svg';
import img5 from '../assets/vdg/ident_5.svg';
import img6 from '../assets/vdg/ident_6.svg';
import vectorMobile from '../assets/vdg/Group_269_mobile.svg';
import titleMobile from '../assets/vdg/Group_197_mobile.svg';
import topMobile from '../assets/vdg/Group_247_mobile.svg';
import top from '../assets/vdg/top.svg';
import bottom from '../assets/vdg/bottom.svg';

export default function VdgPage() {
  return (
    <Container>
      {/* Mobile */}
      <div className="flex flex-col justify-center lg:hidden mb-28 mt-32">
        <img src={topMobile} className="h-[210px]" />
        <img src={titleMobile} className="h-[190px] mt-12" />
        <div className="w-full flex justify-center mt-14">
          <iframe
            className="rounded-3xl w-11/12 min-h-[194px] md:min-h-[340px]"
            src="https://www.youtube.com/embed/iZqb7I_C5yg?si=e1Lcg906kuCZQRSa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
        </div>
        <div className="text-[#D2D1F0] font-firaMono flex justify-center relative my-16">
          <img src={vectorMobile} className="w-[385px]" />
          <div className="absolute w-[284px] top-[2%]">
            <p>La violencia digital de género no tiene una sola definición o explicación, porque incluye a todas las situaciones violentas, hostiles o abusivas que se dirigen hacia una persona debido a su género, especialmente a las mujeres y a las personas LGTBQI+ , y que ocurre en plataformas y medios digitales, como de las redes sociales que usas a diario.</p>
            <br />
            <p>Este tipo de violencia adopta múltiples formas: acoso, intimidación, difamación, así como la divulgación no autorizada de imágenes íntimas o personales. Proviene tanto de usuarios desconocidos o anónimos como de aquellos conocidos en línea. Puede ocurrir desde cuentas o perfiles de personas que no conoces, anónimamente, o bien de personas que si conoces online.</p>
            <br />
            <p>La violencia digital de género es muy real y sus consecuencias son tanto emocionales como físicas. Es natural querer evitar futuros ataques y protegerse, lo que puede implicar reducir la exposición en redes sociales o incluso abandonarlas por completo. Te recomendamos revisar el estudio de la Fundación Datos Protegidos sobre Violencia de Género en Internet en Chile 2018, elaborado en colaboración con ONG Amaranta y el Departamento de Derecho Penal de la Universidad Alberto Hurtado.</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#F5DA7C] font-bricolage font-bold text-[32px] w-[311px]">
            <span className="text-[#FFFFDB] text-[35px]">¿Cómo </span>
            puedo identificar si estoy experimentando violencia digital de género?
          </p>
          <img src={img1} className="w-[300px] mt-6" />
          <img src={img2} className="w-[300px]  mt-6" />
          <img src={img3} className=" w-[300px] mt-6 " />
          <img src={img4} className=" w-[300px] mt-6" />
          <img src={img5} className=" w-[300px] mt-6" />
          <img src={img6} className=" w-[300px] mt-6" />
        </div>

      </div>
      {/* Desktop */}
      <div className="relative hidden lg:flex lg:flex-col mt-[74px]">
        <div className="flex justify-center w-full mt-[150px]">
          <img src={title} className="h-[300px]" />
        </div>
        <div className="w-full flex justify-center items-center mt-[100px]">
          <iframe
            className="w-full h-[600px] max-w-[1000px] rounded-3xl 2xl:h-[800px] 2xl:max-w-[1200px]"
            src="https://www.youtube.com/embed/iZqb7I_C5yg?si=e1Lcg906kuCZQRSa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
        </div>
        <div className="flex justify-between items-center">
          <img src={left} className="h-[500px]" />
          <div className="text-[#D1CEED] font-firaMono text-sm w-full max-w-[650px] 2xl:max-w-[1250px] 2xl:text-lg relative">
            <img src={top} className="absolute top-0 right-[-4%]"/>
            <img src={bottom} className="absolute bottom-0 left-[-8%]"/>
            <p className="pt-10">La violencia digital de género no tiene una sola definición o explicación, porque incluye a todas las situaciones violentas, hostiles o abusivas que se dirigen hacia una persona debido a su género, especialmente a las mujeres y a las personas LGTBQI+ , y que ocurre en plataformas y medios digitales, como de las redes sociales que usas a diario.</p>
            <br />
            <p>Este tipo de violencia adopta múltiples formas: acoso, intimidación, difamación, así como la divulgación no autorizada de imágenes íntimas o personales. Proviene tanto de usuarios desconocidos o anónimos como de aquellos conocidos en línea. Puede ocurrir desde cuentas o perfiles de personas que no conoces, anónimamente, o bien de personas que si conoces online.</p>
            <br />
            <p className="pb-11">La violencia digital de género es muy real y sus consecuencias son tanto emocionales como físicas. Es natural querer evitar futuros ataques y protegerse, lo que puede implicar reducir la exposición en redes sociales o incluso abandonarlas por completo. Te recomendamos revisar el estudio de la Fundación Datos Protegidos sobre Violencia de Género en Internet en Chile 2018, elaborado en colaboración con ONG Amaranta y el Departamento de Derecho Penal de la Universidad Alberto Hurtado.</p>
          </div>
          <img src={right} className="h-[600px]" />
        </div>
        <div className="flex justify-center items-center w-full mb-[100px] mt-7">
          <div className="flex items-start w-full max-w-[1300px]">
            <img src={how} />
            <div className="flex flex-wrap">
              <img src={img1} className="h-[500px] w-[265px]  mr-5" />
              <img src={img2} className="h-[500px] w-[265px] mr-5" />
              <img src={img3} className="h-[500px] w-[265px] pt-[21px]" />
              <img src={img4} className="h-[500px] w-[265px] mr-5" />
              <img src={img5} className="h-[500px] w-[265px] mr-5" />
              <img src={img6} className="h-[500px] w-[265px] pt-[21px]" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}