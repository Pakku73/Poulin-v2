import Image from "next/image";
import Link from "next/link";
import {Button} from "./Button";

export const Navbar = () => {
  return (
      <nav className="flex fixed w-full justify-center z-30 p-10">
        <div className="flex justify-around items-center font-CoreRinho65 text-2xl w-full p-2 bg-white rounded-xl shadow-md">
            
            <Link href="/">
              <Image className="shadow-none"
                src="/assets/images/logos/Logo-PépinièresPoullain.png"
                alt=""
                width={150}
                height={0}
              />
            </Link>

            <Link href="/nos-plantes">Nos plantes</Link>
            <div className="relative group">
              <div className="flex gap-2 items-center cursor-pointer">
                <p className="cursor-default">La pépinière</p>
                <div className="flex items-center">
                  <Image src="/assets/images/icons/drop-down-arrow.png" alt="" width={10} height={0}/>
                </div>
              </div>

              <div className="flex flex-col absolute justify-center mt-5 bg-white p-5 gap-5 w-72 rounded-xl shadow-md opacity-0 group-hover:opacity-100 group-hover:mt-10 transition-all duration-300 invisible group-hover:visible"> {/* menu déroulant  */}
                <Link href="/qui-sommes-nous">Qui sommes nous ?</Link>
                <Link href="/nos-engagements">Nos engagements</Link>
              </div>
            </div>
            <Link href="/contact">Contactez-nous</Link>
            <Button text="Commander en ligne" />
        </div>
      </nav>
  );
};