const Card2 = () => {
  return (
    <div className="w-[740px] h-[505px] relative flex flex-col items-center">
      <img
        src="images/Rectangle6.jpg"
        alt="rectangle"
        className="w-full h-[400px]"
      />
      <div className="bg-white w-[612px] h-[249px] absolute m-auto bottom-0 p-6 flex flex-col gap-y-3 rounded-xl drop-shadow-lg">
        <h1 className="text-xl font-semibold">
          Best! I Got The House I Wanted Through Hounter
        </h1>
        <p>
          Through this website I can get a house with the type and
          specifications I want very easily, without a complicated process to be
          able to find information on the house we want.
        </p>
        <div className="w-full flex items-center">
          <div className="w-1/2 h-[48px] flex gap-x-5">
            <div className="w-[48px] h-full flex justify-start items-center">
              <img src={`images/avatar1.png`} alt="avatar" />
            </div>
            <div className="w-[168px] h-full ">
              <h1 className="text-lg font-semibold">Dianne Rossel</h1>
              <h2 className="text-base truncate">London, England</h2>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-end gap-x-2">
            <img src="images/star.png" alt="star" className="w-5 h-5" />
            <span className="text-xl font-semibold">4.6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
