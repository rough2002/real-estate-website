import Logo from "./Logo";

function Footer() {
  return (
    <div>
      <footer className=" bg-slate-100 text-violet-800 px-20 border-t-2  border-slate-300 py-24 flex justify-around">
        <Logo />
        <div>
          <h3 className="footer-heading">Services</h3>
          <ul className="space-y-2">
            <li>Buying</li>
            <li>Selling</li>
            <li>Marketing</li>
            <li>Mortgage</li>
            <li>Insurance</li>
            <li>Builder Direct</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Website</h3>
          <ul className="space-y-2">
            <li>Map</li>
            <li>Login</li>
            <li>Sign up</li>
            <li>For Sale</li>
            <li>Client Advantage</li>
            <li>Alternate Search</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Contact</h3>
          <ul className="space-y-2">
            <li>Agents</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Feedback</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Suscribe to our newsletter</h3>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-18 text-sm text-gray-900 border border-violet-700  rounded-lg bg-gray-50 input-focus"
              placeholder="Email"
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-violet-800 hover:bg-violet-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
