const Hero = () => {
  return (
    <div className="bg-[#f1ebe6] py-10 px-6 md:px-14 xl:px-32 flex flex-col md:flex-row justify-between items-center gap-4">
      <img
        src="./imgs/logo.png"
        alt="Logo image"
        className="w-64 h-64 md:w-80 md:h-80 lg:w-115 lg:h-115 object-cover rounded-full"
      />
      <div className="flex flex-col h-full gap-y-3 md:gap-y-6 lg:gap-y-10">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            After Work Events
          </h1>
          <p className="text-lg  md:text-xl lg:text-2xl mb-6">
            The Muslim Community where You Belong!
          </p>
        </div>
        <div className="flex flex-row gap-10 md:gap-6">
          <button className="bg-white text-sm md:text-md text-black py-2 px-4 rounded-full cursor-pointer hover:bg-amber-100 hover:underline">
            Read More
          </button>
          <button className="bg-black text-sm md:text-md text-white py-2 px-4 rounded-full cursor-pointer hover:bg-amber-900 hover:underline">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
