import StartingPage from "../CSSfile/StartingPage.module.css";

const TransFormRoom = () => {
  return (
    <div className={`px-32 py-8`}>
      <div className={`${StartingPage.bottomBorder} py-24`}>
        <div className="flex items-center justify-between">

          <div className="">
            <h1 className="text-4xl font-bold">
              {" "}
              <span style={{ color: "#0F7FEF" }}>
                Transform any room
              </span> with <br /> just one photo
            </h1>
            <p className="py-6">
              See what our over 1 million users are saying about the product.
            </p>
            <button className={`${StartingPage.tryIt} py-2 px-8`}>
              Try it now <span></span>
            </button>
          </div>

          <div className="flex gap-x-8">
            <div className="mt-[120px]">
              <img className="pb-2 pl-36" src="https://i.ibb.co/G7kgYW9/Vector-7.png" alt="" />
              
              <img
                src="https://i.ibb.co/CvXM2X5/Rectangle-820.png"
                alt=""
              />
            </div>

            <img
              className="mb-[120px]"
              src="https://i.ibb.co/PTcCg21/Rectangle-821.png"
              alt=""
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TransFormRoom;
