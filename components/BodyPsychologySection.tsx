"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { DividerTwo } from "./Dividers";

export default function BodyPsychologySection() {
  return (
    <>
      <section className="bg-blueColor-backgroundSection flex items-center justify-center" id="body-psychology">
        <div className="container">
          <motion.h2
            className="h2 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            O que é Psicologia Corporal?
          </motion.h2>
          <div className="w-full flex flex-col gap-20 items-center justify-center xl:flex-row-reverse">

            <motion.div
              className={"w-[334px] h-[257px] md:w-[480px] md:h-[370px]"}
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src="/assets/bailarina.svg"
                width={415}
                height={379}
                alt=""
                className="z-40"
              />
            </motion.div>
            <motion.div
              className="z-40 flex flex-col gap-4 lg-xl:w-[80%] xl:w-[55%] xl:mt-10"
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <p className="p">
                A psicologia ao longo de seu desenvolvimento se dividiu em algumas abordagens e cada profissional irá direcionar sua prática clínica de acordo com suas inclinações pessoais.
              </p>
              <p className="p">
                A psicologia corporal acredita que corpo e mente são uma unidade e que funcionam em conjunto. Nesta linha acredita-se que através do trabalho corporal é possível modificar atitudes, crenças e comportamentos.
              </p>
              <p className="p">
                Dentro deste enfoque não apenas a fala tem espaço mas procuramos trazer a consciência para o corpo e suas posturas habituais que podem estar na raiz dos problemas que levaram a pessoa a buscar ajuda.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <DividerTwo />
    </>
  )
}