import Header from "@/components/UI/Header";
import TextMonfex from "@/components/UI/TextMonfex";

interface Props {
  params: {
    place: string;
  };
}

export default function ProductorsPage({ params }: Props) {
  const { place } = params;

  return (
    <div>
      <Header src={`/place/${place}.png`} />

      <div className="w-full flex items-center justify-center font-markazi text-6xl text-center my-7">
        <span className="text-blueT">
          <span className="font-bold">
            Perché scegliere <TextMonfex />?
          </span>
          <br /> Sostieni i <span className="font-bold">piccoli produttori</span>, riscopri la tradizione e <br /> assapora la qualità <span className="font-bold text-accent">DOP</span>.
        </span>
      </div>

      <div className="w-full flex items-center justify-center font-markazi text-6xl text-center my-7">
        <span className="text-blueT">
          Gusta l’eccellenza
          <br />
          sostieni il <span className="text-primary">territorio</span>.
        </span>
      </div>
    </div>
  );
}
