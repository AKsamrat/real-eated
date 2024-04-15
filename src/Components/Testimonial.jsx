import React from 'react';
import { FaTwitter } from 'react-icons/fa';
const Testimonial = () => {
  return (
    <div className="mt-20 text-[#AD8B00]">
      <h3 className="text-2xl lg:text-5xl font-bold text-center ">
        Happy <span className="text-oranges">Clients says</span>
      </h3>
      <p className="text-center py-8 ">
        With Celebration, it’s quicker with the customer, the customer is more
        ensured <br /> of getting exactly what they ordered, and I’m all for the
        efficiency.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 overflow-hidden">
        <div
          className="card card-compact  bg-base-10  border border-[#ad8a0058] shadow-xl p-4 md:p-8 lg:p-8 text-center overflow-hidden"
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="700"
        >
          <figure>
            <img
              className="size-36 overflow-hidden"
              src="/user-1.png"
              alt="Shoes"
              data-aos="zoom-in-up"
              data-aos-duration="2500"
              data-aos-delay="50"
            />
          </figure>
          <div className="card-body space-y-4">
            <p
              className="opacity-80 overflow-hidden"
              data-aos="zoom-out-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="700"
              data-aos-duration="700"
            >
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.
            </p>
            <div
              className="rating flex-1 justify-center overflow-hidden pb-10"
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
              className="text-blue-600 font-bold overflow-hidden m-0"
              data-aos="fade-left"
              data-aos-delay="1700"
              data-aos-duration="700"
            >
              Aurthen
            </p>
            <p
              className="font-bold overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="1700"
              data-aos-duration="700"
            >
              Banker
            </p>
            <div className="flex justify-between items-center ">
              <button
                className="flex justify-center items-center gap-2 text-lg font-bold overflow-hidden"
                data-aos="fade-left"
                data-aos-delay="1800"
                data-aos-duration="700"
              >
                See On{' '}
                <span className="text-blue-400">
                  <FaTwitter />
                </span>{' '}
              </button>
              <p
                className=" lg:ml-16 overflow-hidden"
                data-aos="fade-right"
                data-aos-delay="1800"
                data-aos-duration="700"
              >
                Jun 10, 2024
              </p>
            </div>
          </div>
        </div>

        <div
          className="card card-compact  bg-base-10 border border-[#ad8a0058] shadow-xl md:p-8 lg:p-8 text-center overflow-hidden"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-duration="700"
        >
          <figure>
            <img
              className="size-36 overflow-hidden"
              src="/user-2.png"
              alt="Shoes"
              data-aos="zoom-in-up"
              data-aos-duration="2500"
              data-aos-delay="50"
            />
          </figure>
          <div className="card-body space-y-2">
            <p
              className="opacity-80 overflow-hidden"
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
              className="rating flex-1 justify-center overflow-hidden pb-10"
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
              className="text-blue-600 font-bold overflow-hidden"
              data-aos="fade-left"
              data-aos-delay="1700"
              data-aos-duration="700"
            >
              Regina Miles
            </p>
            <p
              className="font-bold overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="1700"
              data-aos-duration="700"
            >
              Banker
            </p>
            <div className="flex justify-between items-center">
              <button
                className="flex justify-center items-center gap-2 text-lg font-bold overflow-hidden"
                data-aos="fade-left"
                data-aos-delay="1800"
                data-aos-duration="700"
              >
                See On{' '}
                <span className="text-blue-400">
                  <FaTwitter />
                </span>{' '}
              </button>
              <p
                className="lg:ml-16 overflow-hidden"
                data-aos="fade-right"
                data-aos-delay="1800"
                data-aos-duration="700"
              >
                Jan 12, 2023
              </p>
            </div>
          </div>
        </div>

        <div
          className="card card-compact  bg-base-10 border border-[#ad8a0058] shadow-xl p-4 md:p-8 lg:p-8 text-center overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="700"
        >
          <figure>
            <img
              className="size-36 overflow-hidden"
              src="/user-3.png"
              alt="Shoes"
              data-aos="zoom-in-up"
              data-aos-duration="2500"
              data-aos-delay="50"
            />
          </figure>
          <div className="card-body space-y-4">
            <p
              className="opacity-80 overflow-hidden"
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
              className="rating flex-1 justify-center pb-10 overflow-hidden"
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
              className="text-blue-600 font-bold overflow-hidden"
              data-aos="fade-left"
              data-aos-delay="1700"
              data-aos-duration="700"
            >
              Bread
            </p>
            <p
              className="font-bold overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="1700"
              data-aos-duration="700"
            >
              Doctorr
            </p>
            <div className="flex justify-between items-center">
              <button
                className="flex justify-center items-center gap-2 text-lg font-bold overflow-hidden"
                data-aos="fade-left"
                data-aos-delay="1800"
                data-aos-duration="700"
              >
                See On{' '}
                <span className="text-blue-400">
                  <FaTwitter />
                </span>{' '}
              </button>
              <p
                className="lg:ml-16 overflow-hidden"
                data-aos="fade-right"
                data-aos-delay="1800"
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
