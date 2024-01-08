import AgentCard from "../components/AgentCard";
import { v4 as uuidv4 } from "uuid";
import { agentData } from "../../data/agentData";
import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import { agentsImageCard } from "../content/agents.content";

const imgStr = "https://i.pravatar.cc/250?";
function Agents() {
  return (
    <div className="flex flex-col  text-violet-800 items-center space-y-8 ">
      <ImageCard content={agentsImageCard}>
        <div className="space-x-8">
          <Button>LOOKING TO BUY ?</Button>
          <Button>LOOKING TO SELL ?</Button>
        </div>
      </ImageCard>
      <div className="px-32">
        <div className="grid grid-cols-5 gap-6 grid-rows-auto py-14">
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
      </div>
    </div>
  );
}

export default Agents;
