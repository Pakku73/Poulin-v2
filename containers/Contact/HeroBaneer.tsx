import Image from "next/image";

export default function Herobanner() {
    return (
      <>


        <section>
            <div className="h-full w-full relative">
                <Image
                className="shadow-md h-full w-full"
                src="/assets/images/Contact-video.png"
                alt=""
                width={2000}
                height={800}
                />
            </div>
  
            <div className="flex flex-col relative justify-center items-center font-CoreRinho75 text-lg text-RoseRed gap-20 -mt-40 xl:flex-row">

            {/* <Square image={} number={"900"} text={"variétés différentes de plantes"}/> */}

              <div className="flex flex-col justify-center items-center bg-white py-10 shadow-md rounded-xl w-96 text-center gap-2">
                <Image
                  src="/assets/images/vectors/square/Pots-de-fleurs-rouge.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <h2 className="text-5xl">900</h2>
                <p>
                  variétés différentes <br />
                  de plantes
                </p>
              </div>
  
              <div className="flex flex-col justify-center items-center bg-white py-10 shadow-md rounded-xl w-96 text-center gap-2">
                <Image
                  src="/assets/images/vectors/square/maison-champ-rouge.png"
                  alt=""
                  width={120}
                  height={100}
                />
                <h2 className="text-5xl">1946</h2>
                <p>
                  création des Pépinières <br />
                  Poullain par Bernard Poullain
                </p>
              </div>
  
              <div className="flex flex-col justify-center items-center bg-white py-10 shadow-md rounded-xl w-96 text-center gap-2">
                <Image
                  src="/assets/images/vectors/square/Pousse-rouge.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <h2 className="text-5xl">200 000</h2>
                <p>
                  plantes produites <br />
                  chaque année
                </p>
              </div>
            </div>
        </section>

      </>
    );
};