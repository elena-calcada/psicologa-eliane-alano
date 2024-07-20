"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import WhatsappButton from "./ButtonWhatsapp";

export default function HomeSection() {
  return (
    <section className="w-full h-[100vh] flex flex-col items-center justify-center bg-home-mobile bg-cover bg-center bg-no-repeat lg:bg-home-desktop" id="home">
      <div className="container w-full h-[65vh] flex flex-col items-center justify-center gap-8 lg:items-start lg:justify-start 2xl:h-[50vh]">
        <motion.h1
          className="h1 text-center !text-white !font-semibold xs:!text-7xl xl:text-[128px] lg:text-start"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Eliane Alano
        </motion.h1>
        <motion.p
          className="p text-center !text-white !text-xl !font-medium max-w-[500px] xs:max-w-[400px] lg:max-w-[700px] lg:!text-2xl lg:text-start"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Psicóloga Clínica com foco em Psicologia Corporal, em Vitória/ES -  CRP 16/4752
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <WhatsappButton
            title="Entrar em contato"
            containerStyle=""
          />
        </motion.div>
      </div>
    </section>
  )
}