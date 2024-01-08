import Button from "./Button";

function ImageTextCard({ content, className }) {
  const { heading, text } = content;
  return (
    <div
      className={`flex flex-col items-center text-center justify-around space-y-6 h-auto p-3 ${className}`}
    >
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[150px] h-[150px] rounded-full"></div>
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="text-md font-medium">{text}</p>
      <Button>LEARN MORE</Button>
    </div>
  );
}

export default ImageTextCard;
