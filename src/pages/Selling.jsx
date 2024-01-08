import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import { sellingImageCard } from "../content/selling.content";

function Selling() {
  return (
    <div className="flex flex-col w-full text-violet-800 items-center   space-y-6 pb-5">
      <ImageCard content={sellingImageCard}>
        <Button>See our Agents</Button>
      </ImageCard>
      <div className="flex w-full justify-around space-x-5 px-32">
        <div className="border-[1px] w-1/2 border-slate-400 flex flex-col rounded-lg p-7 space-y-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[200px] h-[200px] rounded-full"></div>
            <h3 className="text-md font-bold">Exclusive</h3>
            <p className="text-md font-medium">
              Get preferred map placement on ViewPoint.ca and assistance from
              our ViewPoint agents
            </p>
          </div>
          <ul className="list-disc">
            <li>Market your property to 599,286 ViewPoint users</li>
            <li>Listed exclusively on ViewPoint.ca only</li>
            <li>Avoid the cost and hassle of MLS®</li>
            <li>Highlighted with special marker on the ViewPoint map</li>
            <li>Larger summary and lead picture on the ViewPoint.ca map</li>
            <li>
              All ViewPoint Realty listings feature more prominently on the
              ViewPoint.ca map
            </li>
            <li>
              Add text to your listings summary to highlight features of the
              property
            </li>
            <li>
              Your listing can be the "Featured Listing" at the top of our map
              sidebar
            </li>
            <li>5x more views on your listing</li>
            <li>Ability to post as Coming Soon</li>
            <li>ViewPoint agent handles inquiries, showings and offers</li>
            <li>Lawn sign and lock box included</li>
          </ul>
        </div>
        <div className="border-[1px] w-1/2 border-slate-400 flex flex-col rounded-lg p-7 space-y-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[200px] h-[200px] rounded-full"></div>

            <h3 className="text-md font-bold">
              Traditional Full Service & Exposure
            </h3>
            <p className="text-md font-medium">
              Listed on ViewPoint.ca and MLS®
            </p>
          </div>
          <ul className="list-disc">
            <li>Market your property to 599,286 ViewPoint users</li>
            <li>Listed exclusively on ViewPoint.ca only</li>
            <li>Avoid the cost and hassle of MLS®</li>
            <li>Highlighted with special marker on the ViewPoint map</li>
            <li>Larger summary and lead picture on the ViewPoint.ca map</li>
            <li>
              All ViewPoint Realty listings feature more prominently on the
              ViewPoint.ca map
            </li>
            <li>
              Add text to your listings summary to highlight features of the
              property
            </li>
            <li>
              Your listing can be the "Featured Listing" at the top of our map
              sidebar
            </li>
            <li>5x more views on your listing</li>
            <li>Ability to post as Coming Soon</li>
            <li>ViewPoint agent handles inquiries, showings and offers</li>
            <li>Lawn sign and lock box included</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Selling;
