
"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { DividerOne } from "./Dividers";

export default function AboultSection() {
  return (
    <>
      <section className="bg-white" id="aboult">
        <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
          <Image
            src="/assets/mandala.svg"
            alt=""
            width={625}
            height={625}
            className="absolute left-[-150px] bottom-[120px] sm:left-[-250px] sm:bottom-0 z-30 opacity-20"
          />
          <div className="container">
            <motion.h2
              className="h2 text-center"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              Sobre mim
            </motion.h2>
            <div className="w-full flex flex-col gap-8 items-center justify-center xl:flex-row-reverse xl:gap-16">

              <motion.div
                className={"relative w-[334px] h-[257px] md:w-[480px] md:h-[370px]"}
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Image
                  src="/assets/sobre.jpeg"
                  layout="fill" objectFit="cover"
                  alt=""
                  className="z-40 shadow-xl absolute rounded-se-[25px] rounded-ss-[150px] rounded-e-[150px] md:rounded-ss-[200px] md:rounded-ee-[200px] rounded-s-[25px]"
                />
              </motion.div>
              <motion.div
                className="z-40 flex flex-col gap-4 lg-xl:w-[80%] xl:w-[55%]"
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.05 }}
              >
                <p className="p">
                  Olá, meu nome é Eliane Alano, sou psicóloga formada pela UFES. Meu trabalho é orientado pela psicologia corporal tendo realizado o curso de Bioenergética no IABSP e iniciado a formação em Psicologia Formativa. A psicologia é a muitos anos meu campo de estudos, em especial a psicologia corporal que acredito ser a mais adequada para tratar a maior parte das dores psicológicas.
                </p>
                <p className="p">
                  Minha paixão pela psicologia e a vontade de entender e orientar as pessoas na sua busca de uma vida melhor e com mais sentido me levaram a descobrir a psicologia corporal. Passei também por um longo processo terapêutico pessoal  que considero fundamental na formação de um psicólogo.
                </p>
                <p className="p">
                  Atualmente realizo atendimento presencial  de adultos em qualquer fase da vida na cidade de Vitória -ES e também on line.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <DividerOne />
    </>
  )
}