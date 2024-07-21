import Image from "next/image"
import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa"
import { LuInstagram, LuPhone } from "react-icons/lu"

const Footer = () => {
  return (
    <footer className="w-full bg-blueColor-backgroundFooter">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:max-w-[800px]">
        <Link href='/'>
          <Image src={'/assets/logofooter.png'} width={305} height={192} alt="Logo da Psicóloga Eliane Alano" />
        </Link>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-poppins text-center">
              Localização
            </h3>
            <div className="flex flex-col gap-1 justify-center items-center">
              <span className="p">Mata da Praia, Vitória / ES</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-poppins text-center">
              Vamos conversar
            </h3>

            <div className="flex flex-col gap-1 justify-center items-center">
              <span className="p">Telefone: (27) 9 8123-4893 </span>
            </div>

            <ul className="flex items-center justify-center gap-6">
              <li>
                <Link
                  href="tel:+5527981234893"
                  target="_blank"
                  className=" p flex gap-2"
                >
                  <LuPhone size={26} className="text-primary" />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.instagram.com/eliane_alano_psicologa'
                  target={'_blank'}
                  className="p flex gap-2"
                >
                  <LuInstagram size={26} className="text-primary" />
                </Link>
              </li>
              <li>
                <Link
                  href='mailto:ealano.psi@hotmail.com'
                  target={'_blank'}
                  className="p flex gap-2"
                >
                  <AiOutlineMail size={26} className="text-primary" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5527981234893?text=Olá,%20Eliane!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20marcar%20uma%20consulta."
                  target="_blank"
                  className="p flex gap-2"
                >
                  <FaWhatsapp size={26} className="text-primary" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary">
        <div className="w-full mx-auto px-[15px] md:px-[24px] lg:px-[48px] flex flex-col items-center justify-center py-2 lg:flex-row lg:justify-between lg:max-w-[1400px]">
          <span
            className="font-dm_sans text-white"
          >
            {new Date().getFullYear()} &copy; Eliane Alano Pereira
          </span>
          <span className="font-dm_sans text-white"
          >
            Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer