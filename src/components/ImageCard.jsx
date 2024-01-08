function ImageCard({ content, children }) {
  const { heading, text } = content;
  return (
    <div
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-96 flex justify-center items-center"
      // style={{ backgroundImage: `url('/Canada-Nova-Scotia.jpg')` }}
      //bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-center w-full h-[800px] bg-auto bg-no-repeat flex justify-center items-center
    >
      <div className=" bg-white bg-opacity-80 h-4/6 w-4/6 flex flex-col justify-center items-center px-20 space-y-6">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="text-base text-center font-medium">{text}</p>
        {children}
      </div>
    </div>
  );
}

export default ImageCard;
