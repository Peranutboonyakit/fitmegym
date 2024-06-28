const CustomButton = ({ text, style }: { text: string; style: string }) => {
  return (
    <button
      className={`${style} group relative overflow-hidden bg-accent uppercase rounded-[50px]`}
    >
      <span
        className="ease-in-out absolute top-1/2 h-0 w-64 -translate-x-20
      rotate-45 bg-black/85 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"
      ></span>
      <span className="ease-in-out relative text-white transition duration-300 group-hover:text-accent">
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
