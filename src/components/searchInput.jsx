import Button from "./button";

const SearchInput = () => {
  return (
    <form className="rounded-full h-fit w-full border-2 flex items-center pl-7">
      <img src="images/search.png" alt="search" className="w-7 h-7" />
      <input
        type="text"
        className="outline-none w-full px-5"
        placeholder="search location you want!"
      />
      <Button className="bg-teal-500 text-white h-12 px-7 text-lg flex gap-x-2 items-center justify-start">
        search <img src="images/arrowRight.png" alt="arrowRight" />
      </Button>
    </form>
  );
};

export default SearchInput;
