import Image from "next/image";
import {Button} from "../../components/common/Button";

export default function Slider() {
  return (
    <>
      <section className="flex flex-col justify-center items-center p-10 gap-6 -mt-96 z-20">
        <div className="flex flex-col justify-center items-center bg-RoseRed rounded-3xl gap-10 py-14 px-20 mt-10">
          <h2 className=" uppercase font-CoreRinho75 text-white text-2xl">
            Découvrez nos familles de plantes
          </h2>

          {/* <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">Slide 1</div>
              <div className="swiper-slide">Slide 2</div>
              <div className="swiper-slide">Slide 3</div>
            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <div className="swiper-scrollbar"></div>
          </div> */}

          <div className="flex gap-5">
            <div className="flex flex-col justify-center items-center bg-white rounded-3xl xl:flex-row">
              <div>
                <Image
                  src="/assets/images/Les-rosiers.png"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>

              <div className="flex flex-col justify-center items-center px-10">
                <h2 className="uppercase font-CoreRinho75 py-5 px-2">
                  LES ROSIERS
                </h2>

                <div className="flex flex-col text-start max-w-96 max-h-96 gap-4 xl:text-center">
                  <p>Les rosiers, célèbres pour leur beauté et leur parfum, sont des incontournables en aménagement paysager professionnel.</p>
                  <p>Leur polyvalence les rend adaptés à une variété de configurations, des massifs aux bordures, ajoutant ainsi une touche d'élégance et de couleur aux espaces verts.</p>
                </div>

                <div className="flex gap-6 mt-4 mb-4">

                  <div className="flex flex-col justify-center items-center gap-2 max-w-28 text-xs text-center font-CoreRinho75">
                    <div className="bg-RoseRed p-4 max-w-20 rounded-xl">
                      <Image                   
                        className="w-full h-full"
                        src="/assets/images/vectors/slider-icons/pots_de_fleurs_blanc.png"
                        width={50}
                        height={50}
                        alt="" />
                    </div>

                    <p>Plantes de 3 à 90 litres</p>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2 max-w-28 text-xs text-center font-CoreRinho75">
                    <div className="bg-RoseRed p-4 max-w-20 rounded-xl">
                      <Image                   
                        className="w-full h-full"
                        src="/assets/images/vectors/slider-icons/arrosoire_fleurs.png"
                        width={50}
                        height={50}
                        alt="" />
                    </div>

                    <p>Plantes à effet immédiat</p>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2 max-w-28 text-xs text-center font-CoreRinho75">
                    <div className="bg-RoseRed p-4 max-w-20 rounded-xl">
                      <Image                   
                        className="w-full h-full"
                        src="/assets/images/vectors/slider-icons/arbustes.png"
                        width={50}
                        height={50}
                        alt="" />
                    </div>

                    <p>Plantes à effet immédiat</p>
                  </div>

                </div>

                <Button text="Commander en ligne" />
              </div>
            </div>
        </div>
        </div>
      </section>

    </>
  );
}
