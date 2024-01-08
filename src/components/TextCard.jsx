import Button from "./Button";

function TextCard({ content }) {
  const { heading, text } = content;
  return (
    <div className="flex flex-col justify-around items-center space-y-6 h-auto p-5 rounded-lg border-[1px] border-slate-400 text-center">
      <h1 className="text-xl font-bold">{heading}</h1>
      <p className="text-md font-medium">{text}</p>
      <Button>LEARN MORE</Button>
    </div>
  );
}

export default TextCard;
