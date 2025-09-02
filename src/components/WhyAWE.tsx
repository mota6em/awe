const WhyAWE = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between gap-0 md:gap-y-8 gap-x-0 py-10 pb-0 px-4 md:px-0">
      <div className="flex flex-col gap-y-2 ">
        <h2 className="text-4xl bg-white ps-7 md:px-0 md:text-center py-10 md:text-5xl font-semibold mb-4">
          Why After Work Events?
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 md:px-10 xl:px-20 ">
          It started with a Summer Bucket List — with the idea that life can be
          fun. That adult life can be fun. It's not just about working hours,
          but also about networking, connecting, and enjoying ourselves. About
          creating memories. About living life — because we can live it, instead
          of just surviving it.
        </p>
        <h2 className="text-4xl bg-white ps-7 md:px-0 md:text-center py-10 md:text-5xl font-semibold mb-4">
          Why for seekers of Allah?
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 md:px-10 xl:px-20 ">
          We saw the need for a community that accepts people regardless of
          their performances, their level of faith, and where they are in their
          journey of Islam — a community that unites in faith.
        </p>
      </div>
      <img
        src="./imgs/muslim-women.jpg"
        alt="Muslim women image"
        className="w-full h-100 md:h-auto md:w-95 lg:w-120 object-cover"
      />
    </div>
  );
};

export default WhyAWE;
