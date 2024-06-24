import { Section } from "@/components";
import Image from "next/image";

export default function Engagement() {
  return (
    <>
      <Section >

        <div className="flex flex-col justify-center items-center gap-10 max-h-full xl:flex-row">

          <div>
            <Image
              className="relative"
              src="/assets/images/Dame.png"
              alt=""
              width={650}
              height={650}
            />
          </div>

          <div className="flex flex-col justify-center max-w-3xl p-10 gap-9">
            <h2 className="uppercase font-CoreRinho75 text-4xl">
              Notre engagement <br /> environementale
            </h2>

            <div className="flex flex-col gap-5 font-CoreRinho35">
              <p className="font-CoreRinho75">
                <strong>Nous gérons l’arrosage pour éviter le gaspillage de l’eau !</strong>
              </p>
              <p>
                Notre station météo mesure la vitesse du vent, les températures et l’ensoleillement. 
                Toutes ces informations nous permettent d’utiliser différents systèmes d’arrosage pour 
                connaître la quantité d’eau nécessaire pour nos plantes, et pour limiter les apports au 
                plus juste des besoins.
              </p>
              <p>
                Afin d’alimenter nos plantes, nous utilisons <strong>2 systèmes d’arrosage</strong> différents :
              </p>
            </div>

            <div className="flex justify-center items-center gap-10">
              <div className="flex flex-col justify-center items-center bg-white shadow-md p-5 gap-10 max-w-80 rounded-xl">
                <Image
                  className="relative"
                  src="/assets/images/vectors/capilaire.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="flex flex-col justify-center items-center text-center">
                  <h2 className="font-CoreRinho75 text-lg">
                  Le capillaire
                  </h2>
                  <p className="text-md">
                    “Le capillaire” correspond à un système de goutte-à-goutte localisé selon les besoins de la plante dans chaque pot.
                    Il permet d’éviter la perte d’eau.
                  </p>
                </div>
              </div>


              <div className="flex flex-col justify-center items-center bg-white shadow-md p-4 p-5 gap-10 max-w-80 rounded-xl">
                <Image
                  className="relative"
                  src="/assets/images/vectors/aspertion.png"
                  alt=""
                  width={95}
                  height={100}
                />
                <div className="flex flex-col justify-center items-center text-center">
                  <h2 className="font-CoreRinho75 text-lg">
                    L’aspersion
                  </h2>
                  <p className="text-md">
                    “L’aspersion” produit une pluie très fine. Cette technique permet de recréer un milieu humide favorable à la croissance des végétaux.
                  </p>
                </div>
              </div>
            </div>
        </div>
          
        </div>


      </Section>
    </>
  );
}