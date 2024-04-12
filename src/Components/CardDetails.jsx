import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const CardDetails = () => {
  const { id } = useParams();
  const cards = useLoaderData();
  const [data, setData] = useState([]);
  const fData = data.find(card => card.id == id) || [];
  console.log(cards);
  console.log(fData);
  console.log(id);

  useEffect(() => {
    setData(cards);
  }, [cards]);

  return (
    <div>
      <div className="hero min-h-screen mt-8 space-y-3 text-[#AD8B00]">
        <div className=" text-left">
          <div className=" rounded-lg  bg-[#F3F3F3] p-2 lg:p-4 ">
            <img
              className="h-[400px]  lg:h-full w-[400px] lg:w-full image-full"
              src={fData.image}
              alt=""
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl lg:text-5xl font-bold py-4">
              {fData.estate_title}
            </h1>
            <p className="py-6 "> {fData.description}</p>
            <hr />
            <div className="flex justify-between items-center">
              <p className="my-2 font-bold">
                Category :{' '}
                <span className="font-normal">{fData.segment_name}</span>{' '}
              </p>
              <p className="font-bold flex justify-center items-center">
                Review:
                <div className="rating flex gap-2">
                  {fData.rating > 4 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {fData.rating > 3 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {fData.rating > 2 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}

                  {fData.rating > 1 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {fData.rating > 0 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {fData.rating}
                </div>
              </p>
            </div>
            <hr />
            <div className=" my-4">
              <p className="font-bold text-xl ">Facilities : </p>

              <div className="grid grid-cols-2 gap-3">
                {fData.facilities?.map(item => (
                  <div
                    key={item.length}
                    className="text-[#AD8B00]  text-center flex justify-start items-center"
                  >
                    <FaAngleRight />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className="space-y-3">
              <div className="grid grid-cols-2 ">
                <p className="mt-3 font-bold">
                  Location:{' '}
                  <span className="font-normal  ">{fData.location}</span>
                </p>
                <p className="font-bold">
                  Status: <span className="font-normal ">{fData.status}</span>
                </p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-bold">
                  Area: <span className="font-normal ">{fData.area}</span>
                </p>
                <p className="font-bold">
                  Price{' '}
                  <span className="text-2xl text-orange-500">
                    ${fData.price}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
