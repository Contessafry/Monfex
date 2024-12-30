import picWelcome from "@/assets/images/welcome.png";
import Image from "next/image";
import SearchBar from "./(partials)/SearchBar";

interface Props {
  src?: string;
  showHeading?: boolean;
}

const Header = ({ src = picWelcome.src, showHeading = false }: Props) => {
  return (
    <header className="h-[520px] flex items-center justify-center relative">
      <Image src={src} alt="header" width={300} height={100} sizes="100vw" quality={100} className="absolute -z-10 w-full h-full object-cover filter brightness-50 pointer-events-none" />
      <div className="w-full flex-col items-center justify-center max-w-xl">
        {showHeading && (
          <>
            <h1 className="text-white text-5xl md:text-[64px] text-center font-bold font-markazi ">
              I gusti <span className="text-primary font-bold font-markazi">autentici</span>
              <span className="text-white font-bold font-markazi"> del Monferrato a casa tua</span>
            </h1>
            <div className="mx-7 md:mx-0">
              <SearchBar />
            </div>
          </>
        )}
        {false && <h2 className="self-stretch text-center text-white text-[61.50px] font-bold font-markazi">prodotti Locali d’eccellenza</h2>}
      </div>
    </header>
  );
};

export default Header;
