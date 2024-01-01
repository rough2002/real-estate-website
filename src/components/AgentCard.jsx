import { Link } from "react-router-dom";

function AgentCard({ img, name, location, phno }) {
  return (
    <div className="h-[400px] w-60 rounded-lg bg-white overflow-hidden shadow-xl hover:scale-105 transition-all duration-200">
      <img src={img} alt="agent Image" />
      <div className=" text-black flex flex-col mt-2 space-y-1 items-center ">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="font-semibold">{phno}</p>
        <p className="">{location}</p>
        <Link className="font-semibold text-white bg-violet-800 h-10 w-32 flex justify-center items-center rounded-md ">
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default AgentCard;

//https://i.pravatar.cc/150?u=118836
