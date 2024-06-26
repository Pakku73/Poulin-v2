import Image from "next/image";
import { Section } from "./Section";
import { Button } from "./Button";

export default function Experts() {
  return (
      <Section>
        <div className="flex flex-col justify-center items-center gap-14">

        <h2 className="flex justify-center uppercase font-CoreRinho75 text-xl xl:text-4xl">
          Nos experts à votre disposition
        </h2>

        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex flex-col justify-center items-center relative">
            <Image src="/assets/images/Monsieur.png" width={700} height={100} alt="" />

            <div className="flex flex-col bg-white  bottom-8 rounded-xl gap-2 xl:gap-14 xl:flex-row xl:absolute xl:py-6 xl:px-10">
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

            <div className="flex flex-col bg-white  bottom-8 rounded-xl gap-2 xl:gap-14 xl:flex-row xl:absolute xl:py-6 xl:px-10">
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

        {/* <button className="flex justify-center uppercase bg-RoseRed font-CoreRinho75 text-white text-xl py-2 px-10 rounded-lg transition ease-in-out duration-300 hover:bg-NewGrey">
          Découvrez l'équipe
        </button> */}
        <Button text="Commander en ligne" size="lg" />

        </div>

      </Section>
  );
}
