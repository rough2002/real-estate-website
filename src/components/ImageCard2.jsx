function ImageCard2({ content, className }) {
  const { heading, text } = content;
  return (
    <div className=" flex flex-col space-y-5 p-5 js items-center text-center border-slate-400 border-[1px] rounded-lg">
      <div
        className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${className}`}
      ></div>
      <h3 className="text-xl font-bold">{heading}</h3>
      <p className="text-md font-medium">{text}</p>
    </div>
  );
}

export default ImageCard2;
