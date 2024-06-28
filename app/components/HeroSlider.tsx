"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { motion } from "framer-motion";

import CustomButton from "./CustomButton";
import { fadeIn } from "../constants/variants";

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-start pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
              className="h1 text-center lg:text-left mb-4"
            >
              <span>Where hard</span> work meets success
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
              className="text-white italic text-center lg:text-left mb-4"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              nihil repellendus aliquid nisi labore nam corrupti enim temporibus
              sunt adipisci.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
            >
              <CustomButton text="Get started" style="w-[196px] h-[62px]" />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
