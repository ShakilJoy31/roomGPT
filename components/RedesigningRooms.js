import { useEffect, useState } from "react";
import StartingPage from "../CSSfile/StartingPage.module.css";
import { UserStore } from "../userStore";
import { AiOutlineLogout } from "react-icons/ai";

const RedesigningRooms = () => {
  const { user, setUser } = UserStore.useContainer();
  return (
    <div className="lg:mt-[65px] md:mt-[45px]">
      <div clssName={`w-full hero ${StartingPage.homeBackground}`}>
        <div
          className={`flex flex-col justify-between w-full lg:pl-[135px] md:pl-24 lg:flex-row ${StartingPage.HomeHoleBackground}`}
        >
          <div className={`${StartingPage.primaryContent}`}>

            <div className={`${StartingPage.oneMillion}`}>
              <p
                className={`flex justify-center lg:block md:block`}
                >
                <span>Used by over</span>{" "}
                <span style={{ color: "#0F7FEF" }} className="">
                  1 Million
                </span>{" "}
                <span>home design enthusiasts</span>
              </p>
            </div>

            
            <h1
              className={`hidden lg:mt-[40px] mb-[60px] lg:block md:block ${StartingPage.RoomInSec}`}
            >
              Redesigning <br /> Rooms in Seconds <br />{" "}
              <span style={{ color: "#0F7FEF" }}>Using AI</span>
            </h1>

            <h1
              className={`block my-4 text-2xl font-bold lg:hidden md:hidden ${StartingPage.HomeForMobile}`}
            >
              <span className="flex justify-center">Redesigning Rooms in</span>
              <span
                style={{ color: "#0F7FEF" }}
                className="flex justify-center"
              >
                Seconds Using AI
              </span>
            </h1>

            <button
              className={`btn normal-case hidden lg:flex md:flex justify-between items-center ${StartingPage.redesigningButton} border-0`}
            >
              <span style={{ color: "white", marginRight: '13px' }}>Redesign your room</span>
              <span><AiOutlineLogout size={25} color={'white'}></AiOutlineLogout></span>
            </button>

            {/* For mobile before after and instantly redesign */}

            <button
              className={`btn normal-case flex justify-between items-center mb-4 mx-auto lg:hidden md:hidden ${StartingPage.redesigningButton} border-0`}
            >
              <span style={{ color: "white", marginRight: '12px' }}>Redesign your room</span>
              <span><AiOutlineLogout size={25} color={'white'}></AiOutlineLogout></span>
            </button>
          </div>

          {/* <img src="https://i.ibb.co/4ZD3sMz/Screenshot-1351.png" alt="" /> */}
          <img
            className="hidden lg:block md:block"
            src="https://i.ibb.co/McGfymd/Group-1000003861.png"
            alt=""
          />

          <img
            className="block lg:hidden md:hidden"
            src="https://i.ibb.co/mXGpNpP/Group-1000003889.png"
            alt=""
          />

          {/* <div
            className={`flex justify-center carousel ${StartingPage.imageBorder} px-2`}
          >
            <div className=" carousel-item">
              <img
                src="https://live.staticflickr.com/65535/52966744687_5719297bda_m.jpg"
                className={`${StartingPage.homeImag} hidden lg:block md:block`}
              />

              <img
                src="https://live.staticflickr.com/65535/52966744687_5719297bda_m.jpg"
                className={` block md:hidden lg:hidden`}
              />
            </div>
            <div className=" carousel-item">
              <img
                src="https://live.staticflickr.com/65535/52967485269_1f74f6e5ef_m.jpg"
                className={`hidden w-full lg:block md:block ${StartingPage.homeImag}`}
              />

              <img
                src="https://i.ibb.co/nbz5ZBf/Rectangle-817-1.png"
                className={`block w-full lg:hidden md:hidden`}
              />
            </div>
          </div> */}
        </div>
      </div>

      <div className={`lg:px-[141px] lg:mt-[157px] hidden lg:block md:block`}>
        <div className={`flex justify-between`}>
          <img src="https://i.ibb.co/1bVwYxb/Frame-113.png" alt="" />
          <img src="https://i.ibb.co/DWtYzts/Frame-dsgda.png" alt="" />
          <img src="https://i.ibb.co/KsGGD9k/Frameghgd-113.png" alt="" />
          <img src="https://i.ibb.co/CHGdT3Z/Frafdgggggme-113.png" alt="" />
          <img src="https://i.ibb.co/YpYtQJX/Frazzzzzme-113.png" alt="" />
        </div>
      </div>

      {/* For mobile */}
      <div className={`px-2 mt-[60px] block lg:hidden md:hidden`}>
        <div className={``}>
          <div className="flex justify-between">
            <img src="https://i.ibb.co/1bVwYxb/Frame-113.png" alt="" />
            <img src="https://i.ibb.co/DWtYzts/Frame-dsgda.png" alt="" />
          </div>

          <img
            className="block mx-auto my-5"
            src="https://i.ibb.co/KsGGD9k/Frameghgd-113.png"
            alt=""
          />

          <div className="flex justify-between">
            <img src="https://i.ibb.co/CHGdT3Z/Frafdgggggme-113.png" alt="" />
            <img src="https://i.ibb.co/YpYtQJX/Frazzzzzme-113.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedesigningRooms;
