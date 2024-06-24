import { Section } from "@/components";
import Image from "next/image";

export default function Avis
() {
  return (
    <>
      <Section>

        <div className="flex flex-col justify-center items-center gap-5 mt-10">
            <h2 className="uppercase font-CoreRinho35 text-RoseRed text-lg">VOTRE AVIS COMPTE !</h2>
            <h1 className="uppercase font-CoreRinho75 text-black text-4xl">+ DE 10 000 PROFESSIONNELS SATISFAITS</h1>
        </div>
        
        <div className="flex flex-col gap-5 mt-28 xl:flex-row">

            <div className="flex flex-col bg-white rounded-xl gap-2 font-CoreRinho35 shadow-md p-5 max-w-xl">
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
            </div>


            <div className="flex flex-col bg-white rounded-xl gap-2 font-CoreRinho35 shadow-md p-5 max-w-xl">
                <div className="flex items-center gap-5">
                    <Image
                        className="mb-10"
                        src="/assets/images/icons/Woman.png"
                        alt=""
                        width={50}
                        height={50}
                    />
                    <div>
                        <h2 className="font-CoreRinho75 text-xl">Anais N.</h2>
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
                    Un atelier enfant d’une qualité WAOUHHH. Merci pour votre professionnalisme et votre sympathie. À bientôt !
                </p>
                <p className="text-RoseRed">Visité en janvier</p>
            </div>

            <div className="flex flex-col bg-white rounded-xl gap-2 font-CoreRinho35 shadow-md p-5 max-w-xl">
                <div className="flex items-center gap-5">
                    <Image
                        className="mb-10"
                        src="/assets/images/icons/Man.png"
                        alt=""
                        width={50}
                        height={50}
                    />
                    <div>
                        <h2 className="font-CoreRinho75 text-xl">Raphael T. Inoue</h2>
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
            </div>

        </div>
      </Section>

    </>
  );
}