import TextMonfex from "./TextMonfex";

const TextWhyMonfex = () => {
  return (
    <div className="w-full flex items-center justify-center font-markazi text-3xl md:text-6xl text-center my-7">
      <span className="text-blueT text-pretty">
        <span className="font-bold">
          Perché scegliere <TextMonfex />?
        </span>
        <br /> Sostieni i <span className="font-bold">piccoli produttori</span>, riscopri la tradizione e assapora la qualità <span className="font-bold text-accent">Locale</span>.
      </span>
    </div>
  );
};

export default TextWhyMonfex;
