"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { LuInstagram, LuMapPin, LuPhone } from "react-icons/lu";
import WhatsappButton from "./ButtonWhatsapp";
import { DividerOne } from "./Dividers";

export default function ContactSection() {
  return (
    <>
      <section className="bg-white flex flex-col items-center justify-center" id="contact">
        <div className="container">
          <motion.h2
            className="text-titleColor text-center text-5xl mb-[3rem]"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Contato
          </motion.h2>
          <div className="flex flex-col gap-[2rem] justify-center items-center lg:flex-row lg:gap-16">

            <motion.div
              className={"relative w-[334px] h-[257px] md:w-[480px] md:h-[370px]"}
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src="/assets/contato.jpg"
                layout="fill" objectFit="cover"
                alt=""
                className="z-40 absolute rounded-se-[150px] rounded-ss-[25px] rounded-e-[25px] rounded-s-[150px] md:rounded-se-[200px] md:md:rounded-es-[200px]"
              />
            </motion.div>

            <div className="flex flex-col items-center justify-center lg:items-start">


              <motion.p
                className="p text-center lg:text-start"
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                Entre em contato, tire suas dúvidas e marque uma consulta.
              </motion.p>

              <motion.ul
                className="py-10 flex flex-col gap-5 items-center lg:items-start"
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <li>
                  <Link
                    href="tel:+5527981234893"
                    target="_blank"
                    className=" p flex gap-2"
                  >
                    <LuPhone size={26} className="text-primary" />
                    (27) 9 8123-4893
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.instagram.com/eliane_alano_psicologa'
                    target={'_blank'}
                    className="p flex gap-2"
                  >
                    <LuInstagram size={26} className="text-primary" />
                    @eliane_alano_psicologa
                  </Link>
                </li>
                <li>
                  <Link
                    href='mailto:ealano.psi@hotmail.com'
                    target={'_blank'}
                    className="p flex gap-2"
                  >
                    <AiOutlineMail size={26} className="text-primary" />
                    ealano.psi@hotmail.com
                  </Link>
                </li>
                <li className="p flex gap-2">
                  <LuMapPin size={26} className="text-primary" />
                  <span>Mata da Praia, Vitória/ES</span>
                </li>
              </motion.ul>

              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.05 }}
              >
                <WhatsappButton
                  title="Entrar em contato"
                  containerStyle=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <DividerOne />
    </>
  )
}