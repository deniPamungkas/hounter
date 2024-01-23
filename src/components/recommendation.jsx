import Button from "./button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Card from "./card";
import { cards } from "../assets/constant";
import HomeIcon from "@mui/icons-material/Home";
import VillaIcon from "@mui/icons-material/Villa";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Recommendation = () => {
  return (
    <section className="w-full px-24 z-10">
      <div className="w-full h-fit mb-10">
        <p className="text-orange-300 font-semibold">--- Our Recommendations</p>
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Featured House</h1>
          <div className="flex gap-x-8 text-lg">
            <Button className="border-2 py-1 flex items-center gap-x-2">
              <HomeIcon /> House
            </Button>
            <Button className="border-2 py-1 flex items-center gap-x-2">
              <VillaIcon /> Villa
            </Button>
            <Button className="border-2 py-1 flex items-center gap-x-2">
              <ApartmentIcon /> Apartment
            </Button>
          </div>
          <div className="flex gap-x-3">
            <Button className="bg-primary px-4">
              <ArrowBackIosNewIcon style={{ color: "white" }} />
            </Button>
            <Button>
              <ArrowForwardIosIcon />
            </Button>
          </div>
        </div>
      </div>
      <ul className="cardScroll flex gap-x-10 h-fit overflow-y-hidden overflow-x-scroll z-10">
        {cards.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </ul>
    </section>
  );
};

export default Recommendation;
