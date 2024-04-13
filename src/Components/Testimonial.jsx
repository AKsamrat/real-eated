import React from 'react';
import { FaTwitter } from 'react-icons/fa';
const Testimonial = () => {
  return (
    <div className="mt-20 text-[#AD8B00]">
      <h3 className=" text-5xl font-bold text-center mb-12">
        Happy <span className="text-oranges">Clients says</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
        <div
          className="card card-compact  bg-base-10  border border-[#ad8a0058] shadow-xl p-4 md:p-8 lg:p-8 text-center "
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="700"
        >
          <figure>
            <img
              className="size-36"
              src="/user-1.png"
              alt="Shoes"
              data-aos="zoom-in-up"
              data-aos-duration="2500"
              data-aos-delay="50"
            />
          </figure>
          <div className="card-body space-y-4">
            <p
              className="opacity-80"
              data-aos="zoom-out-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="700"
              data-aos-duration="700"
            >
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div
              className="rating flex-1 justify-center"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="700"
            >
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
            <p
              className="text-blue-600 font-bold"
              data-aos="fade-left"
              data-aos-delay="1800"
              data-aos-duration="700"
            >
              Aurthen
            </p>
            <p
              className="font-bold"
              data-aos="fade-right"
              data-aos-delay="2100"
              data-aos-duration="700"
            >
              Banker
            </p>
            <div className="flex justify-between items-center ">
              <button
                className="flex justify-center items-center gap-2 text-lg font-bold flex-1"
                data-aos="fade-left"
                data-aos-delay="2200"
                data-aos-duration="700"
              >
                See On{' '}
                <span>
                  <FaTwitter />
                </span>{' '}
              </button>
              <p
                className=" lg:ml-16"
                data-aos="fade-right"
                data-aos-delay="2200"
                data-aos-duration="700"
              >
                Jun 10, 2024
              </p>
            </div>
          </div>
        </div>

        <div
          className="card card-compact  bg-base-10 border border-[#ad8a0058] shadow-xl md:p-8 lg:p-8 text-center"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-duration="700"
        >
          <figure>
            <img
              className="size-36"
              src="/user-2.png"
              alt="Shoes"
              data-aos="zoom-in-up"
              data-aos-duration="2500"
              data-aos-delay="50"
            />
          </figure>
          <div className="card-body space-y-4">
            <p
              className="opacity-80"
              data-aos="zoom-out-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="700"
              data-aos-duration="700"
            >
              Each comfortable, immaculate Beachfront Unit has a well equipped
              kitchen, a modern en-suite bathroom, and a private patio or
              balcony with spectacular uninterrupted sea views of Mercury Bay.
            </p>
            <div
              className="rating flex-1 justify-center"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="700"
            >
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
            <p
              className="text-blue-600 font-bold"
              data-aos="fade-left"
              data-aos-delay="1800"
              data-aos-duration="700"
            >
              Regina Miles
            </p>
            <p
              className="font-bold"
              data-aos="fade-right"
              data-aos-delay="2100"
              data-aos-duration="700"
            >
              Banker
            </p>
            <div className="flex justify-between items-center">
              <button
                className="flex justify-center items-center gap-2 text-lg font-bold"
                data-aos="fade-left"
                data-aos-delay="2200"
                data-aos-duration="700"
              >
                See On{' '}
                <span>
                  <FaTwitter />
                </span>{' '}
              </button>
              <p
                className="lg:ml-16"
                data-aos="fade-right"
                data-aos-delay="2200"
                data-aos-duration="700"
              >
                Jan 12, 2023
              </p>
            </div>
          </div>
        </div>

        <div
          className="card card-compact  bg-base-10 border border-[#ad8a0058] shadow-xl p-4 md:p-8 lg:p-8 text-center"
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="700"
        >
          <figure>
            <img
              className="size-36"
              src="/user-3.png"
              alt="Shoes"
              data-aos="zoom-in-up"
              data-aos-duration="2500"
              data-aos-delay="50"
            />
          </figure>
          <div className="card-body space-y-4">
            <p
              className="opacity-80"
              data-aos="zoom-out-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="700"
              data-aos-duration="700"
            >
              Our superb absolute beachfront location is the secret to the
              special charm of Beachfront Resort. Uniquely in Whitianga, and
              rarely anywhere on the Coromandel Peninsula, there is no road or
              traffi
            </p>
            <div
              className="rating flex-1 justify-center"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="700"
            >
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
            <p
              className="text-blue-600 font-bold"
              data-aos="fade-left"
              data-aos-delay="1800"
              data-aos-duration="700"
            >
              Bread
            </p>
            <p
              className="font-bold"
              data-aos="fade-right"
              data-aos-delay="2100"
              data-aos-duration="700"
            >
              Doctorr
            </p>
            <div className="flex justify-between items-center">
              <button
                className="flex justify-center items-center gap-2 text-lg font-bold"
                data-aos="fade-left"
                data-aos-delay="2200"
                data-aos-duration="700"
              >
                See On{' '}
                <span>
                  <FaTwitter />
                </span>{' '}
              </button>
              <p
                className="lg:ml-16"
                data-aos="fade-right"
                data-aos-delay="2200"
                data-aos-duration="700"
              >
                Jan 18, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
