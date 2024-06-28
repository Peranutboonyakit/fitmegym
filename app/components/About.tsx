"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { fadeIn } from "../constants/variants";
import { featuresData, statData } from "../constants/constants";
import CountUp from "react-countup";

const About = () => {
  const ref = useRef(null);
  const isView = useInView(ref);
  const statContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5, ease: "linear" },
    },
  };
  const statItems = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.6, 0.3, 0.8] },
    },
  };

  return (
    <div id="about" className="pt-8 pb-14 lg:pt-16 lg:pb-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="h2 text-center">About us</h2>
          <p className="max-w-[600px] mx-auto text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            maxime et ex voluptate in sapiente unde architecto itaque assumenda
            laboriosam quae tempore eveniet possimus facilis eaque beatae,
          </p>
        </div>

        {/* feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
          {featuresData.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center gap-4 border p-10"
            >
              <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                {feature.icon}
              </div>
              <div className="flex flex-col justify-center items-center gap-2 text-center">
                <h4 className="h4 text-accent">{feature.title}</h4>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* achievement */}
        <div className="">
          <div className="container mx-auto">
            <motion.div
              variants={statContainerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3, once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4"
            >
              {statData.map((stat, i) => (
                <motion.div variants={statItems} key={i}>
                  <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                    <div
                      ref={ref}
                      className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full"
                    >
                      {isView && (
                        <CountUp start={0} end={stat.number} duration={6} />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <h4 className="h4">{stat.text}</h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
