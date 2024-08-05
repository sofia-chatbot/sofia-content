import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Container from "../layout/Container";
import user from '../assets/chatbot/usuario.svg';
import bot from '../assets/chatbot/bot.svg';
import button from '../assets/chatbot/button.svg';
import Loader from "../components/Loader";
import TextParser from "../helper/ParserToHtml";
import ChatbotHeader from "../components/ChatbotHeader";
import useStore from "../helper/store";

export default function ChatbotPage() {

  const [messages, setMessages] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [sessionId, setSessionId] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setHasPdf = useStore((state) => state.setHasPdf);
  const setSessionIdGoblal = useStore((state) => state.setSessionIdGoblal);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const sessionExist = sessionStorage.getItem('sessionId');
    if (sessionExist) {
      setSessionId(sessionExist);
      setSessionIdGoblal(sessionExist);
    } else {
      welcome();
    }
  }, []);

  const welcome = async () => {
    try {
      const response = await axios.get('https://sofiachat.cl/language-service/chat/welcome',
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer xxx'
          }
        });

      const data = response.data;
      setMessages(prevMessages => [...prevMessages, data]);

    } catch (error) {
      console.log(error);
    }
  }

  const sendMessage = async (message: string) => {
    try {
      setIsLoading(true);

      setMessages(prevMessages => [...prevMessages, { userText: message }]);

      const response = await axios.post('https://sofiachat.cl/language-service/chat/', {
        session_id: `${sessionId}`,
        text: message,
        type: 'message'
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer xxx'
        }
      });

      const data = response.data;
      setIsLoading(false);
      if (sessionId === '') {
        setSessionId(response.data.session_id);
        setSessionIdGoblal(response.data.session_id);
        sessionStorage.setItem('sessionId', response.data.session_id);
      }

      if(response.data.has_pdf) {
        setHasPdf(true);
      }

      setMessages(prevMessages => [...prevMessages, data]);

    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const sendButtonOption = async (message: string) => {
    try {
      setIsLoading(true);

      const response = await axios.post('https://sofiachat.cl/language-service/chat/', {
        session_id: `${sessionId}`,
        text: message,
        type: 'button'
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer xxx'
        }
      });

      const data = response.data;
      
      if(response.data.has_pdf) {
        setHasPdf(true);
      }

      setIsLoading(false);

      setMessages(prevMessages => [...prevMessages, data]);

    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

  const handleButtonClick = (buttonName: string) => {
    sendButtonOption(buttonName);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(event.target.value);
    autoGrow(event.target);
  };

  const handleSendButtonClick = () => {
    sendMessage(inputMessage);
    setInputMessage('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSendButtonClick();
      event.preventDefault();
    }
  };

  const autoGrow = (element: HTMLTextAreaElement) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, [inputMessage]);

  return (
    <>
      <ChatbotHeader />
      <Container>
        <div className="flex flex-col justify-end items-center min-h-[calc(100vh--2px)] w-full pt-24 pb-10">
          <div className="w-full max-w-[850px]">
            <div className='chat pr-[30px]'>
              <ul>
                {messages.map((message, index) => (
                  <li key={index} >
                    {message.userText && (
                      <div className="flex w-full justify-end relative">
                        <div className="bg-[#D1CEED] rounded-s-[1.2rem] rounded-br-[1.2rem] py-3 px-5 my-5 font-firaMono text-[#39377F] text-[17px] max-w-[70%] font-medium mr-12">
                          {message.userText}
                        </div>
                        <img src={user} className="absolute  top-0"/>
                      </div>
                    )}
                    {message.text && (
                      <div className="flex items-start">
                        <img src={bot} />
                        <div className="ml-[10px] bg-[#FFFFDB] rounded-r-[1.2rem] rounded-bl-[1.2rem] py-3 px-5 my-5 text-[#474717] text-[17px] font-medium font-firaMono max-w-[70%]">
                          <TextParser text={message.text} />
                        </div>
                      </div>
                    )}
                    {/* Buttons */}
                    <div className="flex flex-col max-w-[70%] ml-[3.25rem]">
                      {message.buttons && message.buttons.map((button: any, index: number) => (
                        <div key={index} className="w-full">
                          <button key={index} onClick={() => handleButtonClick(button.name)}
                            className='w-full border-2 border-[#FFFFDB] text-[#FFFFDB] text-xs font-firaMono rounded-2xl my-2 font-bold p-4 text-left text-[15px]'
                          >
                            {button.text}
                          </button>
                        </div>
                      ))}
                    </div>
                    {message.videos && message.videos.map((video: any, index: number) => (
                      <div key={index}>
                        <p>{video.name}</p>
                        <video controls>
                          <source src={video.url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))}
                    {message.images && message.images.map((image: any, index: number) => (
                      <div key={index} className='pb-2'>
                        <p>{image.name}</p>
                        <img src={image.url} alt={image.name} />
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full pb-5 pt-2 flex justify-center">
              {isLoading && (<Loader />)}
            </div>
            <div className='send w-full flex justify-between items-center px-4 py-2 border-2 border-[#D1CEED] rounded-3xl'>
              <textarea
                placeholder="Pregunta aquí..."
                onKeyDown={handleKeyPress}
                value={inputMessage}
                onChange={handleInputChange}
                className='w-full py-1 px-3 bg-transparent focus:outline-none font-firaMono placeholder:text-[#8B88AA] text-[#D1CEED] resize-none overflow-hidden'
                rows={1}
              />
              <img src={button} onClick={handleSendButtonClick} className="cursor-pointer" />
            </div>
            <div className="pt-2" ref={messagesEndRef}></div>
          </div>
        </div>
      </Container>
    </>
  )
}