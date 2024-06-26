import { Button, Section } from "@/components";
import Image from "next/image";

export default function Metiers() {
  return (
    <>
      <Section>

        <div className="flex flex-col justify-center items-center gap-10 mt-10">
            <h1 className="uppercase font-CoreRinho75 text-black text-4xl">NOS MÉTIERS</h1>

        
          <div className="flex flex-col justify-center items-center gap-10 mt-10 xl:flex-row xl:gap-5">

              <div className="flex flex-col justify-center items-center">
                  <Image
                      className="mb-10"
                      src="/assets/images/metiers/Rempotage.png"
                      alt=""
                      width={250}
                      height={100}
                  />
                  <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-md max-w-60 p-5 text-center">
                      <h2 className="uppercase text-RoseRed text-xl font-CoreRinho75">REMPOTAGE</h2>
                      <p className="text-sm">Le rempotage de chaque plante, en utilisant des contenants et des substrats adaptés, pour garantir leur santé et leur succès.</p>
                  </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                  <Image
                      className="mb-10"
                      src="/assets/images/metiers/arrosage.png"
                      alt=""
                      width={250}
                      height={100}
                  />
                  <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-md max-w-60 p-5 text-center">
                      <h2 className="uppercase text-RoseRed text-xl font-CoreRinho75">ARROSAGE</h2>
                      <p className="text-sm">Chaque plante reçoit un arrosage attentif et personnalisé, assurant leur santé et leur qualité.</p>
                  </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                  <Image
                      className="mb-10"
                      src="/assets/images/metiers/taille.png"
                      alt=""
                      width={250}
                      height={100}
                  />
                  <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-md max-w-60 p-5 text-center">
                      <h2 className="uppercase text-RoseRed text-xl font-CoreRinho75">TAILLE</h2>
                      <p className="text-sm">Nos plantes sont taillées avec précision pour favoriser leur croissance et leur forme optimales.</p>
                  </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                  <Image
                      className="mb-10"
                      src="/assets/images/metiers/commandes.png"
                      alt=""
                      width={250}
                      height={100}
                  />
                  <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-md max-w-60 p-5 text-center">
                      <h2 className="uppercase text-RoseRed text-xl font-CoreRinho75">COMMANDES</h2>
                      <p className="text-sm">Vos commandes sont préparées avec soin, prêtes à transformer vos projets paysagers en réalisations exceptionnelles.</p>
                  </div>
              </div>
          </div>
          <Button text="Commander en ligne" />
        </div>
      </Section>

    </>
  );
}