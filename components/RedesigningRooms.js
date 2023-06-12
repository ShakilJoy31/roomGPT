import StartingPage from "../CSSfile/StartingPage.module.css";

const RedesigningRooms = () => {
  return (
    <div>
      <div clssName={`w-full hero ${StartingPage.homeBackground}`}>
        <div className="flex flex-col justify-between w-full lg:pl-32 md:pl-24 lg:flex-row">
          
          <div>
            <p className={`${StartingPage.oneMillion} flex justify-center lg:block md:block`}>
              Used by over 1 Million home design enthusiasts
            </p>

            <h1 className="hidden my-10 text-5xl font-bold md:text-4xl lg:block md:block">
              Redesigning <br /> Rooms in Seconds <br />{" "}
              <span style={{ color: "#0F7FEF" }}>Using AI</span>
            </h1>

            <h1 className="block my-4 text-2xl font-bold lg:hidden md:hidden">
              <span className="flex justify-center">Redesigning Rooms in</span>
              <span style={{ color: "#0F7FEF" }} className="flex justify-center">Seconds Using AI</span>
            </h1>

            <button
              className={`btn normal-case hidden lg:block md:block ${StartingPage.redesigningButton} border-0`}
            >
                <span style={{color: 'white'}}>
              Redesign your room
                </span>
            </button>

            <button
              className={`btn normal-case block mb-4 mx-auto lg:hidden md:hidden ${StartingPage.redesigningButton} border-0`}
            >
                <span style={{color: 'white'}}>
              Redesign your room
                </span>
            </button>
          </div>

          <div className={`w-96 carousel ${StartingPage.imageBorder}`}>
            <div className="w-1/2 carousel-item">
              <img
                src="https://live.staticflickr.com/65535/52966744687_5719297bda_m.jpg"
                className="w-full"
              />
            </div>
            <div className="w-1/2 carousel-item">
              <img
                src="https://live.staticflickr.com/65535/52967485269_1f74f6e5ef_m.jpg"
                className="w-full"
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


          <img className="block mx-auto my-5"
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
