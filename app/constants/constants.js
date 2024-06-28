import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

export const linksData = [
  { name: "Home", path: "home", offset: -150 },
  { name: "About", path: "about", offset: -80 },
  { name: "Class", path: "class", offset: -80 },
  { name: "Team", path: "team", offset: -80 },
  { name: "Prices", path: "prices", offset: -70 },
  { name: "Contact", path: "contact", offset: 0 },
];

export const featuresData = [
  {
    icon: <FaUsers />,
    title: "trainers",
    subtitle:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem officiis amet nobis magni doloremque vero quis dolores dignissimos.",
  },
  {
    icon: <IoIosPricetag />,
    title: "excellent prices",
    subtitle:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem officiis amet nobis magni doloremque vero quis dolores dignissimos.",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem officiis amet nobis magni doloremque vero quis dolores dignissimos.",
  },
];

export const statData = [
  { number: 19, icon: <FaBriefcase />, text: "training courses" },
  { number: 980, icon: <FaClock />, text: "working hours" },
  { number: 750, icon: <ImUsers />, text: "customers" },
  { number: 400, icon: <FaTrophy />, text: "international awards" },
];

export const classesData = [
  {
    name: "body building",
    img: "/images/class1.png",
    desc: "Lorem ipsum dolor sit, consectetur adipisicing elit. Dolorem officiis amet nobis magni doloremque vero",
  },
  {
    name: "cardio",
    img: "/images/class2.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem officiis amet nobis ma",
  },
  {
    name: "fitness",
    img: "/images/class3.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem officiis amet nobis.",
  },
  {
    name: "crossfit",
    img: "/images/class4.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem off.",
  },
];

export const trainerData = [
  {
    name: "Johnny Dev",
    img: "/images/johnny.png",
    role: "Body builder",
  },
  {
    name: "Magal Garot",
    img: "/images/magal.png",
    role: "Body builder",
  },
  {
    name: "Matthew Stonecold",
    img: "/images/matthew.png",
    role: "Body builder",
  },
  {
    name: "Sara Kavren",
    img: "/images/sara.png",
    role: "Body builder",
  },
  {
    name: "John Stewer",
    img: "/images/john.png",
    role: "Body builder",
  },
  {
    name: "Billie English",
    img: "/images/billie.png",
    role: "Body builder",
  },
];

export const membershipData = [
  {
    title: "Standard",
    price: 30,
    benefits: [
      {
        icon: <FaCheck />,
        text: "Includes membership",
      },
      {
        icon: <FaCheck />,
        text: "Access to all gym facilities",
      },
      {
        icon: <FaCheck />,
        text: "Access to all gym facilities",
      },
      {
        icon: <FaCheck />,
        text: "Health and fitness tips",
      },
      {
        icon: <FaCheck />,
        text: "Full access to everything",
      },
      {
        icon: <MdClose />,
        text: "Diet plan included",
      },
      {
        icon: <MdClose />,
        text: "Monday-Friday gym access",
      },
      {
        icon: <MdClose />,
        text: "Amenities",
      },
    ],
  },
  {
    title: "Ultimate",
    price: 50,
    benefits: [
      {
        icon: <FaCheck />,
        text: "Includes membership",
      },
      {
        icon: <FaCheck />,
        text: "Access to all gym facilities",
      },
      {
        icon: <FaCheck />,
        text: "Access to all gym facilities",
      },
      {
        icon: <FaCheck />,
        text: "Health and fitness tips",
      },
      {
        icon: <FaCheck />,
        text: "Full access to everything",
      },
      {
        icon: <FaCheck />,
        text: "Diet plan included",
      },
      {
        icon: <FaCheck />,
        text: "Monday-Friday gym access",
      },
      {
        icon: <FaCheck />,
        text: "Amenities",
      },
    ],
  },
];

export const testimonial = [
  {
    img: "/images/lewis.png",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eius",
    name: "Lewis Hamilton",
  },
  {
    img: "/images/max.png",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eius delectus et minus.",
    name: "Max Versteppen",
  },
  {
    img: "/images/sianz.png",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eius delec.",
    name: "Carlos Sianz",
  },
];
