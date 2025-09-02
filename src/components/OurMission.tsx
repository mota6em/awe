const OurMission = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between gap-8 py-10 px-4 md:px-10 xl:px-20">
      <div className=" md:w-1/2 flex flex-col gap-y-2">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          We are here for those who are looking for other wanderers.{" "}
        </h2>
        <img
          src="./imgs/home-2nd-sec-img.jpg"
          className="w-125  object-cover"
          alt="Book image contains quote 'Big Journeys Begin With Small Steps'"
        />
      </div>
      <div className="md:w-1/2 flex flex-col gap-y-4 md:gap-7 justify-center text-xl md:text-2xl">
        <p>
          It is not easy to be a revert. It is not easy to find the way back to
          Islam once we have been far. It is not easy to start all over again or
          to find those who are in similar shoes like us.
        </p>
        <p>
          God, our Creator, calls us — and when we hear His call, we want to
          respond.
        </p>
        <p>
          One of our responses might be a small step in the form of connecting
          with people who are walking a path similar to ours.
        </p>
        <p>
          This is why AWE came alive: to welcome those who want to belong, who
          want to be accepted, who want to find a community where they can be
          their true selves!
        </p>
      </div>
    </div>
  );
};

export default OurMission;
