import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import { buyingImageCard, buyingCards } from "../content/buying.content";
import ImageCard2 from "../components/ImageCard2";

function Buying() {
  return (
    <div className="flex flex-col space-y-10 w-full h-auto  text-violet-800 justify-center pb-14 ">
      <ImageCard content={buyingImageCard}>
        <div>
          <Button>Explore our Agents</Button>
        </div>
      </ImageCard>
      <div className="flex flex-col space-y-6 px-32 ">
        <div className="flex space-x-3">
          {buyingCards.map((card, i) => (
            <ImageCard2
              content={card}
              key={i}
              className="w-[200px] h-[200px] rounded-full"
            >
              <p>{card.content}</p>
            </ImageCard2>
          ))}
        </div>
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl font-semibold ">
            Explore our famous real estate map.
          </h1>
          <p className="text-basef font-normal">
            Every single property in Nova Scotia is clickable on our map whether
            it`&apos;`s for sale, recently sold or not for sale. Get vital
            information such as sales history, tax assessments and much, much
            more.
          </p>
          <Button className="w-36">EXPLORE MAP</Button>
        </div>
      </div>
    </div>
  );
}

export default Buying;
