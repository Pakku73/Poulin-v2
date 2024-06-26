import { Section } from "@/components";
import Image from "next/image";

export default function CultureRaisonee() {
  return (
    <>
      <Section >

        <div className="flex flex-col justify-center items-center gap-10 max-h-full xl:flex-row">

          <div className="flex flex-col justify-center gap-9">

            <div className="flex flex-col gap-5 font-CoreRinho35">
              <p className="font-CoreRinho75">
              Notre Pépinière pratique la <strong>Culture Raisonnée</strong> pour lutter contre les ravageurs.
              </p>
              <p>
                Voici deux méthodes naturelles utilisées :
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-10 xl:flex-row">
              <div className="flex flex-col justify-center items-center bg-white shadow-md p-5 gap-10 max-w-80 rounded-xl">
                <Image
                  className="relative"
                  src="/assets/images/vectors/Group.png"
                  alt=""
                  width={80}
                  height={100}
                />
                <div className="flex flex-col justify-center items-center text-center">
                  <h2 className="font-CoreRinho75 text-lg">
                    Le paillage
                  </h2>
                  <p className="text-md">
                    “Le paillage” des plantes est un substitut aux produits de traitement.
                    Il a pour but de réduire la consommation d’eau et de limiter le développement d’herbes indésirables. 
                  </p>
                </div>
              </div>


              <div className="flex flex-col justify-center items-center bg-white shadow-md p-4 p-5 gap-10 max-w-80 rounded-xl">
                <Image
                  className="relative"
                  src="/assets/images/vectors/Pousse-rouge.png"
                  alt=""
                  width={80}
                  height={100}
                />
                <div className="flex flex-col justify-center items-center text-center">
                  <h2 className="font-CoreRinho75 text-lg">
                    La Protection Biologique Intégrée (PBI)
                  </h2>
                  <p className="text-md">
                    “La PBI” favorise un environnement permettant aux “auxiliaires du jardin”
                    (ex : coccinelles) de se nourrir de prédateurs (ex : pucerons) afin de protéger les différentes plantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Image
              className="relative"
              src="/assets/images/coccinelle.png"
              alt=""
              width={650}
              height={650}
            />
          </div>

        </div>


      </Section>
    </>
  );
}
