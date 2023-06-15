import { useRouter } from "next/router";
import StartingPage from "../CSSfile/StartingPage.module.css";
import { useEffect, useState } from "react";
import { UserStore } from "../userStore";

const BuyRoomGPT = () => {
  const { user, setUser } = UserStore.useContainer();
  const router = useRouter();
  return (
    <div className="px-2 lg:px-32 md:px-24">
      <h1 className={`lg:flex md:flex justify-center text-2xl hidden font-bold ${router.pathname == '/pricing' ? '' : 'mt-[155px] mb-[80px]'} ${StartingPage.howItWorkscss}`}>
        Buy
        <span style={{ color: "#0F7FEF" }} className="mx-3">
          {" "}
          RoomGPT
        </span>
        Credits
      </h1>

      <div className={`${router.pathname == '/pricing' ? 'lg:mb-24 md:mb-20 mt-[25px] lg:flex lg:justify-center hidden' : 'hidden'}`}>
      <p className="">You have <span style={{color: '#0F7FEF'}}>2 credits.</span> Join thousands of happy customers by buying more below.</p>
      </div>

      <h1 style={{
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '125%',
      }} className={`flex justify-center mb-[25px] lg:hidden md:hidden font-bold`}>
        Buy
        <span style={{ color: "#0F7FEF" }} className="mx-3">
          {" "}
          RoomGPT
        </span>
        Credits
      </h1>

      <div className={`${StartingPage.BoroBackground}`}>
        <div className='flex justify-center'>
        <div
          className={`lg:flex lg:justify-between `}
        >
          {/* ${(user == "white") ? StartingPage.buyCreditCard : StartingPage.buyCreditCardBlack} */}
          {/* grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 */}
          <div className={`${(user == "white") ? StartingPage.buyCreditCard : StartingPage.buyCreditCardBlack} mb-[24px] lg:mb-0 md:mb-0 py-5 pl-6 pr-8 w-[328px] lg:w-[370px] h-[396px] `}>
            <div>
              <p
                style={{ background: "#F1F1F1", borderRadius: "32px" }}
                className={`flex justify-center px-2 py-2 text-xl font-bold w-44 ${StartingPage.credit25}`}
              >
                25 credits
              </p>
            </div>
            <div className="my-6">
              <p className={`${StartingPage.for20}`}>25 room redesigns</p>
              <p className={`${StartingPage.for20}`}>Every design available</p>
            </div>
            <div className="mb-6">
              <p className={`${StartingPage.usd} text-2xl font-bold`}>
                <span style={{ color: "#8B8D8E" }}>US</span>$7
              </p>
            </div>
            <div className="flex justify-center">
              <button className={`${StartingPage.payNowButton} py-3 px-24`}>
                {" "}
                <span style={{ color: "white" }}>Pay Now</span>{" "}
              </button>
            </div>
          </div>

          <div className="lg:mt-[-45px] md:mt-[-45px] mt-[-10px] lg:mx-[30px] md:mx-[15px]">
            <p
              className={`flex justify-center py-3 ${StartingPage.mostPopular} w-[328px] lg:w-[370px]`}
            >
              Most Popular
            </p>
            <div
              className={`${StartingPage.buyCreditCardWithDiffBack} py-5 pl-6 pr-8 text-white w-[328px] lg:w-[370px] h-[396px] mb-[24px] lg:mb-0 md:mb-0`}
            >
              <div>
                <p
                  style={{ background: "#409FFF", borderRadius: "32px" }}
                  className={`flex justify-center px-2 py-2 text-xl font-bold w-44 ${StartingPage.credit25}`}
                >
                  25 credits
                </p>
              </div>
              <div className="my-6">
                <p className={`${StartingPage.for20}`}>25 room redesigns</p>
                <p className={`${StartingPage.for20}`}>Every design available</p>
              </div>
              <div className="mb-6">
                <p className={`${StartingPage.usd} text-2xl font-bold`}>
                  <span style={{ color: "#8B8D8E" }}>US</span>$7
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  className={`${StartingPage.payNowButtonMiddle} py-3 px-24 `}
                >
                  {" "}
                  <span style={{ color: "#0f7fef" }}>Pay Now</span>{" "}
                </button>
              </div>
            </div>
          </div>

          <div className={`${(user == "white") ? StartingPage.buyCreditCard : StartingPage.buyCreditCardBlack} py-5 pl-6 pr-8 w-[328px] lg:w-[370px] h-[396px] `}>
            <div>
              <p
                style={{ background: "#F1F1F1", borderRadius: "32px" }}
                className={`flex justify-center px-2 py-2 text-xl font-bold w-44 ${StartingPage.credit25}`}
              >
                25 credits
              </p>
            </div>
            <div className="my-6">
              <p className={`${StartingPage.for20}`}>25 room redesigns</p>
              <p className={`${StartingPage.for20}`}>Every design available</p>
            </div>
            <div className="mb-6">
              <p className={`${StartingPage.usd} text-2xl font-bold`}>
                <span style={{ color: "#8B8D8E" }}>US</span>$7
              </p>
            </div>
            <div className="flex justify-center">
              <button className={`${StartingPage.payNowButton} py-3 px-24`}>
                {" "}
                <span style={{ color: "white" }}>Pay Now</span>{" "}
              </button>
            </div>
          </div>
        </div>
        </div>
        

        {/* Whats included */}
        <div
          className={`${(user == "white") ? StartingPage.boroCard : StartingPage.boroCardBlack} lg:flex md:flex justify-between items-center mt-[40px] lg:mt-[65px] md:mt[52px]`}
        >
          <h1 className="hidden text-3xl font-bold lg:block md:block ">
            What is <br /> included
          </h1>

          <h1 className="block mx-auto text-3xl font-bold lg:hidden md:hidden">
            What is included
          </h1>

          <div className={`${StartingPage.borderDivider} hidden lg:block md:block`}></div>

          <div>
            <div className={`lg:flex md:flex justify-center`}>

              <div>
                <div className="flex items-center my-6">
                  <img
                    className="w-4 mr-2"
                    src="https://i.ibb.co/hRFHk74/Screenshot-1355-removebg-preview.png"
                    alt=""
                  />
                  <p>Premium support by email</p>
                </div>
                <div className="flex items-center my-6">
                  <img
                    className="w-4 mr-2"
                    src="https://i.ibb.co/hRFHk74/Screenshot-1355-removebg-preview.png"
                    alt=""
                  />
                  <p>Commercial usage of photos</p>
                </div>
                <div className="flex items-center my-6">
                  <img
                    className="w-4 mr-2"
                    src="https://i.ibb.co/hRFHk74/Screenshot-1355-removebg-preview.png"
                    alt=""
                  />
                  <p>Coming Soon: Save your rooms in a dashboard</p>
                </div>
              </div>

              <div className="lg:ml-6 md:ml-4">
                <div className="flex items-center my-6">
                  <img
                    className="w-4 mr-2"
                    src="https://i.ibb.co/hRFHk74/Screenshot-1355-removebg-preview.png"
                    alt=""
                  />
                  <p>Ability to request features</p>
                </div>
                <div className="flex items-center my-6">
                  <img
                    className="w-4 mr-2"
                    src="https://i.ibb.co/hRFHk74/Screenshot-1355-removebg-preview.png"
                    alt=""
                  />
                  <p>Early access to new features</p>
                </div>
                <div className="flex items-center my-6">
                  <img
                    className="w-4 mr-2"
                    src="https://i.ibb.co/hRFHk74/Screenshot-1355-removebg-preview.png"
                    alt=""
                  />
                  <p>Coming Soon: Premium room types and styles</p>
                </div>
              </div>
            </div>

            <p>Interested in team or bulk pricing? Email <span className="font-bold">hassan@roomgpt.io</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyRoomGPT;

// background: radial-gradient(50% 50% at 50% 50%, rgba(73, 15, 239, 0.12) 0%, rgba(255, 255, 255, 0) 100%);
