import { Button, Section } from "@/components";
import Image from "next/image";

export default function Engagement() {
  return (
    <>
      <Section >

        <div className="flex flex-col justify-center items-center gap-10 xl:flex-row">

        <div>
          <Image
            className="relative"
            src="/assets/images/Dame.png"
            alt=""
            width={650}
            height={650}
          />
        </div>

        <div className="flex flex-col justify-center bg-white shadow-md p-10 gap-9 rounded-2xl">
          <h2 className="uppercase font-CoreRinho75 text-4xl">
            Notre engagement <br /> environementale
          </h2>
          <div className="flex items-center gap-10 max-w-xl">
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

          <div className="flex items-center gap-10 max-w-2xl">
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
                produits de traitement. Il a pour but de réduire la consommation
                d’eau et de limiter le développement d’herbes indésirables.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-10 max-w-2xl">
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
                produits de traitement. Il a pour but de réduire la consommation
                d’eau et de limiter le développement d’herbes indésirables.
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
