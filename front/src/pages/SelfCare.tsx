import Container from "../layout/Container";
import title from '../assets/selfcare/que_es_autocuidado.svg';
import queremos from '../assets/selfcare/queremos.svg';
import sigue from '../assets/selfcare/sigue_leyendo.svg';
import medida1 from '../assets/selfcare/medida_1.svg';
import medida2 from '../assets/selfcare/medida_2.svg';
import medida3 from '../assets/selfcare/medida_3.svg';
import medida4 from '../assets/selfcare/medida_4.svg';
import medida5 from '../assets/selfcare/medida_5.svg';
import medida6 from '../assets/selfcare/medida_6.svg';
import medida7 from '../assets/selfcare/medida_7.svg';
import vectorMobile from '../assets/team/Group_247_mobile.svg';
import titleMobile from '../assets/selfcare/title_mobile.svg';
import subtitleMobile from '../assets/selfcare/subtitle_mobile.svg';
import keep from '../assets/selfcare/keep_reading_mobile.svg';
import medida1Mobile from '../assets/selfcare/medida_1_mobile.svg';
import medida2Mobile from '../assets/selfcare/medida_2_mobile.svg';
import medida3Mobile from '../assets/selfcare/medida_3_mobile.svg';
import medida4Mobile from '../assets/selfcare/medida_4_mobile.svg';
import medida5Mobile from '../assets/selfcare/medida_5_mobile.svg';
import medida6Mobile from '../assets/selfcare/medida_6_mobile.svg';
import medida7Mobile from '../assets/selfcare/medida_7_mobile.svg';

export default function SelfCare() {
  return (
    <Container>
      {/* Mobile */}
      <div className="flex flex-col justify-center lg:hidden mb-28 mt-32 items-center">
        <img src={vectorMobile} className="h-[210px]" />
        <img src={titleMobile} className="my-14" />
        <img src={subtitleMobile} />
        <img src={keep} className="my-14" />
        <div className="flex flex-col items-center w-full md:hidden">
          <img src={medida1Mobile} className="w-full" />
          <img src={medida2Mobile} className="w-full" />
          <img src={medida3Mobile} className="w-full" />
          <img src={medida4Mobile} className="w-full" />
          <img src={medida5Mobile} className="w-full" />
          <img src={medida6Mobile} className="w-full" />
          <img src={medida7Mobile} className="w-full" />
        </div>
        <div className="md:flex flex-col items-center w-full hidden">
          <img src={medida1} className="h-[450px]" />
          <img src={medida2} className="h-[450px] " />
          <img src={medida3} className="h-[450px] " />
          <img src={medida4} className="h-[450px] " />
          <img src={medida5} className="h-[450px] " />
          <img src={medida6} className="h-[450px]" />
          <img src={medida7} className="h-[450px]" />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex lg:flex-col mt-[74px]">
        <img src={title} className="h-[300px] mt-[150px]" />
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-between w-full max-w-[80%] 2xl:max-w-[1200px] pt-20">
            <img src={queremos} className="h-[200px]" />
            <img src={sigue} className="h-[250px] mt-[100px]" />
          </div>
          <div className="w-full relative flex flex-col items-start mt-10 2xl:max-w-[1370px] mb-36">
            <img src={medida1} className="h-[450px]" />
            <img src={medida2} className="h-[450px] absolute top-[7%] right-[33%]" />
            <img src={medida3} className="h-[450px] absolute right-0" />
            <img src={medida4} className="h-[450px] ml-[15%]" />
            <img src={medida5} className="h-[450px] absolute right-[18%] top-[34%]" />
            <img src={medida6} className="h-[450px]" />
            <img src={medida7} className="h-[450px] absolute bottom-[4%] left-[34%]" />
          </div>
        </div>
      </div>
    </Container>
  )
}