import { useEffect, useState } from "react";
import StartingPage from "../CSSfile/StartingPage.module.css";
import { UserStore } from "../userStore";

const CoolImage = () => {
  const { user, setUser } = UserStore.useContainer();
  return (
    <div>
      <p className={`hidden lg:flex md:flex justify-center mt-[155px] ${StartingPage.coolImageHeading}`}> 
        Some cool images that
      </p>
      <p
        style={{ color: "#0F7FEF" }}
        className={`hidden lg:flex md:flex justify-center ${StartingPage.coolImageHeading}`}
      >
        roomGPT generated
      </p>


      <p className={`flex md:hidden lg:hidden justify-center mt-8 ${StartingPage.coolImageHeadingMobile}`}> 
        Some cool images that
      </p>
      <p
        style={{ color: "#0F7FEF" }}
        className={`flex md:hidden lg:hidden justify-center mb-8 ${StartingPage.coolImageHeadingMobile}`}
      >
        roomGPT generated
      </p>

      <div className="mt-[148px] mb-[223px]">
        <div className="items-center justify-center hidden w-full lg:flex md:flex">
          <img
            src="https://i.ibb.co/mhBJKWK/Rectangle-774.png"
            className={`w-full max-w-lg ${StartingPage.coolImages}`}
          />

          <img
            src="https://i.ibb.co/J5mwcg7/Rectangle-778.png"
            className={`w-full max-w-lg px-12 ${StartingPage.coolImages}`}
          />

          <img
            src="https://i.ibb.co/hMZdGKD/Rectangle-776.png"
            className={`w-full max-w-lg pr-12 ${StartingPage.coolImages}`}
          />

          <img
            src="https://i.ibb.co/yPFQLSX/Rectangle-777.png"
            className={`w-full max-w-lg ${StartingPage.coolImages}`}
          />
        </div>

        {/* For mobile */}
        <div className="block w-full px-2 lg:hidden md:hidden">
          <img className="w-full mb-3" src="https://i.ibb.co/mqQ6GgD/Rectangle-774-1.png" alt="" />
          <img className="w-full mb-3" src="https://i.ibb.co/mqQ6GgD/Rectangle-774-1.png" alt="" />
          <img className="w-full mb-3" src="https://i.ibb.co/mqQ6GgD/Rectangle-774-1.png" alt="" />
          <img className="w-full mb-3" src="https://i.ibb.co/mqQ6GgD/Rectangle-774-1.png" alt="" />
          <img className="w-full mb-3" src="https://i.ibb.co/mqQ6GgD/Rectangle-774-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoolImage;