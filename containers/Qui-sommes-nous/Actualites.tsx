import { Button, Section } from "@/components";
import Image from "next/image";

export default function Actualites() {
  return (
    <>
      <Section>

        <div className="flex flex-col justify-center items-center gap-10 mt-10">
            <h1 className="uppercase font-CoreRinho75 text-black text-4xl">LES ACTUALITÉS DU MOMENT</h1>

        
          <div className="flex flex-col justify-center items-center gap-10 mt-10 xl:flex-row">

              <div className="flex flex-col relative justify-center items-center">
                  <Image
                      className="mb-10"
                      src="/assets/images/recettes.png"
                      alt=""
                      width={500}
                      height={100}
                  />
                    <div className="absolute bottom-14">
                    <Button text="LA RECETTE DE JANVIER" variant="whitePinkToGrayWhite" size="lg"/>
                    </div>
              </div>

              <div className="flex flex-col relative justify-center items-center">
                  <Image
                      className="mb-10"
                      src="/assets/images/travaux.png"
                      alt=""
                      width={500}
                      height={100}
                  />
                    <div className="absolute bottom-14">
                    <Button text="LES TRAVAUX DU MOIS DE JANVIER" variant="whitePinkToGrayWhite" size="lg"/>
                    </div>
              </div>

          </div>
        </div>
      </Section>

    </>
  );
}