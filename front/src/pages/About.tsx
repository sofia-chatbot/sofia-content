import Container from "../layout/Container";
import vector from '../assets/about/vector_background.svg';
import title from '../assets/about/about_sofia.svg';
import background from '../assets/about/what_is_sofia.svg';
import tree from '../assets/about/tree.svg';
import vectorMobile from '../assets/about/que_es_mobile.svg';
import titleMobile from '../assets/about/que_es_titulo_mobile.svg';
import backgroundText from "../assets/about/Group_212_mobile.svg";
import flowerMobile from '../assets/about/Vector_(Stroke)_mobile.svg';


export default function About() {
  return (
    <Container>
      {/* Mobile */}
      <div className="flex flex-col justify-center lg:hidden mb-28 mt-[74px]">
        <img src={vectorMobile} className="mb-11" />
        <img src={titleMobile} className="h-[220px]" />
        <div className="flex flex-col items-center my-11">
          <p className="font-bricolage text-[#D2D1F0] font-semibold text-xl w-60">
            <span className="text-[#FFFFDB] font-bold">¿Has recibido</span> agresiones, humillaciones o acoso en tu perfil o cuenta de red social por algo que dijiste, comentaste?
          </p>
          <br />
          <p className="font-bricolage text-[#D2D1F0] font-semibold text-xl w-60">
            <span className="text-[#FFFFDB] font-bold">¿Esta situación</span> se ha vuelto recurrente, ocurre con frecuencia y no sabes qué hacer?
          </p>
        </div>
        <div className="text-[#D2D1F0] font-firaMono flex justify-center relative">
          <img src={backgroundText} className="w-[310px]" />
          <div className="absolute w-[232px] top-[7%]">
            <p>Sof+IA es un Sistema de Oída Feminista, apoyada con Inteligencia Artificial generativa (IA). Es una chatbot, una agente tecnológica no humana para dialogar y conversar sobre situaciones de violencia y acoso digital que podemos vivir las mujeres, de cualquier edad, por el hecho de expresarnos, opinar o subir nuestros contenidos en plataformas digitales de redes sociales</p>
            <br />
            <p>Lo que te está ocurriendo y lo que estás enfrentando le pasa a millones de otras mujeres en redes sociales. No estás sola y no es tu culpa lo que estás enfrentando. Diariamente ocurren diversas situaciones de Violencia Digital de Género- contra mujeres y personas LGTBQI+. Un ataque en tus redes sociales, o que alguien publique información tuya son un riesgo contra tu derecho a expresión, opinión y a participar libremente en Internet.</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-[#D2D1F0] mt-11">
          <p className="font-bold font-bricolage text-2xl w-[233px]">Hemos desarrollado una primera versión de Sof+IA que funciona en este sitio web y que al ser consultada puede entregarte información sobre</p>
          <br />
          <div className="w-[300px] flex items-start">
            <img src={flowerMobile} className="pt-1 pr-4" />
            <p className="font-firaMono">Violencia digital contra mujeres de cualquier edad: recibir  humillaciones, agresiones escritas o verbales en tu perfil o cuenta de redes sociales , ataques en contra de lo que has expresado u opinado, recibir mensajes directos violentos sin haberlos solicitado etc.</p>
          </div>
          <br/>
          <div className="w-[300px] flex items-start">
            <img src={flowerMobile} className="pt-1 pr-4" />
            <p className="font-firaMono">Guiarte para reportar y denunciar estas situaciones en las mismas plataformas de redes sociales</p>
          </div>
          <br/>
          <div className="w-[300px] flex items-start">
            <img src={flowerMobile} className="pt-1 pr-4" />
            <p className="font-firaMono">Orientarte para realizar una denuncia a la Policía de Investigaciones, aunque estas situaciones actualmente no son consideradas un delito en Chile.</p>
          </div>
          <br/>
          <div className="w-[300px] flex items-start">
            <img src={flowerMobile} className="pt-1 pr-4" />
            <p className="font-firaMono">Entregarte  muchas recomendaciones para tu autocuidado digital y para que no te vayas de internet, ni para que cierres tus cuentas de redes sociales. Queremos que sepas que hay herramientas, recursos y apoyo para que no te sientas sola enfrentado esta situación.</p>
          </div>
          <br/>
        </div>
      </div>

      {/* Desktop */}
      <div className="relative hidden lg:flex lg:flex-col mt-[74px]">
        <div className="relative">
          <img src={vector} className="h-full z-0 w-[55%]" />
          <img src={title} className="absolute z-10 h-[300px] 2xl:h-[350px] top-[15%] 2xl:top-[16%] right-[19%]" />
          <div className="absolute w-[410px] bottom-[19%] left-[15%]">
            <p className="text-[#49426C] font-bricolage font-semibold text-2xl"><span className="text-[#26213F] font-bricolage font-bold">¿Has recibido</span> agresiones, humillaciones o acoso en tu perfil o cuenta de red social por algo que dijiste, comentaste?</p>
            <p className="text-[#49426C] font-bricolage font-semibold text-2xl pt-9"><span className="text-[#26213F] font-bricolage font-bold">¿Esta situación</span> se ha vuelto recurrente, ocurre con frecuencia y no sabes qué hacer?</p>
          </div>
          <div className="absolute right-[2%] bottom-[0] 2xl:bottom-[6%] ">
            <div className="relative">
              <img src={background} className="h-[850px]" />
              <div className="text-[#D1CEED] text-lg font-firaMono absolute top-[12%] left-[13%] w-[79%]">
                <p>Sof+IA es un Sistema de Oída Feminista, apoyada con Inteligencia Artificial generativa (IA). Es una chatbot, una agente tecnológica no humana para dialogar y conversar sobre situaciones de violencia y acoso digital que podemos vivir las mujeres, de cualquier edad, por el hecho de expresarnos, opinar o subir nuestros contenidos en plataformas digitales de redes sociales.</p>
                <br/>
                <p>Lo que te está ocurriendo y lo que estás enfrentando le pasa a millones de otras mujeres en redes sociales. No estás sola y no es tu culpa lo que estás enfrentando. Diariamente ocurren diversas situaciones de Violencia Digital de Género- contra mujeres y personas LGTBQI+. Un ataque en tus redes sociales, o que alguien publique información tuya son un riesgo contra tu derecho a expresión, opinión y a participar libremente en Internet.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-10">
          <div className="w-[770px]">
            <p className="text-[#D1CEED] font-bricolage font-bold text-3xl">Hemos desarrollado una primera  versión de Sof+IA que funciona en este sitio web y que al ser consultada puede entregarte información sobre</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mt-10">
          <img src={tree} className="w-full max-w-[960px] 2xl:max-w-[1200px]" />
          <div className="relative w-full max-w-[960px] 2xl:max-w-[1200px] h-[400px]">
            <p className="text-[#D1CEED] text-xs font-firaMono absolute top-[3%] left-[2%] w-[200px]">Violencia digital contra mujeres de cualquier edad: recibir  humillaciones, agresiones escritas o verbales en tu perfil o cuenta de redes sociales , ataques en contra de lo que has expresado u opinado, recibir mensajes directos violentos sin haberlos solicitado etc.</p>
            <p className="text-[#D1CEED] text-xs font-firaMono absolute top-[3%] left-[32%] w-[200px]">Guiarte para reportar y denunciar estas situaciones en las mismas plataformas de redes sociales</p>
            <p className="text-[#D1CEED] text-xs font-firaMono absolute top-[3%] right-[12%] 2xl:right-[16%] w-[200px]">Orientarte para realizar una denuncia a la Policía de Investigaciones, aunque estas situaciones actualmente no son consideradas un delito en Chile.</p>
            <p className="text-[#D1CEED] text-xs font-firaMono absolute top-[3%] right-[-20%] 2xl:right-[-15%] w-[200px]">Entregarte  muchas recomendaciones para tu autocuidado digital y para que no te vayas de internet, ni para que cierres tus cuentas de redes sociales. Queremos que sepas que hay herramientas, recursos y apoyo para que no te sientas sola enfrentado esta situación.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}