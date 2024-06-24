import clsx from "clsx";
import Image from "next/image";
import { Square as SquareType } from "@/types/square";

export const Square = ({
  text,
  variant = "white",
  image,
  number,
}: SquareType) => {
  const variants: Record<typeof variant, string> = {
    pink: "bg-RoseRed text-white",
    white: "bg-white text-RoseRed",
  };

  const classes = clsx(
    `${variants[variant]} uppercase flex flex-col justify-center items-center p-10 shadow-md text-center gap-2 rounded-lg transition ease-in-out duration-300 w-96`
  );

  return (
    <div className={classes}>
      <Image src={image.src} width={100} height={100} alt={image.alt} />
      <span className="text-4xl">{number}</span>
      <p className="text-sm">{text}</p>
    </div>
  );
};
