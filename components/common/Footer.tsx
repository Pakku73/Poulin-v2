import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

export const Footer = () => {
  return (
      <footer className="flex flex-col flex-col-reverse w-full gap-10 bg-RoseRed p-20 xl:flex-row xl:justify-around">
        <div>
          <div className="flex justify-center items-center p-10 bg-white rounded-md">
            <Image
              src="/assets/images/logos/logo.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <p className="text-white">© 2024 PÉPINIÈRES POULLAIN</p>
        </div>

        <div className="gap-2">
          <h2 className="uppercase text-white font-CoreRinho75 text-2xl">
            LA PÉPINIÈRE
          </h2>
          <div className="flex flex-col text-white font-CoreRinho35 gap-2 mt-5">
            <Link href="Nos-plantes">Nos plantes</Link>
            <Link href="Nos-plantes">Qui sommes-nous ?</Link>
            <Link href="Nos-plantes">Nos engagements</Link>
            <Link href="Nos-plantes">Nos clients</Link>
          </div>
        </div>

        <div className="gap-2">
          <h2 className="uppercase text-white font-CoreRinho75 text-2xl">
            INFORMATIONS
          </h2>
          <div className="text-white font-CoreRinho35 gap-2 mt-5">
            <div>
                <p>Le Chemin d’Elleville,</p>
                <p>78940 La Queue-lez-Yvelines</p>
            </div>
            <div>
                <p>Du lundi au vendredi :</p>
                <p>8H00-12H00 & 14H00-17H00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="uppercase text-white font-CoreRinho75 text-2xl">
            RESTONS CONNECTÉS
          </h2>
          <div className="text-white font-CoreRinho35 gap-5 mt-5">
            <div className="flex gap-2">
              <Image
                src="/assets/images/vectors/social-media/facebook.png"
                alt=""
                width={25}
                height={25}
              />

              <Image
                src="/assets/images/vectors/social-media/instagram.png"
                alt=""
                width={25}
                height={25}
              />
            </div>
            <div>
                <p>Particuliers, plus d’informations <br />
                sur : <a href="#">jardineriepoullain.com</a></p>
            </div>
          </div>

          <Button text="Commander en ligne" variant="whitePinkToGrayWhite" />
        </div>

      </footer>
  );
};

