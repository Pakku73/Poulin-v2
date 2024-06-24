import Image from "next/image";
import { Section } from "./Section";

export default function Experts() {
  return (
      <Section>
        <div className="flex flex-col justify-center items-center gap-14 p-10">

        <h2 className="uppercase font-CoreRinho75 text-4xl">
          Nos experts à votre disposition
        </h2>

        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex flex-col justify-center items-center relative">
            <Image src="/assets/images/Monsieur.png" width={700} height={100} alt="" />

            <div className="flex absolute bg-white py-6 px-10 bottom-8 rounded-xl gap-14">
              <div className="flex flex-col">
                <h2 className="uppercase font-CoreRinho75 text-RoseRed text-2xl">
                  Olivier le cloitre
                </h2>
                <p className="font-CoreRinho35 max-w-sm">
                  Responsable des achats & des ventes jardineries
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  className="relative"
                  src="/assets/images/icons/Phone-red.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <Image
                  className="relative"
                  src="/assets/images/icons/Mail-red.png"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center relative">
            <Image
              className="relative"
              src="/assets/images/Madame.png"
              alt=""
              width={700}
              height={100}
            />

            <div className="flex absolute bg-white py-6 px-10 bottom-8 rounded-xl gap-14">
              <div className="flex flex-col">
                <h2 className="uppercase font-CoreRinho75 text-RoseRed text-2xl">
                  Delphine Dessemme
                </h2>
                <p className="font-CoreRinho35 max-w-80">
                  Responsable des ventes aux professionnels du paysage
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  className="relative"
                  src="/assets/images/icons/Phone-red.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <Image
                  className="relative"
                  src="/assets/images/icons/Mail-red.png"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>

        <button className="uppercase bg-RoseRed font-CoreRinho75 text-white text-xl py-2 px-10 rounded-lg transition ease-in-out duration-300 hover:bg-NewGrey">
          Découvrez l'équipe
        </button>

        </div>

      </Section>
  );
}
