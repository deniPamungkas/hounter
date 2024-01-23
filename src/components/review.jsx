import Card2 from "./card2";

const Review = () => {
  return (
    <section className="w-full px-24 h-[664px] relative overflow-hidden z-10">
      <div className="w-[700px] h-[700px] bg-radial-gradient-yellow absolute -right-[250px] top-[40px] rounded-full z-0" />
      <div className="flex flex-col items-center gap-y-2">
        <p className="text-orange-300 font-semibold">See Our Review</p>
        <h1 className="font-bold text-4xl">What Our User Say About Us</h1>
      </div>
      <div>
        <Card2 />
      </div>
    </section>
  );
};

export default Review;
