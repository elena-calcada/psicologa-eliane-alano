import Image from "next/image";

interface Props {
  containerStyle: string;
  area: string;
}

const Card = ({ containerStyle, area }: Props) => {
  return (
    <div className={`${containerStyle} mx-auto relative flex items-center justify-center min-w-[300px] max-w-[320px] h-[212px] rounded-[0.5rem] p-[15px] shadow-xl rounded-se-[25px] rounded-ss-[120px] rounded-e-[120px] rounded-s-[25px] border-b-8 border-b-primary`}>
      <Image
        src={'/assets/mandala.svg'}
        alt="Borboleta como imagem de fundo"
        width={168}
        height={149}
        className="absolute mx-auto my-auto inset-0 opacity-20 z-30"
      />
      <h3 className="h3 text-titleColor z-40 max-w-[270px] text-center">{area}</h3>
    </div>
  )
}

export default Card