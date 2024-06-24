import Image from "next/image";

export default function Herobanner() {
    return (
      <>
        <Image
          className="shadow-md h-full w-full"
          src="/assets/images/NosPlantesHeader.jpg"
          alt=""
          width={2000}
          height={800}
        />
      </>
    );
};