"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../constants/variants";
import { trainerData } from "../constants/constants";
import Image from "next/image";

const Team = () => {
  const trainerContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5, ease: "linear" },
    },
  };
  const trainerItems = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.6, 0.3, 0.8] },
    },
  };

  return (
    <div id="team" className="pt-12 h-full">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2, once: true }}
          className="h2 text-accent mb-6"
        >
          Our trainers
        </motion.h2>
        <motion.div
          variants={trainerContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3, once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-12 mb-12"
        >
          {trainerData.map((item, i) => (
            <motion.div variants={trainerItems} key={i} className="">
              <div className="relative w-[350px] h-[450px] rounded-[50px] overflow-hidden mx-auto mb-4 shadow-2xl">
                <Image src={item.img} alt="" fill className="object-cover" />
              </div>
              <h5 className="h5">{item.name}</h5>
              <p className="uppercase text-xs tracking-[3px]">{item.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
