import AgentCard from "../components/AgentCard";
import { v4 as uuidv4 } from "uuid";
import { agentData } from "../../data/agentData";
import Footer from "../components/Footer";
const imgStr = "https://i.pravatar.cc/250?";
function Agents() {
  return (
    <div className="flex flex-col">
      <main className="bg-slate-100 min-h-screen px-20 pt-10 space-y-10 flex flex-col items-center">
        <h1 className="text-violet-800 font-bold text-[45px] mb-7 font-sans custom-heading border-b-[3px] border-violet-800">
          Meet our Expert Agents.
        </h1>
        <div className="grid grid-cols-4 gap-10 grid-rows-auto">
          {agentData.map((agent) => (
            <AgentCard
              key={agent.id}
              img={`${imgStr}u=${uuidv4()}`}
              name={agent.name}
              location={agent.location}
              phno={agent.phno}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Agents;
