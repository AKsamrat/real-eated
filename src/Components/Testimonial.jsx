import React from 'react';
import { FaTwitter } from 'react-icons/fa';
const Testimonial = () => {
  return (
    <div className="mt-20 text-[#AD8B00]">
      <h3 className=" text-5xl font-bold text-center mb-12">
        Happy <span className="text-oranges">Clients says</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
        <div className="card card-compact  bg-base-10  border border-[#ad8a0058] shadow-xl p-4 md:p-8 lg:p-8 text-center ">
          <figure>
            <img className="size-36" src="/user-1.png" alt="Shoes" />
          </figure>
          <div className="card-body space-y-4">
            <p className="opacity-80">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="rating flex-1 justify-center">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-blue-600 font-bold">Regina Miles</p>
            <p className="font-bold">Banker</p>
            <div className="flex justify-between items-center">
              <button className="flex justify-center items-center gap-2 text-lg font-bold">
                See On{' '}
                <span>
                  <FaTwitter />
                </span>{' '}
              </button>
              <p>Jan 18, 2024</p>
            </div>
          </div>
        </div>

        <div className="card card-compact  bg-base-10 border border-[#ad8a0058] shadow-xl md:p-8 lg:p-8 text-center">
          <figure>
            <img className="size-36" src="/user-2.png" alt="Shoes" />
          </figure>
          <div className="card-body space-y-4">
            <p className="opacity-80">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="rating flex-1 justify-center">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-blue-600 font-bold">Regina Miles</p>
            <p className="font-bold">Banker</p>
            <div className="flex justify-between items-center">
              <button className="flex justify-center items-center gap-2 text-lg font-bold">
                See On{' '}
                <span>
                  <FaTwitter />
                </span>{' '}
              </button>
              <p>Jan 18, 2024</p>
            </div>
          </div>
        </div>

        <div className="card card-compact  bg-base-10 border border-[#ad8a0058] shadow-xl p-4 md:p-8 lg:p-8 text-center">
          <figure>
            <img className="size-36" src="/user-3.png" alt="Shoes" />
          </figure>
          <div className="card-body space-y-4">
            <p className="opacity-80">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="rating flex-1 justify-center">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-blue-600 font-bold">Regina Miles</p>
            <p className="font-bold">Banker</p>
            <div className="flex justify-between items-center">
              <button className="flex justify-center items-center gap-2 text-lg font-bold">
                See On{' '}
                <span>
                  <FaTwitter />
                </span>{' '}
              </button>
              <p>Jan 18, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
