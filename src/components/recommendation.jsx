import Button from "./button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Card from "./card";
import { cards } from "../assets/constant";
import HomeIcon from "@mui/icons-material/Home";
import VillaIcon from "@mui/icons-material/Villa";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useReducer } from "react";

const Recommendation = () => {
  const initialState = {
    house: false,
    villa: false,
    apart: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "house":
        return { house: true, villa: false, apart: false };
      case "villa":
        return { house: false, villa: true, apart: false };
      case "apart":
        return { house: false, villa: false, apart: true };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBtn = (e) => {
    dispatch({ type: e.target.name });
  };

  return (
    <section className="w-full px-24 z-10">
      <div className="w-full h-fit mb-10">
        <p className="text-orange-300 font-semibold">--- Our Recommendations</p>
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Featured House</h1>
          <div className="flex gap-x-8 text-lg font-semibold">
            <Button
              onClick={handleBtn}
              name="house"
              className={`${
                state?.house
                  ? "bg-teal-100 border-teal-100 text-teal-700 border-2"
                  : "border-2 text-gray-400"
              } py-1 flex items-center gap-x-2`}
            >
              <HomeIcon /> House
            </Button>
            <Button
              onClick={handleBtn}
              name="villa"
              className={`${
                state?.villa
                  ? "bg-teal-100 border-teal-100 text-teal-700 border-2"
                  : "border-2 text-gray-400"
              } py-1 flex items-center gap-x-2`}
            >
              <VillaIcon /> Villa
            </Button>
            <Button
              onClick={handleBtn}
              name="apart"
              className={`${
                state?.apart
                  ? "bg-teal-100 border-teal-100 text-teal-700 border-2"
                  : "border-2 text-gray-400"
              } py-1 flex items-center gap-x-2`}
            >
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
