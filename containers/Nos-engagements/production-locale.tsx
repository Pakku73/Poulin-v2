import { Button, Section } from "@/components";
import Image from "next/image";

export default function ProductionLocale() {
    return (
      <>
      <Section>
        <div className="flex flex-col gap-20 xl:flex-row">
            <div className="flex flex-col text-2xl gap-5 max-w-3xl text-justify">
                <div>
                    <h2 className="font-CoreRinho35 text-RoseRed text-xl">PÉPINIÈRE POULLAIN</h2>
                    <h2 className="font-CoreRinho75 text-4xl">NOTRE PRODUCTION LOCALE</h2>
                </div>

                <p className="font-bold">
                    Nous aussi nous souhaitons contribuer à préserver votre écosystème, 
                    nous avons fait le choix d’une production raisonnée.
                </p>
                <p>
                    Afin de <strong>limiter les pesticides</strong>, nous utilisons 
                    des petites bêtes qui viennent se nourrir des prédateurs (ex : coccinelles, mésanges, 
                    etc.).Tout autour de notre production, nous conservons des 
                    <strong className="font-bold">bandes enherbées</strong> afin d’offrir à ces bébêtes 
                    un petit nid douillet !
                </p>
                <p>
                    Nous contrôlons précisément notre arrosage et utilisant un <strong>système de micro-aspersion</strong> régulé par ordinateur.
                    Toutes nos plantes sont recouvertes d’un fin <strong>paillage</strong>, limitant le risque d’enherbement, et permettant de conserver 
                    l’humidité dans notre substrat (limitant ainsi l’arrosage).
                </p>
                <p>
                    Et le petit plus, dans notre réserve d’eau, nous avons mis quelques <strong>carpes pour réguler la prolifération des algues</strong> !
                    Nous accueillons <strong>nos amies les abeilles</strong>, en partenariat avec un <strong>apiculteur professionnel</strong> ! <br />
                    Véritables « sentinelles de l’environnement », celles-ci sont notre meilleur indicateur pour protéger notre écosystème.
                </p>
                <Button text="Commander en ligne" />
            </div>

            <div className="flex flex-col gap-10 xl:flex-row">
                <Image
                    className="mb-10"
                    src="/assets/images/Rectangle-1-champ.png"
                    alt=""
                    width={350}
                    height={600}
                />

                <Image
                    className="mt-10"
                    src="/assets/images/Rectangle-2-bois.png"
                    alt=""
                    width={350}
                    height={600}
                />
            </div>
        </div>

      </Section>
      </>
    );
};