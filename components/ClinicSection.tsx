
"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import ClinicSlider from "./ClinicSlider"
import { DividerTwo } from "./Dividers"

export default function ClinicSection() {
  return (
    <>
      <section className="bg-blueColor-backgroundSection flex items-center justify-center" id="clinic">
        <div className="container flex flex-col items-center justify-center">
          <motion.h2
            className="h2 !mb-10 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Consultório
          </motion.h2>

          <motion.p
            className="p text-center mb-8 max-w-[500px]"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Localizado no bairro Mata da Praia em Vitória – ES dispõe de total acessibilidade, conforto, privacidade e segurança.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[381px] xl:max-w-[800px]"
          >
            <ClinicSlider />
          </motion.div>
        </div>
      </section>
      <DividerTwo />
    </>
  )
}