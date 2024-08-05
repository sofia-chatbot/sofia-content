import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/navbar/sof_navbar.svg';

const navigation = [
  { name: '¿Qué es Sof .IA?', href: '/about' },
  { name: 'Datos*', href: '/data' },
  { name: 'Sobre VDG', href: '/vdg' },
  { name: 'Autocuidado digital', href: '/autocuidado' },
  { name: 'Equipo', href:'/team' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate();

  return (
    <header className="bg-[#39377F] fixed z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className='flex justify-between w-full items-center'>
          <div className='flex'>

            <div className="flex lg:flex-1 pr-11">
              <a className="-m-1.5 p-1.5" onClick={() => navigate('/')}>
                <img src={logo} />
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} onClick={() => navigate(`${item.href}`)} className="leading-6 text-[#FFF9CF] hover:text-[#CFC8E9] font-firaMono cursor-pointer">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <button onClick={() => navigate('/chatbot')} className='border border-[#FFFFDB] rounded-full text-[#FFFFDB] px-3 py-2 font-firaMono'>Conversar con Sof.IA</button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-[#FFF9CF]" aria-hidden="true" />
          </button>
        </div>
      </nav>
      {/* mobile */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#19122A] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a onClick={() => { navigate('/'); setMobileMenuOpen(false) }} className="-m-1.5 p-1.5">
              <img src={logo} />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-[#FFF9CF]" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={() => { navigate(`${item.href}`); setMobileMenuOpen(false) }}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#FFF9CF] hover:bg-[#CFC8E9] font-firaMono"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}