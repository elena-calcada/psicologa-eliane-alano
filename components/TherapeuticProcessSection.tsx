
"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TherapeuticProcessSection() {
  return (
    <>
      <section className="bg-white" id="therapeutic-process">
        <div className="relative h-full flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/mandala.svg"
            alt=""
            width={625}
            height={625}
            objectFit="contain"
            className="absolute right-[-150px] bottom-[280px] sm:right-[-250px] sm:bottom-0 z-30 opacity-20"
          />
          <div className="container">
            <motion.h2
              className="h2 text-center"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              Quando começar o processo terapêutico?
            </motion.h2>
            <div className="w-full flex flex-col gap-8 items-center justify-center xl:flex-row xl:gap-16">

              <motion.div
                className={"relative w-[334px] h-[257px] md:w-[480px] md:h-[370px]"}
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Image
                  src="/assets/processo-terapeutico.png"
                  layout="fill" objectFit="cover"
                  alt=""
                  className="z-40 absolute rounded-se-[150px] rounded-ss-[25px] rounded-e-[25px] rounded-s-[150px] md:rounded-se-[200px] md:md:rounded-es-[200px]"
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
                  Esta é uma dúvida comum. A decisão de iniciar um processo terapêutico pode surgir em um momento de crise em que a pessoa questiona suas escolhas e o rumo que sua vida está tomando. É um momento em que sintomas físicos e psicológicos podem estar presentes. Estes “sintomas” podem variar desde os menos intensos, uma certa inquietação ou a sensação de que algo está errado até mais intensos como ansiedade, falta de ar, pânico, dores de cabeça frequentes, dores nas costas, tristeza intensa, falta de clareza, falta de ânimo, apatia, falta de desejo etc..
                </p>
                <p className="p">
                  O importante é a constatação de que algo não vai bem e que é necessário obter ajuda profissional. Neste momento é necessário parar e buscar um profissional adequado e que atenda às suas demandas.
                </p>
                <p className="p">
                  É importante ter em mente que a psicoterapia é um espaço seguro onde predomina a ética, a confidencialidade e a escuta sem julgamento.  Decidir fazer terapia é uma decisão importante que envolve  ter um momento para se olhar,  se cuidar e entender que toda a sua vida pode mudar.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}