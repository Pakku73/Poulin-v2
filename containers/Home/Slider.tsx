import { Section } from "@/components";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <Section>

        <div className="flex flex-col justify-center items-center p-10 gap-6">
        <div className="flex flex-col justify-center items-center bg-RoseRed rounded-3xl gap-10 py-14 px-20 mt-10">
          <h2 className=" uppercase font-CoreRinho75 text-white text-2xl">
            Découvrez nos familles de plantes
          </h2>
          <Image
            src="/assets/images/vectors/Feuille.png"
            width={100}
            height={100}
            alt=""
          />

          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">Slide 1</div>
              <div className="swiper-slide">Slide 2</div>
              <div className="swiper-slide">Slide 3</div>
            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <div className="swiper-scrollbar"></div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col justify-center items-center bg-white rounded-3xl">
              <div className="w-full">
                <Image
                  src="/assets/images/Les-rosiers.png"
                  width={300}
                  height={100}
                  alt=""
                />
              </div>

              <div>
                <h2 className="uppercase font-CoreRinho75 py-5 px-2">
                  Les rosiers
                </h2>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-white rounded-3xl">
              <div className="w-full">
                <Image
                  src="/assets/images/Les-hortensias.png"
                  width={300}
                  height={100}
                  alt=""
                />
              </div>

              <div>
                <h2 className="uppercase font-CoreRinho75 py-5 px-2">
                  Les hortensias
                </h2>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-white rounded-3xl">
              <div className="w-full">
                <Image
                  src="/assets/images/Les-plantes-de-haies.png"
                  width={300}
                  height={100}
                  alt=""
                />
              </div>

              <div>
                <h2 className="uppercase font-CoreRinho75 py-5 px-2">
                  Les plantes de haies
                </h2>
              </div>
            </div>
          </div>

          <button className="uppercase bg-white font-CoreRinho75 text-black p-2 rounded-lg shadow-lg transition ease-in-out duration-300 hover:text-RoseRed">
            Commander en ligne
          </button>
        </div>

        <button className="uppercase font-CoreRinho75 bg-RoseRed text-white p-2 rounded-lg shadow-lg transition ease-in-out duration-300 hover:bg-white hover:text-RoseRed w-96">
          Commander en ligne
        </button>
        </div>
      </Section>

    </>
  );
}
