import StartingPage from "../CSSfile/StartingPage.module.css";

const RedesigningRooms = () => {
  return (
    <div>
      <div clssName={`w-full hero ${StartingPage.homeBackground}`}>
        <div
          className={`flex flex-col justify-between w-full lg:pl-32 md:pl-24 lg:flex-row ${StartingPage.HomeHoleBackground}`}
        >
          <div className={`${StartingPage.primaryContent}`}>
            <p
              className={`${StartingPage.oneMillion} flex justify-center lg:block md:block`}
            >
              Used by over <span style={{color:'#0F7FEF'}} className="mx-2">1 Million</span> home design enthusiasts
            </p>

            <h1 className={`hidden my-10 text-5xl font-bold md:text-4xl lg:block md:block ${StartingPage.RoomInSec}`}>
              Redesigning <br /> Rooms in Seconds <br />{" "}
              <span style={{ color: "#0F7FEF" }}>Using AI</span>
            </h1>

            <h1 className={`block my-4 text-2xl font-bold lg:hidden md:hidden ${StartingPage.HomeForMobile}`}>
              <span className="flex justify-center">Redesigning Rooms in</span>
              <span
                style={{ color: "#0F7FEF" }}
                className="flex justify-center"
              >
                Seconds Using AI
              </span>
            </h1>

            <button
              className={`btn normal-case hidden lg:block md:block ${StartingPage.redesigningButton} border-0`}
            >
              <span style={{ color: "white" }}>Redesign your room</span>
            </button>

            {/* Instantly Redesign */}

            <button
              className={`btn normal-case hidden lg:block md:block ${StartingPage.instantlyRedesignButton} border-0`}
            >
              <span style={{ color: "black" }} className="flex items-center">
                <img className="mr-4" src="https://i.ibb.co/SvwQmQx/Vector-2.png" alt="" />
                <span>Instantly Redesign</span>
              </span>
            </button>

            {/* For mobile */}
            <button
              className={`btn normal-case block lg:hidden md:hidden ${StartingPage.instantlyRedesignButtonForMobile} border-0`}
            >
              <span style={{ color: "black" }} className="flex items-center">
                <img className="mr-4" src="https://i.ibb.co/SvwQmQx/Vector-2.png" alt="" />
                <span>Instantly Redesign</span>
              </span>
            </button>


            {/* Before */}
            <button
              className={`btn normal-case hidden lg:block md:block ${StartingPage.before} border-0`}
            >
              <span style={{ color: "black" }} className="flex items-center">
                <span>Before</span>
              </span>
            </button>

            {/* For mobile */}
            <button
              className={`btn normal-case block lg:hidden md:hidden ${StartingPage.beforeMobile} border-0`}
            >
              <span style={{ color: "black" }} className="flex items-center">
                <span>Before</span>
              </span>
            </button>

            {/* After */}
            <button
              className={`btn normal-case hidden lg:block md:block ${StartingPage.after} border-0`}
            >
              <span style={{ color: "black" }} className="flex items-center">
                <span>After</span>
              </span>
            </button>

            {/* For mobile */}
            <button
              className={`btn normal-case block lg:hidden md:hidden ${StartingPage.afterMobile} border-0`}
            >
              <span style={{ color: "black" }} className="flex items-center">
                <span>After</span>
              </span>
            </button>




            {/* For mobile before after and instantly redesign */}

            <button
              className={`btn normal-case block mb-4 mx-auto lg:hidden md:hidden ${StartingPage.redesigningButton} border-0`}
            >
              <span style={{ color: "white" }}>Redesign your room</span>
            </button>
          </div>

          <div
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
          </div>
        </div>
      </div>

      <div className={`px-32 my-24 hidden lg:block md:block`}>
        <div className={`flex justify-between`}>
          <img
            src="https://live.staticflickr.com/65535/52967308051_9e8b71c50e_m.jpg"
            alt=""
          />
          <img
            src="https://live.staticflickr.com/65535/52967766958_88df72c00c_m.jpg"
            alt=""
          />
          <img
            src="https://live.staticflickr.com/65535/52967766083_fe7ca1e1af_m.jpg"
            alt=""
          />
          <img
            src="https://live.staticflickr.com/65535/52967447384_94549ceea0_m.jpg"
            alt=""
          />
          <img
            src="https://live.staticflickr.com/65535/52967447304_1e5a1cb85d_m.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={`px-2 my-24 block lg:hidden md:hidden`}>
        <div className={``}>
          <div className="flex justify-between">
            <img
              src="https://live.staticflickr.com/65535/52967308051_9e8b71c50e_m.jpg"
              alt=""
            />
            <img
              src="https://live.staticflickr.com/65535/52967766958_88df72c00c_m.jpg"
              alt=""
            />
          </div>

          <img
            className="block mx-auto my-5"
            src="https://live.staticflickr.com/65535/52967766083_fe7ca1e1af_m.jpg"
            alt=""
          />

          <div className="flex justify-between">
            <img
              src="https://live.staticflickr.com/65535/52967447384_94549ceea0_m.jpg"
              alt=""
            />
            <img
              src="https://live.staticflickr.com/65535/52967447304_1e5a1cb85d_m.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedesigningRooms;
