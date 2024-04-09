import React from 'react';

const EstateCard = ({ item }) => {
  const { image, price, location, estate_title, area, status, rating } = item;
  return (
    <div>
      <div className="card  shadow-xl border-2 border-slate-200 rounded-2xl p-6 h-full">
        <figure className="bg-[#F3F3F3] rounded-2xl">
          <img
            className="w-[370px]  h-64 py-3 rounded-3xl p-2 "
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className=" ">
          <div className="py-3">
            <div className="rating flex gap-2">
              {rating > 4 && (
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              )}
              {rating > 3 && (
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              )}
              {rating > 2 && (
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              )}

              {rating > 1 && (
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              )}
              {rating > 0 && (
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              )}
              {rating}
            </div>
          </div>
          <h2 className="card-title text-2xl font-bold">{estate_title}</h2>

          <hr />
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline">{location}</div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-xl">${price}</p>
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded bg-gray-800 text-gray-50 mt-4"
            >
              View Property
              <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-600">
                {status}
              </span>
            </button>
            <p>{area}sft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;