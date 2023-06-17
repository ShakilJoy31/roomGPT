import { useEffect, useState } from "react";
import StartingPage from "../CSSfile/StartingPage.module.css";
import { TbRosetteNumber1 } from "react-icons/tb";
import { UserStore } from "../userStore";

const HowItWorks = () => {
  const { user, setUser } = UserStore.useContainer();
  const [uploadImage, setUploadImage] = useState(true);
  const [selectTheme, setSelectTheme] = useState(false);
  const [generateResult, setGenerateResult] = useState(false);
  return (
    <div className="">
      <h1
        className={`lg:flex md:flex justify-center hidden mb-[109px] ${StartingPage.howItWorkscss}`}
      >
        How it{" "}
        <span style={{ color: "#0F7FEF", marginLeft: "10px" }}> Works</span>
      </h1>

      <h1
        style={{
          fontFamily: "Gilroy",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "125%",
        }}
        className={`flex justify-center my-6 lg:hidden md:hidden`}
      >
        How it{" "}
        <span style={{ color: "#0F7FEF", marginLeft: "10px" }}> Works</span>
      </h1>
      <div className={`p-2 lg:px-32 md:px-24 ${user == "white"
                ? StartingPage.workingBackground
                : StartingPage.workingBackgroundBlack}`}>
        <div
          className={`grid lg:items-center lf:flex md:flex `}
        >
          <div
            className={`lg:mr-[38px] flex justify-center items-center`}
          >
            <ul>
            {/* className={`${user == "white"
                ? StartingPage.workingBackground
                : StartingPage.workingBackgroundBlack}`} */}
              <div className="flex items-center justify-center gap-x-4">
                <div
                  className={`${
                    uploadImage
                      ? StartingPage.selected
                      : StartingPage.notSelected
                  }`}
                >
                  {uploadImage ? (
                    <img src="https://i.ibb.co/mHFnSB1/Ellipse-9.png" alt="" />
                  ) : (
                    <img style={{borderRadius: '50%', zIndex: '1'}} src="https://i.ibb.co/g32xxTm/Ellipse-8.png" alt="" />
                  )}
                </div>

                <img
                  className="hidden lg:block"
                  style={{
                    position: "absolute",
                    left: "9.2%",
                    marginTop: "290px",
                    height: "250px",
                    zIndex: '0'
                  }}
                  src="https://i.ibb.co/0sdRvyD/Line-4.png"
                  alt=""
                />

                <img
                  className="block lg:hidden"
                  style={{
                    position: "absolute",
                    left: "10.2%",
                    marginTop: "190px",
                    height: "150px",
                    zIndex: '0'
                  }}
                  src="https://i.ibb.co/0sdRvyD/Line-4.png"
                  alt=""
                />

                <li
                  onClick={() => {
                    setUploadImage(true);
                    setSelectTheme(false);
                    setGenerateResult(false);
                  }}
                  className={``}
                >
                  <div
                    className={`flex items-center ${
                      user == "white"
                        ? uploadImage
                          ? StartingPage.uploadImageHead
                          : StartingPage.uploadImageNonHead
                        : uploadImage
                        ? StartingPage.uploadImageNonHeadBlack
                        : StartingPage.uploadImageHeadBlack
                    } w-[292px] lg:w-[419px] h-[72px] lg:h-[120px]`}
                  >
                    <span
                      style={{
                        paddingTop: "7px",
                        paddingBottom: "7px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        borderRadius: "50%",
                        background: ` ${user == 'white' ? (uploadImage ? 'rgba(236, 245, 255, 0.24)' : '#ECF5FF') : (uploadImage ? 'rgba(236, 245, 255, 0.24)' : '#3B5B7A')}`,
                      }}
                    >
                      01
                    </span>
                    <p className={`${StartingPage.workingHeading}`}>
                      Upload an image of a room
                    </p>
                  </div>
                </li>
              </div>

              <div className="flex items-center justify-center gap-x-4">
                <div
                  className={`${
                    selectTheme
                      ? StartingPage.selected
                      : StartingPage.notSelected
                  }`}
                >
                  {selectTheme ? (
                    <img src="https://i.ibb.co/mHFnSB1/Ellipse-9.png" alt="" />
                  ) : (
                    <img style={{borderRadius: '50%', zIndex: '1', }} src="https://i.ibb.co/g32xxTm/Ellipse-8.png" alt="" />
                    // 
                  )}
                </div>
                <li
                  onClick={() => {
                    setUploadImage(false);
                    setSelectTheme(true);
                    setGenerateResult(false);
                  }}
                  className={``}
                >
                  <div
                    className={`flex items-center ${
                      user == "white"
                        ? selectTheme
                          ? StartingPage.uploadImageHead
                          : StartingPage.uploadImageNonHead
                        : selectTheme
                        ? StartingPage.uploadImageNonHeadBlack
                        : StartingPage.uploadImageHeadBlack
                    } lg:my-[23px] md:my-[14px] my-[20px] w-[292px] lg:w-[419px] h-[72px] lg:h-[120px]`}
                  >
                    <span
                      style={{
                        paddingTop: "7px",
                        paddingBottom: "7px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        borderRadius: "50%",
                        background: ` ${user == 'white' ? (selectTheme ? 'rgba(236, 245, 255, 0.24)' : '#ECF5FF') : (selectTheme ? 'rgba(236, 245, 255, 0.24)' : '#3B5B7A')}`,
                      }}
                    >
                      02
                    </span>
                    <p className={`${StartingPage.workingHeading}`}>
                      Select the theme(s)
                    </p>
                  </div>
                </li>
              </div>

              <div className="flex items-center justify-center gap-x-4">
                <div
                  className={`${
                    generateResult
                      ? StartingPage.selected
                      : StartingPage.notSelected
                  }`}
                >
                  {generateResult ? (
                    <img src="https://i.ibb.co/mHFnSB1/Ellipse-9.png" alt="" />
                  ) : (
                    <img style={{borderRadius: '50%', zIndex: '1'}} src="https://i.ibb.co/g32xxTm/Ellipse-8.png" alt="" />
                  )}
                </div>

                <li
                  onClick={() => {
                    setUploadImage(false);
                    setSelectTheme(false);
                    setGenerateResult(true);
                  }}
                  className={``}
                >
                  <div
                    className={`flex items-center ${
                      user == "white"
                        ? generateResult
                          ? StartingPage.uploadImageHead
                          : StartingPage.uploadImageNonHead
                        : generateResult
                        ? StartingPage.uploadImageNonHeadBlack
                        : StartingPage.uploadImageHeadBlack
                    } w-[292px] lg:w-[419px] h-[72px] lg:h-[120px]`}
                  >
                    <span
                      style={{
                        paddingTop: "7px",
                        paddingBottom: "7px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        borderRadius: "50%",
                        background: ` ${user == 'white' ? (generateResult ? 'rgba(236, 245, 255, 0.24)' : '#ECF5FF') : (generateResult ? 'rgba(236, 245, 255, 0.24)' : '#3B5B7A')}`,
                      }}
                    >
                      03
                    </span>
                    <p className={`${StartingPage.workingHeading}`}>
                      Get their generated result
                    </p>
                  </div>
                </li>
              </div>
            </ul>
          </div>

          <div className="">
            <div
              className={`lg:flex hidden justify-center carousel ${StartingPage.imageBorder} px-2`}
            >
              <div className="lg:w-[670px] md:w-[450px]">
                {user == "white" ? (
                  <img
                    style={{ borderRadius: "30px" }}
                    src="https://i.ibb.co/6bgh3pV/Screenshot-1360.png"
                    alt=""
                  />
                ) : (
                  <img
                    style={{ borderRadius: "30px" }}
                    src="https://i.ibb.co/k01pWDZ/Screenshot-1359.png"
                    alt=""
                  />
                )}
              </div>
            </div>

            <div className="block mt-[50px] mb-[80px] md:hidden lg:hidden">
              <img
                className="block mx-auto"
                src="https://i.ibb.co/b3QTkYp/Frame-10gfjhj00003837.png"
                alt=""
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
