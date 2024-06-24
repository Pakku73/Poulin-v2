import Image from "next/image";
// import { Square } from "@/components/common/Square";

export default function Herobanner() {
    return (
      <>
          <section>
            <div className="h-full w-full relative">
              <Image
                className="h-full w-full shadow-md"
                src="/assets/images/qui-sommes-nous-baniere.png"
                alt=""
                width={2000}
                height={1000}
              />
            </div>
  
            <div className="flex flex-col relative justify-center items-center font-CoreRinho75 text-lg uppercase text-RoseRed gap-20 -mt-40 xl:flex-row">

            {/* <Square image={} number={"900"} text={"variétés différentes de plantes"}/> */}

              <div className="flex flex-col justify-center items-center bg-RoseRed py-10 shadow-md rounded-xl w-96 text-white text-center max-w-80 gap-5">
                <Image
                  src="/assets/images/vectors/square/home.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>
                  variétés différentes de plantes
                </p>
              </div>
  
              <div className="flex flex-col justify-center items-center bg-RoseRed py-10 shadow-md rounded-xl w-96 h-full text-white text-center max-w-80 gap-5">
                <Image
                  src="/assets/images/vectors/square/earth.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <p>
                  RESPECT DE LA NATURE
                </p>
              </div>
  
              <div className="flex flex-col justify-center items-center bg-RoseRed py-10 shadow-md rounded-xl w-96 text-white text-center max-w-80 gap-5">
                <Image
                  src="/assets/images/vectors/square/ampoule.png"
                  alt=""
                  width={70}
                  height={100}
                />
                <p>
                  plantes produites chaque année
                </p>
              </div>
            </div>
          </section>
        </>
    );
};