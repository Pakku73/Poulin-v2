import Image from "next/image";

export default function Feuillage() {
  return (
    <>
      <section className="flex flex-col justify-center items-center  mt-28 bg-[url('/assets/images/Feuille.png')] bg-cover"> 
      {/* <Image
          className="relative w-full"
          src="/assets/images/Feuille.png"
          alt=""
          width={100}
          height={100}
        /> */}
        <div className="flex flex-col justify-center items-center gap-10 p-10 xl:flex-row">
          <div className="flex flex-col justify-center items-center gap-2 w-52">
            <Image
              className="relative w-24 h-24 object-contain"
              src="/assets/images/vectors/Group(3).png"
              alt=""
              width={0}
              height={0}
            />
            <p className="font-CoreRinho75 text-white text-center text-lg">
              Conseils de nos pépiniéristes
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 w-52">
            <Image
              className="relative w-24 h-24 object-contain"
              src="/assets/images/vectors/Group(4).png"
              alt=""
              width={0}
              height={0}
            />
            <p className="font-CoreRinho75 text-white text-center text-lg">
              Livraison dans la semaine
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 w-52">
            <Image
              className="relative w-24 h-24 object-contain"
              src="/assets/images/vectors/Group(5).png"
              alt=""
              width={0}
              height={0}
            />
            <p className="font-CoreRinho75 text-white text-center text-lg">
              Devis sous 48H
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 w-52">
            <Image
              className="relative w-24 h-24 object-contain"
              src="/assets/images/vectors/Group18.png"
              alt=""
              width={0}
              height={0}
            />
            <p className="font-CoreRinho75 text-white text-center text-lg">
            Production en
            Île-de-France
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
