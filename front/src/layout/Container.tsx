import background from '../assets/home/Fondo_1.png'

export default function Container({ children }: any) {
  return (
    <>
      <div
        className="
        mt-[-2px]
        mb-[-2px]
      flex 
      flex-col
      w-full
      bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}
      >
        {children}
      </div>
    </>
  )
}
