interface Props {
  selected?: boolean;
}

const Bullet = ({ selected }: Props) => {
  return <div className={`rounded-full  border-[0.5px] border-solid w-2 h-2 font-normal font-['Inter'] ${selected ? "bg-white border-blueT" : "bg-blueT border-white"} `} />;
};

export default Bullet;
