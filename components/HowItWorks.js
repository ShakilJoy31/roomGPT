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

      <h1 style={{
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '125%',
      }}
        className={`flex justify-center my-6 lg:hidden md:hidden`}
      >
        How it{" "}
        <span style={{ color: "#0F7FEF", marginLeft: "10px" }}> Works</span>
      </h1>
      <div className="p-2 lg:px-32 md:px-24">
        <div className={`grid items-center lg:justify-between lf:flex md:flex `}> 
          <div className={`${(user == "white") ? StartingPage.workingBackground : StartingPage.workingBackgroundBlack} `}>
            <ul className="steps steps-vertical">

              <li onClick={()=>{
                setUploadImage(true)
                setSelectTheme(false)
                setGenerateResult(false)
              }} className={`step ${uploadImage ? 'step-primary' : ''}`}>
                <div
                  className={`flex items-center ${(user == "white") ? (uploadImage ? StartingPage.uploadImageHead : StartingPage.uploadImageNonHead) : (uploadImage ? StartingPage.uploadImageNonHeadBlack : StartingPage.uploadImageHeadBlack )} w-[292px] lg:w-[419px]`}
                >
                  <span
                    style={{
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      borderRadius: "50%",
                      background: "rgba(236, 245, 255, 0.24);",
                    }}
                  >
                    1
                  </span>
                  <p
                    
                    className={`${StartingPage.workingHeading}`}
                  >
                    Upload an image of a room
                  </p>
                </div>
              </li>

              <li onClick={()=>{
                setUploadImage(false)
                setSelectTheme(true)
                setGenerateResult(false)
              }} className={`step ${selectTheme ? 'step-primary' : ''}`}>
                <div
                  className={`flex items-center ${(user == "white") ? (selectTheme ? StartingPage.uploadImageHead : StartingPage.uploadImageNonHead) : (selectTheme ? StartingPage.uploadImageNonHeadBlack : StartingPage.uploadImageHeadBlack) } lg:my-[23px] md:my-[14px] my-[20px] w-[292px] lg:w-[419px]`}
                >
                  <span
                    style={{
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      borderRadius: "50%",
                      background: "rgba(236, 245, 255, 0.24);",
                    }}
                  >
                    2
                  </span>
                  <p
                    
                    className={`${StartingPage.workingHeading}`}
                  >
                    Select the theme(s)
                  </p>
                </div>
              </li>


              <li onClick={()=>{
                setUploadImage(false)
                setSelectTheme(false)
                setGenerateResult(true)
              }} className={`step ${generateResult ? 'step-primary' : ''}`}>
                <div
                  className={`flex items-center ${(user == "white") ? (generateResult ? StartingPage.uploadImageHead : StartingPage.uploadImageNonHead) : (generateResult ? StartingPage.uploadImageNonHeadBlack : StartingPage.uploadImageHeadBlack) } w-[292px] lg:w-[419px]`}
                >
                  <span
                    style={{
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      borderRadius: "50%",
                      background: "rgba(236, 245, 255, 0.24);",
                    }}
                  >
                    2
                  </span>
                  <p
                    
                    className={`${StartingPage.workingHeading}`}
                  >
                    Get their generated result
                  </p>
                </div>
              </li>

            </ul>
          </div>

          <div className="">
            <div
              className={`lg:flex hidden justify-center carousel ${StartingPage.imageBorder} px-2`}
            >
              <div className="lg:w-[670px] md:w-[450px]">
                {
                  (user == "white") ? <img style={{borderRadius: '30px'}} src="https://i.ibb.co/6bgh3pV/Screenshot-1360.png" alt="" /> : <img style={{borderRadius: '30px'}} src="https://i.ibb.co/k01pWDZ/Screenshot-1359.png" alt="" />
                }
                
              </div>
            </div>

            <div className="block mt-[50px] mb-[80px] md:hidden lg:hidden">
              <img className="block mx-auto" src="https://i.ibb.co/b3QTkYp/Frame-10gfjhj00003837.png" alt="" />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
