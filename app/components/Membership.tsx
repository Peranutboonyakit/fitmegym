"use client";

import { motion } from "framer-motion";
import { membershipData } from "../constants/constants";
import CustomButton from "./CustomButton";

const Membership = () => {
  const memberContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5, ease: "linear" },
    },
  };
  const memberItems = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.6, 0.3, 0.8] },
    },
  };

  return (
    <div
      id="prices"
      className="py-8 bg-membership bg-cover bg-center relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10"
    >
      <div className="container mx-auto px-0 h-full flex flex-col relative z-20">
        <h2 className="h2 text-accent mb-8 text-center">Membership</h2>
        <div className="h-full">
          <div className="grid lg:grid-cols-2 gap-4 place-items-center">
            {membershipData.map((v, i) => (
              <div
                key={i}
                className="text-white min-h-[450px] w-full max-w-md
                 border border-accent hover:bg-primary-300/90 
                 transition-all duration-300 flex flex-col items-center py-5"
              >
                <div className="">
                  <h4 className="h4">{v.title}</h4>
                </div>
                <div className="py-[30px] px-[60px]">
                  <motion.ul
                    variants={memberContainerVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.6 }}
                    className="flex flex-col gap-5 mb-7"
                  >
                    {v.benefits.map((item, ii) => (
                      <motion.li
                        variants={memberItems}
                        key={ii}
                        className="flex items-center gap-2"
                      >
                        <div className="text-accent text-lg">{item.icon}</div>
                        {item.text}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="text-accent mb-8 flex gap-1 items-center">
                    <strong className="text-6xl">{`$ ${v.price}`}</strong>
                    <em className="self-end text-2xl">/month</em>
                  </div>
                  <CustomButton text="Buy now" style="w-[196px] h-[62px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
