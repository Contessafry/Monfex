import Image from "next/image";
import Bullet from "./(partials)/Bullet";

interface Props {
  selected?: boolean;
  images: string[];
}

const Carousel = ({ selected, images }: Props) => {
  const PlaceHolderArr = Array.from({ length: 5 }, (_, i) => i);
  return (
    <div className="relative w-full  px-9 flex-col justify-end items-center gap-1.5 flex">
      <Image src={images[0]} alt="carousel" width={2000} height={1000} className="w-full h-full max-h-[500px] object-cover " />
      <div className="w-36 px-6 justify-center items-center gap-1.5 inline-flex bg-red-300">
        <div className="absolute bottom-5 px-6 py-px justify-start items-center gap-1 flex">
          {PlaceHolderArr.map((_, i) => (
            <Bullet selected={i === 2} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
