import { Section } from "@/components";
import Image from "next/image";

export default function Histoire() {
  return (
    <>
      <Section>

        <div className="flex flex-col justify-center items-center gap-5 mt-10">
            <h2 className="uppercase font-CoreRinho35 text-RoseRed text-lg">PÉPINIÈRE POULLAIN</h2>
            <h1 className="uppercase font-CoreRinho75 text-black text-4xl">NOTRE HISTOIRE</h1>
            <p>Nos plantes sont élevées par les soins de 20 collaborateurs passionnés !</p>

            <Image
                className=" mt-10"
                src="/assets/images/vectors/chronobar.png"
                alt=""
                width={1000}
                height={1000}
            />

            <div className="flex justify-around items-center mt-28 gap-5">
                <div className="flex flex-col justify-center items-center max-w-72 text-center">
                    <p className="font-CoreRinho75 text-RoseRed text-2xl">1946</p>
                    <p className="font-CoreRinho35 text-xl">Création d’une pépinière de végétaux d’ornement en plein terre</p>
                </div>
                <div className="flex flex-col justify-center items-center max-w-72 text-center">
                    <p className="font-CoreRinho75 text-RoseRed text-2xl">1971</p>
                    <p className="font-CoreRinho35 text-xl">Démarrage de la culture de végétaux hors sol (en pots)</p>
                </div>
                <div className="flex flex-col justify-center items-center max-w-72 text-center">
                    <p className="font-CoreRinho75 text-RoseRed text-2xl">1992</p>
                    <p className="font-CoreRinho35 text-xl">Membre fondateur du Conseil Horticole d’IDF</p>
                </div>
                <div className="flex flex-col justify-center items-center max-w-72 text-center">
                    <p className="font-CoreRinho75 text-RoseRed text-2xl">ÉTAPE 4</p>
                    <p className="font-CoreRinho35 text-xl">Mise en place de la PBI dans notre production</p>
                </div>
            </div>
        </div>
        
        <div className="flex gap-5 mt-28">


            {/* <div className="flex flex-col bg-white rounded-xl gap-2 font-CoreRinho35 shadow-md p-5 max-w-xl">
                <div className="flex items-center gap-5">
                    <Image
                        className="mb-10"
                        src="/assets/images/icons/Man.png"
                        alt=""
                        width={50}
                        height={50}
                    />
                    <div>
                        <h2 className="font-CoreRinho75 text-xl">Mr DELONG</h2>
                        <Image
                        className="mb-10"
                        src="/assets/images/icons/Stars.png"
                        alt=""
                        width={100}
                        height={100}
                    />
                    </div>
                </div>

                <p>
                    Un large choix de plantes pour satisfaire tous mes clients. <br />
                    Merci à Delphine pour ses conseils avisés !
                </p>
                <p className="text-RoseRed">Visité en avril</p>
            </div> */}

        </div>
      </Section>

    </>
  );
}