import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <main className="bg-slate-100 text-violet-800 min-h-screen px-20 ">
        <div className="flex mt-20 h-[500px]">
          <div className="flex flex-col items-start justify-between basis-1/2  min-width-screen h-full px-10 ">
            <h1 className="text-[60px] font-extrabold ">
              Your Home Adventure Starts Here
            </h1>
            <p className="font-semibold text-[25px] my-10 pr-10">
              Unleashing the Pleasure of Homeownership: Local Expertise, Your
              Journey, Our Passion.
            </p>
            <button
              className="bg-violet-800 hover:bg-violet-700 hover:scale-105 transition-all duration-200 text-white w-44 h-14 flex items-center justify-center rounded-xl"
              onClick={() => {
                return navigate("agents");
              }}
            >
              Explore Our Agents
            </button>
          </div>
          <img
            src="../../public/Canada-Nova-Scotia.jpg"
            className=" h-[500px] w-[600px] bg-green-500 basis-1/2 rounded-xl "
          ></img>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
