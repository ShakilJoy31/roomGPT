import { useEffect, useState } from "react";
import StartingPage from "../CSSfile/StartingPage.module.css";
import { UserStore } from "../userStore";

const TransFormRoom = () => {
  const { user, setUser } = UserStore.useContainer();
  return (
    <div className={`lg:px-[135px] md:px-24 px-2 py-8`}>
      <div className={`${StartingPage.bottomBorder} pb-[132px]`}>
        <div className={`items-center justify-between lg:flex md:flex ${StartingPage.mobileBackground}`}>
          <div className="">
            <h1 className={`hidden font-bold lg:block md:block ${StartingPage.transformRoom}`}>
              {" "}
              <span style={{ color: "#0F7FEF" }}>
                Transform any room
              </span> with <br /> just one photo
            </h1>

            <h1 className="flex justify-center text-xl font-bold lg:hidden md:hidden">
              <span>
                <span style={{ color: "#0F7FEF" }}>Transform any room</span>{" "}
                <span>with</span>
              </span>
            </h1>

            <h1 className="flex justify-center text-xl font-bold lg:hidden md:hidden">
              <span>
                <span> just one photo</span>
              </span>
            </h1>

            <p className={`hidden py-6 lg:block md:block ${StartingPage.ourReview}`}>
              See what our over 1 million users are saying about the product.
            </p>

            <p className="flex justify-center pt-6 lg:hidden md:hidden">
              See what our over 1 million users are saying
            </p>

            <p className="flex justify-center pb-6 lg:hidden md:hidden">
              about the product.
            </p>

            <button
              className={`${StartingPage.tryIt} py-2 px-8 hidden lg:block md:block`}
            >
              Try it now <span></span>
            </button>

            <button
              className={`${StartingPage.tryIt} py-2 px-8 block mx-auto mb-4 lg:hidden md:hidden`}
            >
              Try it now <span></span>
            </button>
            
          </div>

          <div className="hidden lg:flex md:flex">
            <img src="https://i.ibb.co/yqYMt4Y/Group-1000003859.png" alt="" />
          </div>

          {/* For mobile device. */}
          <div className="flex gap-x-3 lg:hidden md:hidden">
          <img src="https://i.ibb.co/yqYMt4Y/Group-1000003859.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransFormRoom;
