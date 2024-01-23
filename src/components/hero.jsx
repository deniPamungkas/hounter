import Navbar from "./navbar";
import SearchInput from "./searchInput";

const Hero = () => {
  return (
    <section className="w-full h-[700px] flex relative">
      <Navbar />
      <div className="w-[1200px] h-[1200px] bg-radial-gradient-primary absolute -top-[500px] -left-[500px] z-0" />
      <div className="w-1/2 flex items-center pl-24">
        <div className="w-4/5 h-fit flex flex-col gap-y-8">
          <h1 className="text-5xl font-bold">
            Find The Place To Live Your Dreams Easily Here
          </h1>
          <p>
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>
          <SearchInput />
          <div>
            <p>Our Partnerships</p>
            <div className="flex gap-x-5 ">
              <img src="images/traveloka.png" alt="traveloka" />
              <img src="images/airbnb.png" alt="airbnb" />
              <img src="images/tripadvisor.png" alt="tripadvisor" />
              <img src="images/tiket.png" alt="tiket" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src="images/heroImg.png" alt="hero" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Hero;
