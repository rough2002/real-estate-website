import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import ImageCard2 from "../components/ImageCard2";
import {
  advertisingContent,
  informationContent,
  marketingImageCard,
} from "../content/marketing.content";

function Marketing() {
  return (
    <div className="flex flex-col  text-violet-800 items-center space-y-8 ">
      <ImageCard content={marketingImageCard}>
        <Button>Meet Our team</Button>
      </ImageCard>
      <div className="flex flex-col items-center space-y-9 px-32">
        <div className="grid grid-cols-3 grid-rows-1 gap-4">
          {informationContent.map((card, i) => (
            <ImageCard2
              content={card}
              key={i}
              className="h-[200px] w-[200px] rounded-lg"
            />
          ))}
        </div>
        <h1 className="text-3xl font-semibold">Ad Types</h1>
        <h1 className="text-3xl font-normal">
          Attract our users through unique display units and custom geo
          placements.
        </h1>
        <div className="grid grid-cols-3 grid-rows-1 gap-4">
          {advertisingContent.map((card, i) => (
            <ImageCard2
              content={card}
              key={i}
              className="h-[200px] w-[200px] rounded-lg"
            />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Marketing;
