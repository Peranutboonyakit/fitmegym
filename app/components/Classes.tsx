"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";
import { classesData } from "../constants/constants";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Classes = () => {
  return (
    <div id="class" className="">
      <div className="grid md:grid-cols-2">
        {classesData.map((item, i) => (
          <div
            key={i}
            className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
          >
            <div className="bg-black/50 absolute w-full h-full top-0 z-10" />
            <Image src={item.img} alt="" fill className="object-cover" />
            <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
              <motion.h3
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
                className="h3 text-accent"
              >
                {item.name}
              </motion.h3>
              <motion.p
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
                className="text-white"
              >
                {item.desc}
              </motion.p>
              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
              >
                <CustomButton text="Read more" style="w-[164px] h-[46px]" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
