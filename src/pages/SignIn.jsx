import { NavLink, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div>
      <section className=" bg-slate-200">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 border-slate-300">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <htmlForm className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5   "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 y"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-violet-800 hover:bg-violet-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign In
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Create an account?{" "}
                  <NavLink
                    to="signUp"
                    className="font-medium text-primary-600 hover:underline"
                    onClick={() => {
                      return navigate("signUp");
                    }}
                  >
                    SignUp here
                  </NavLink>
                </p>
              </htmlForm>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
