import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

interface Props {
  containerStyles: string;
  onClickCloseNav: () => void
}

const SocialNav = ({ containerStyles, onClickCloseNav }: Props) => {
  return (
    <div className={`${containerStyles} gap-8`}>
      <motion.div
        className="shadow-lg py-2 px-4 rounded-lg shadow-gray-400 bg-blueColor-buttonColor text-white flex items-center justify-center"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          legacyBehavior
          href="https://wa.me/5527981234893?text=Olá,%20Eliane!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20marcar%20uma%20consulta."
        >
          <a target="_blank" onClick={onClickCloseNav}>
            Agendar
          </a>
        </Link>
      </motion.div>
      <motion.div
        className="flex items-center justify-center shadow-lg p-2 rounded-full shadow-gray-400"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          legacyBehavior
          href="https://www.instagram.com/eliane_alano_psicologa"
          className="text-primary"
        >
          <a target="_blank" onClick={onClickCloseNav}>
            <FaInstagram className="h-8 w-8 text-primary" />
          </a>
        </Link>
      </motion.div>
    </div>
  )
}
export default SocialNav