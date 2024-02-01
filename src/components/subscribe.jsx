import SearchInput from "./searchInput";

const Subscribe = () => {
  return (
    <section className="w-full px-24 h-[312px]">
      <div className="w-full h-full bg-radial-gradient-blue rounded-xl relative py-16 mb-2">
        <h1 className="font-bold text-4xl text-center block">
          Subscribe For More Info
        </h1>
        <h1 className="font-bold text-4xl text-center mb-10">
          and update from Hounter
        </h1>
        <SearchInput
          className="bg-white m-auto"
          img="images/mail.png"
          btn="Subscribe Now"
        />
      </div>
    </section>
  );
};

export default Subscribe;
