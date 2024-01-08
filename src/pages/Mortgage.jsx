import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import TextCard from "../components/TextCard";
import { mortgageImageCard, textCards } from "../content/mortgage.content";

function Mortgage() {
  return (
    <div className="flex flex-col  text-violet-800 items-center space-y-8 mb-10">
      <ImageCard content={mortgageImageCard}>
        <Button>APPLY FOR A MORTGAGE</Button>
      </ImageCard>
      <div className="flex flex-col items-center px-32 space-y-8">
        <h1 className="text-4xl font-semibold"> Helpful Information</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {textCards.map((card, i) => (
            <TextCard content={card} key={i} />
          ))}
        </div>
        <div className="flex flex-col space-y-7 items-center text-center ">
          <h1 className="text-4xl font-semibold"> Meet our mortgage broker</h1>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[600px] h-[400px] rounded-lg"></div>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quod, iusto optio ipsum, reiciendis fugiat nam quidem unde placeat
            consequuntur, ipsam iste eveniet aliquam repellendus sit ad
            consequatur deleniti rem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum iure amet illum suscipit voluptas
            molestias consectetur, deleniti tempore velit. Laboriosam itaque eum
            aperiam modi unde nihil quisquam assumenda, totam minus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mortgage;
