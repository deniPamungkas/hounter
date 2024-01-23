import Button from "./button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Card from "./card";
import { cards } from "../assets/constant";

const Recommendation = () => {
  return (
    <section className="w-full px-24">
      <div className="w-full h-fit">
        <p className="text-orange-300 font-semibold">--- Our Recommendations</p>
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Featured House</h1>
          <div className="flex gap-x-8 text-lg">
            <Button className="border-2 py-1">House</Button>
            <Button className="border-2 py-1">Villa</Button>
            <Button className="border-2 py-1">Apartment</Button>
          </div>
          <div className="flex gap-x-3">
            <Button className="bg-teal-600 px-4">
              <ArrowBackIosNewIcon style={{ color: "white" }} />
            </Button>
            <Button>
              <ArrowForwardIosIcon />
            </Button>
          </div>
        </div>
      </div>
      <ul className="flex gap-x-10">
        {cards.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </ul>
    </section>
  );
};

export default Recommendation;
