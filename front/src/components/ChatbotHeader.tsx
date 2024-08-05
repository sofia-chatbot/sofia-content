import { useNavigate } from 'react-router-dom';
import logo from '../assets/navbar/sof_navbar.svg';
import icon from '../assets/chat_header/IconHeader.svg';
import useStore from '../helper/store';
import axios from 'axios';

export default function ChatbotHeader() {
  const navigate = useNavigate();
  const hasPdf = useStore((state) => state.hasPdf);
  const sessionId = useStore((state) => state.sessionId);

  const downloadPFD = () => {
    return axios.get(`https://sofiachat.cl/language-service/download_report/${sessionId}`,
      {
        responseType: "blob",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer xxx'
        }
      }
    ).then(response => {
      // Crear un enlace para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'reporte_sofia.pdf'); // Nombre del archivo a descargar
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  return (
    <header className="bg-[#39377F] fixed z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className='flex justify-between w-full items-center'>
          <div className='flex w-full justify-between items-center'>
            <div className=" flex lg:flex-1 pr-11">
              <a className="-m-1.5 p-1.5 cursor-pointer" onClick={() => navigate('/')}>
                <img src={icon} />
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 pr-11">
              <a className="-m-1.5 p-1.5 cursor-pointer" onClick={() => navigate('/')}>
                <img src={logo} />
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
            </div>
            <button disabled={!hasPdf} onClick={() => downloadPFD()}
              className='border border-[#FFFFDB] rounded-full disabled:text-[#FFFFDB] disabled:bg-transparent px-3 py-2 font-firaMono bg-[#D2D1F0] text-[#39377F] disabled:cursor-not-allowed'
            >Descargar Reporte</button>
          </div>
        </div>
      </nav>
    </header>
  )
}