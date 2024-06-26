import { Button, Section } from "@/components";
import Image from "next/image";

export default function Engagement() {
  return (
    <>
      <Section>
        <div className="flex flex-col justify-center gap-10 xl:flex-row">
          <div className="relative w-1/2 h-auto ">
            <Image
              className="w-full h-full"
              src="/assets/images/Dame.png"
              alt=""
              sizes="100vw"
              fill
              width={0}
              height={0}
            />
          </div>

          <div className="flex flex-col flex-1 justify-center items-center bg-white shadow-md p-10 gap-9 rounded-2xl xl:items-start">
            <h2 className="uppercase font-CoreRinho75 text-2xl xl:text-4xl">
              Notre engagement <br /> environementale
            </h2>
            <div className="flex flex-col items-center gap-10 max-w-xl xl:flex-row">
              <Image
                className="relative"
                src="/assets/images/vectors/Group-42.png"
                alt=""
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h2 className="font-CoreRinho75 text-2xl">
                  LA PBI (Protection biologique intégée)
                </h2>
                <p className="text-lg">
                  Elle favorise un environnement permettant aux “auxiliaires du
                  jardin” (ex : coccinelles) de se nourrir de prédateurs (ex :
                  pucerons) afin de protéger les différentes plantes.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 max-w-xl xl:flex-row">
              <Image
                className="relative"
                src="/assets/images/vectors/Group.png"
                alt=""
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h2 className="font-CoreRinho75 text-2xl">Le paillage</h2>
                <p className="text-lg">
                  Le paillage “Le paillage” des plantes est un substitut aux
                  produits de traitement. Il a pour but de réduire la
                  consommation d’eau et de limiter le développement d’herbes
                  indésirables.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 max-w-xl xl:flex-row">
              <Image
                className="object-center"
                src="/assets/images/vectors/Group(1).png"
                alt=""
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h2 className="font-CoreRinho75 text-2xl">Le paillage</h2>
                <p className="text-lg">
                  Le paillage “Le paillage” des plantes est un substitut aux
                  produits de traitement. Il a pour but de réduire la
                  consommation d’eau et de limiter le développement d’herbes
                  indésirables.
                </p>
              </div>
            </div>
            <Button text="Plus d'informations" size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}
