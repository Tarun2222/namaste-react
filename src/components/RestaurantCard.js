import {CDN_URl} from "../utils/constants";

const RestaurantCard = (props) => {
  // destructuring const RestaurantCard = ({resName,cuisine})
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[290px] rounded-lg bg-gray-100 hover:bg-gray-300" >
      <img
        className="rounded-lg h-[400px] w-[290px] "
        alt="res-logo"
        src={CDN_URl
          +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="flex-wrap">{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;