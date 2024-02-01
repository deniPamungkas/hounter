import Button from "./button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ReadyToSell = () => {
  return (
    <section className="w-full h-[409px] px-24 flex z-10">
      <div className="w-1/2 h-full flex flex-col justify-between pr-10 z-10">
        <p className="text-orange-300 font-semibold">--- Ready To Sell</p>
        <h1 className="font-bold text-4xl">Let’s tour and see our house!</h1>
        <p>
          Houses recommended by our partners that have been curated to become
          the home of your dreams!
        </p>
        <span className="font-semibold">House Detail</span>
        <ul className="flex flex-wrap gap-y-3 w-[440px] ">
          <li className="flex gap-x-4 items-center w-1/2">
            <img src="images/bedroom.png" alt="bedroom" /> 4 Bedrooms
          </li>
          <li className="flex gap-x-4 items-center w-1/2">
            <img src="images/bathroom.png" alt="bathroom" /> 2 Bathrooms
          </li>
          <li className="flex gap-x-4 items-center w-1/2">
            <img src="images/carport.png" alt="carport" /> 1 Carport
          </li>
          <li className="flex gap-x-4 items-center w-1/2">
            <img src="images/floor.png" alt="floor" /> 2 Floors
          </li>
        </ul>
        <img src="images/line.png" alt="line" className="w-[440px]" />
        <div className="flex justify-between w-[440px]">
          <div className="w-1/2 h-[56px] flex justify-between">
            <div className="w-[50px] h-full flex justify-start items-center">
              <img src={`images/avatar1.png`} alt="avatar" />
            </div>
            <div className="w-[168px] h-full">
              <h1 className="text-xl font-semibold">Dianne Rossel</h1>
              <h2 className="text-lg truncate">London, England</h2>
            </div>
          </div>
          <Button className="bg-primary px-4 text-white flex items-center gap-x-3 font-semibold">
            <LocalPhoneIcon /> Contact Now
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-end z-10">
        <img src="images/Rectangle5.png" alt="rectangle5" className="" />
      </div>
    </section>
  );
};

export default ReadyToSell;
