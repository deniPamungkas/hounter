import Button from "./button";
import PropTypes from "prop-types";

const SearchInput = (props) => {
  return (
    <form
      className={`rounded-full h-fit w-[496px] flex justify-between items-center pl-7 z-10 ${props.className}`}
    >
      <div className="flex items-center w-1/2 ">
        <img src={props.img} alt="search" />
        <input
          type="text"
          className="outline-none w-full px-3 bg-transparent"
          placeholder="search location you want!"
        />
      </div>
      <Button className="bg-primary text-white h-12 min-w-[109px] px-7 text-lg flex gap-x-2 items-center justify-start font-semibold">
        {props.btn}
      </Button>
    </form>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  btn: PropTypes.string,
};

export default SearchInput;
