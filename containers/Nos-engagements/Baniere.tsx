import Image from "next/image";

export default function baniere() {
  return (
      <section className="flex flex-col justify-center items-center w-full">
        <Image
          className="relative w-full"
          src="/assets/images/pots-baniere.png"
          alt=""
          width={100}
          height={100}
        />
      </section>
  );
}