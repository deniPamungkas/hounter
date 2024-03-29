import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="w-[340px] h-[552px] flex flex-col justify-between">
      <div className="w-full h-[382px] rounded-xl overflow-hidden relative">
        <img
          src={`images/${props.data.img}`}
          alt="rectangle"
          className="w-full h-full"
        />
        <div
          className={`py-2 px-4 ${
            props.data.status == "Popular" && "text-redd bg-red-100"
          } ${props.data.status == "New House" && "text-bluee bg-blue-100 "} ${
            props.data.status == "Best Deals" && "text-primary bg-green-100 "
          } font-semibold text-sm absolute left-4 bottom-4 flex items-center gap-x-3  rounded-full`}
        >
          {props.data.status == "Popular" && (
            <img src={`images/flame.png`} alt="popular" className="w-3 h-4" />
          )}
          {props.data.status == "New House" && (
            <img src={`images/housee.png`} alt="house" className="w-3 h-4" />
          )}
          {props.data.status == "Best Deals" && (
            <img src={`images/wallet.png`} alt="wallet" className="w-3 h-4" />
          )}
          <span>{props.data.status}</span>
        </div>
      </div>
      <div className="w-full h-[72px] flex flex-col justify-between">
        <h1 className="text-2xl font-bold">{props.data.name}</h1>
        <h2 className="text-xl font-semibold">
          $ {new Intl.NumberFormat("en-US").format(props.data.price)}
        </h2>
      </div>
      <div className="w-full h-[50px] flex justify-between">
        <div className="w-[50px] h-full flex justify-start items-center">
          <img src={`images/${props.data.owner.avatar}`} alt="avatar" />
        </div>
        <div className="w-[275px] h-full">
          <h1 className="text-xl font-semibold">{props.data.owner.name}</h1>
          <h2 className="text-lg truncate">{props.data.owner.address}</h2>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  owner: PropTypes.object,
  data: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
