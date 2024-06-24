import Image from "next/image";

export default function Carte() {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-14 p-10">
        <div className="flex flex-col justify-center items-center gap-5 mt-10">
            <h2 className="uppercase font-CoreRinho35 text-RoseRed text-lg">LA QUEUE-LEZ-YVELINES (78)</h2>
            <h1 className="uppercase font-CoreRinho75 text-black text-4xl">RETROUVEZ-NOUS DANS NOTRE PÉPINIÈRE</h1>
            <Image
            className="mt-10"
                  src="/assets/images/Carte.png"
                  alt=""
                  width={800}
                  height={100}
                />
                <div className="flex justify-ceneter items-center font-CoreRinho35">
                    <p>Paris- La Queue-lez-Yvelines : <span className="font-CoreRinho65 text-RoseRed">50KM</span></p>
                    <div className="bg-black w-[2px] h-5 mx-2"></div>
                    <p>Rouen- La Queue-lez-Yvelines : 86KM</p>
                </div>
        </div>
      </section>
    </>
  );
}
