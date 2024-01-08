/*
forms in marketing
home page and 
Buying page
*/
import ImageTextCard from "../components/ImageTextCard";
import { servicesContent } from "../content/home.content";
function Home() {
  return (
    <div className="flex flex-col space-y-10 w-full h-auto  text-violet-800 items-center pb-14">
      <div
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-96 flex justify-center items-center"
        // style={{ backgroundImage: `url('/Canada-Nova-Scotia.jpg')` }}
        //bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-center w-full h-[800px] bg-auto bg-no-repeat flex justify-center items-center
      >
        <div className="  text-white  h-4/6 w-4/6 flex flex-col justify-center items-center px-20 space-y-6 text-center">
          <h2 className="text-4xl font-bold">Search Nova Scotia Real Estate</h2>
          <p className="text-base text-center font-medium">
            See real-time data on all 5,786 MLS® listings and 675,019
            properties in Nova Scotia.
          </p>
          <div className="relative mb-4 flex w-full flex-wrap items-stretch ">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-lg border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
              placeholder="Enter any address , PID , street in nova scotia"
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <button
              className="relative z-[2] flex items-center rounded-lg bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out  hover:shadow-lg bg-blue-500 "
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="px-32 flex space-x-6 ">
        {servicesContent.map((card, i) => (
          <ImageTextCard
            content={card}
            key={i}
            className="rounded-lg border-[1px] w-1/3 border-slate-300 "
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
