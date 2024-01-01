import { useNavigate } from "react-router-dom";
function Logo() {
  const navigate = useNavigate();
  return (
    <img
      src="logo-no-background.png"
      alt="Logo"
      className="h-12 w-45 cursor-pointer opacity-[0.90]"
      onClick={() => navigate("/")}
    />
  );
}

export default Logo;
