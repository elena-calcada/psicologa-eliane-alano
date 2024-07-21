"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { DividerOne } from "./Dividers";

export default function BraziliansAbroadSection() {
  return (
    <>
      <section className="bg-white" id="brazilians-abroad">
        <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
          <Image
            src="/assets/mandala.svg"
            alt=""
            width={625}
            height={625}
            className="absolute left-[-150px] bottom-[230px] sm:left-[-250px] sm:bottom-0 z-30 opacity-20"
          />
          <div className="container">
            <motion.h2
              className="h2 text-center"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              Brasileiros no Exterior
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
                  src="/assets/brasileiros-no-exterior.png"
                  layout="fill" objectFit="cover"
                  alt=""
                  className="z-40 absolute rounded-se-[25px] rounded-ss-[150px] rounded-e-[150px] md:rounded-ss-[200px] md:rounded-ee-[200px] rounded-s-[25px]"
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
                  Muitas pessoas que sairam  de seu país de origem vivem um dos maiores desafios que pode enfrentar um ser humano. Além do stress de ter que se adaptar a condições de vida estranhas, língua, costumes e clima, esta tensão pode ter  como agravante a saudade da terra natal e do que é conhecido.  Esta saudade vem da segurança que nos proporciona o que é conhecido, a segurança de conhecer o terreno onde está pisando.  O apoio psicoterápico com um profissional que fale sua língua nativa,  pode ser fundamental para que a adaptação ao país estrangeiro possa ser mais tranquila.
                </p>
                <p className="p">
                  Ao enfrentar uma situação nova e desafiadora podemos ter a necessidade de formar um novo corpo que consiga fazer frente a estas diferenças que vamos encontrar no país onde escolhemos viver. Levar consciência para este corpo que estamos formando e direcionar este formar de maneira que esta experiência seja mais leve, alegre e segura  é o trabalho que a psicologia corporal pode ajudar você a realizar.
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