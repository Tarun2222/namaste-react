import { CDN_URl } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-bol">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.finalPrice / 100 ||
                  item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="p-4">
            <div className="absolute">
            <button className="p-1 bg-black text-white shadow-lg rounded-lg mx-4 my-28 px-4"> ADD +</button>
            </div>
            <img className="h-36 w-28 rounded-lg"src={CDN_URl + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
