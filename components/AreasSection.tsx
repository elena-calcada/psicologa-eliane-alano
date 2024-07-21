"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import Card from "./Card"

export default function AreasSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-blueColor-backgroundSection" id="areas">
      <div className="container">
        <motion.h2
          className="h2 !mb-14 text-center"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Áreas de atuação
        </motion.h2>
        <div className="grid grid-cols-6 gap-6">
          <motion.div
            className="sm-max:col-span-6 sm-lg:col-span-3 lg:col-span-2"
            variants={fadeIn("up", 0.45)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
          >
            <Card
              containerStyle="bg-white"
              area="Depressão"
            />
          </motion.div>
          <motion.div
            className="sm-max:col-span-6 sm-lg:col-span-3 lg:col-span-2"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
          >
            <Card
              containerStyle="bg-white"
              area="Ansiedade"
            />
          </motion.div>
          <motion.div
            className="sm-max:col-span-6 sm-lg:col-span-3 lg:col-span-2"
            variants={fadeIn("up", 0.55)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
          >
            <Card
              containerStyle="bg-white"
              area="Dificuldades com relacionamentos"
            />
          </motion.div>
          <motion.div
            className="sm-max:col-span-6 sm-lg:col-span-3 lg:col-span-2"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
          >
            <Card
              containerStyle="bg-white"
              area="Autoconhecimento"
            />
          </motion.div>
          <motion.div
            className="sm-max:col-span-6 sm-lg:col-span-3 lg:col-span-2"
            variants={fadeIn("up", 0.65)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
          >
            <Card
              containerStyle="bg-white"
              area="Mudanças (separações, fases da vida, de país, de emprego)"
            />
          </motion.div>
          <motion.div
            className="sm-max:col-span-6 sm-lg:col-span-3 lg:col-span-2"
            variants={fadeIn("up", 0.70)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
          >
            <Card
              containerStyle="bg-white"
              area="Falta de sentido na vida"
            />
          </motion.div>
          <motion.div
            className="sm-max:col-span-6 sm-lg:col-span-3 lg:col-span-2"
            variants={fadeIn("up", 0.75)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
          >
            <Card
              containerStyle="bg-white"
              area="Impulsividade"
            />
          </motion.div>
          <motion.div
            className="sm-max:col-span-6 sm-lg:col-span-3 lg:col-span-2"
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
          >
            <Card
              containerStyle="bg-white"
              area="Autoestima"
            />
          </motion.div>
          <motion.div
            className="sm-max:col-span-6 sm-lg:col-span-3 lg:col-span-2"
            variants={fadeIn("up", 0.85)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
          >
            <Card
              containerStyle="bg-white"
              area="Perdas"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}