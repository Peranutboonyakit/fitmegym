"use client";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <div id="contact" className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <div className="text-white grid xl:grid-cols-3 gap-x-8 gap-y-12">
          <div className="flex flex-col gap-4">
            <Image
              src={"/images/logo-gym.png"}
              width={117}
              height={55}
              alt="logo"
              className="rounded-full"
            />
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quae
              cupiditate veritatis quidem ipsa totam!
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Bangkok, Thailand</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>+66 62-525-3890</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-accent" />
                <span>fitme@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="">
            <h4 className="h4 text-accent mb-4">Recent blog posts</h4>
            <div className=" hover:text-accent transition-all border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <h5 className="h5 leading-snug">
                How to stay motivated for all exercise
              </h5>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                August 5, 1995
              </p>
            </div>
            <div className=" hover:text-accent transition-all border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <h5 className="h5 leading-snug">
                How to stay motivated for all exercise
              </h5>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                August 5, 1995
              </p>
            </div>
          </div>

          <div>
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            <div className="flex flex-wrap gap-2">
              <Image
                src="/images/bg-hero.png"
                alt=""
                width={100}
                height={100}
                className=""
              />
              <Image
                src="/images/billie.png"
                alt=""
                width={100}
                height={100}
                className=""
              />
              <Image
                src="/images/john.png"
                alt=""
                width={100}
                height={100}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
