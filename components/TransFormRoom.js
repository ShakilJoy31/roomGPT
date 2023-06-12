import StartingPage from "../CSSfile/StartingPage.module.css";

const TransFormRoom = () => {
  return (
    <div className={`lg:px-32 md:px-24 px-2 py-8`}>
      <div className={`${StartingPage.bottomBorder} py-24`}>
        <div className="items-center justify-between lg:flex md:flex">

          <div className="">
            <h1 className="hidden text-4xl font-bold lg:block md:block">
              {" "}
              <span style={{ color: "#0F7FEF" }}>
                Transform any room
              </span> with <br /> just one photo
            </h1>

            <h1 className="flex justify-center text-2xl font-bold lg:hidden md:hidden">
              {" "}
              <span style={{ color: "#0F7FEF" }}>
                Transform any room
              </span> with just
            </h1>

            <h1 className="flex justify-center text-2xl font-bold lg:hidden md:hidden">
            one photo
            </h1>

            <p className="hidden py-6 lg:block md:block">
              See what our over 1 million users are saying about the product.
            </p>

            <p className="flex justify-center pt-6 lg:hidden md:hidden">
              See what our over 1 million users are saying
            </p>

            <p className="flex justify-center pb-6 lg:hidden md:hidden">
              about the product.
            </p>
            <button className={`${StartingPage.tryIt} py-2 px-8 hidden lg:block md:block`}>
              Try it now <span></span>
            </button>

            <button className={`${StartingPage.tryIt} py-2 px-8 block mx-auto mb-4 lg:hidden md:hidden`}>
              Try it now <span></span>
            </button>
          </div>

          <div className="hidden lg:flex md:flex gap-x-8">
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


          {/* For mobile device. */}
          <div className="flex gap-x-3 lg:hidden md:hidden">
            <div className="mt-[80px]">
              <img className="pb-2" src="https://i.ibb.co/G7kgYW9/Vector-7.png" alt="" />
              
              <img
                src="https://i.ibb.co/CvXM2X5/Rectangle-820.png"
                alt=""
              />
            </div>

            <img
              className="mb-[80px] w-42"
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
