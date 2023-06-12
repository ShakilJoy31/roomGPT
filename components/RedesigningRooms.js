import StartingPage from "../CSSfile/StartingPage.module.css";

const RedesigningRooms = () => {
  return (
    <div>
      <div className={`w-full hero ${StartingPage.homeBackground}`}>
        <div className="flex flex-col justify-between w-full pl-32 lg:flex-row-reverse">
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

          <div>
            <p className={`${StartingPage.oneMillion}`}>
              Used by over 1 Million home design enthusiasts
            </p>
            <h1 className="my-10 text-5xl font-bold">
              Redesigning <br /> Rooms in Seconds <br />{" "}
              <span style={{ color: "#0F7FEF" }}>Using AI</span>
            </h1>
            <button
              className={`btn normal-case ${StartingPage.redesigningButton} border-0`}
            >
                <span style={{color: 'white'}}>
              Redesign your room
                </span>
            </button>
          </div>
        </div>
      </div>

      <div className={`px-32 my-24`}>
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
    </div>
  );
};

export default RedesigningRooms;
