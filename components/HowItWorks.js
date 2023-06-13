import { useState } from "react";
import StartingPage from "../CSSfile/StartingPage.module.css";
import { TbRosetteNumber1 } from "react-icons/tb";

const HowItWorks = () => {
  const [uploadImage, setUploadImage] = useState(true);
  const [selectTheme, setSelectTheme] = useState(false);
  const [generateResult, setGenerateResult] = useState(false);
  console.log(uploadImage, selectTheme, generateResult)
  return (
    <div className="">
      <h1
        className={`lg:flex md:flex justify-center my-8 hidden text-4xl font-bold lg:my-16 md:my-12 ${StartingPage.howItWorkscss}`}
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
        <div className="grid items-center justify-between lf:flex md:flex">
          <div className={`${StartingPage.workingBackground} w-50`}>
            <ul className="steps steps-vertical">

              <li onClick={()=>{
                setUploadImage(true)
                setSelectTheme(false)
                setGenerateResult(false)
              }} className={`step ${uploadImage ? 'step-primary' : ''}`}>
                <div
                  className={`flex items-center ${uploadImage ? StartingPage.uploadImageHead : StartingPage.uploadImageNonHead }`}
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
                  className={`flex items-center ${selectTheme ? StartingPage.uploadImageHead : StartingPage.uploadImageNonHead } mt-4`}
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
                  className={`flex items-center ${generateResult ? StartingPage.uploadImageHead : StartingPage.uploadImageNonHead } mt-4`}
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

          <button
            className={`btn normal-case hidden lg:block md:block ${StartingPage.instantlyRedesignButton2} border-0`}
          >
            <span style={{ color: "black" }} className="flex items-center">
              <img
                className="mr-4"
                src="https://i.ibb.co/SvwQmQx/Vector-2.png"
                alt=""
              />
              <span>Instantly Redesign</span>
            </span>
          </button>

          {/* For mobile */}
          <button
            className={`btn normal-case block lg:hidden md:hidden ${StartingPage.instantlyRedesignButtonForMobile2} border-0`}
          >
            <span style={{ color: "black" }} className="flex items-center">
              <img
                className="mr-4"
                src="https://i.ibb.co/SvwQmQx/Vector-2.png"
                alt=""
              />
              <span>Instantly Redesign</span>
            </span>
          </button>

          {/* Before */}
          <button
            className={`btn normal-case hidden lg:block md:block ${StartingPage.before2} border-0`}
          >
            <span style={{ color: "black" }} className="flex items-center">
              <span>Before</span>
            </span>
          </button>

          {/* For mobile */}
          <button
            className={`btn normal-case block lg:hidden md:hidden ${StartingPage.beforeMobile2} border-0`}
          >
            <span style={{ color: "black" }} className="flex items-center">
              <span>Before</span>
            </span>
          </button>

          {/* After */}
          <button
            className={`btn normal-case hidden lg:block md:block ${StartingPage.after2} border-0`}
          >
            <span style={{ color: "black" }} className="flex items-center">
              <span>After</span>
            </span>
          </button>

          {/* For mobile */}

          <button
            className={`btn normal-case block lg:hidden md:hidden ${StartingPage.afterMobile2} border-0`}
          >
            <span style={{ color: "black" }} className="flex items-center">
              <span>After</span>
            </span>
          </button>

          <div>
            <div
              className={`flex justify-center carousel ${StartingPage.imageBorder} px-2`}
            >
              <div className=" carousel-item">
                <img
                  src="https://live.staticflickr.com/65535/52967869295_379cca8f42_m.jpg"
                  className={`${StartingPage.homeImag} hidden lg:block md:block`}
                />

                <img
                  src="https://live.staticflickr.com/65535/52967869295_379cca8f42_m.jpg"
                  className={` block md:hidden lg:hidden`}
                />
              </div>

              <div className=" carousel-item">
                <img
                  src="https://live.staticflickr.com/65535/52967635404_5a4146f6c2_m.jpg"
                  className={`hidden w-full lg:block md:block ${StartingPage.homeImag}`}
                />

                <img
                  src="https://live.staticflickr.com/65535/52967635404_5a4146f6c2_m.jpg"
                  className={`block w-full lg:hidden md:hidden`}
                />
              </div>
            </div>

            {/* <div className={`w-full ${StartingPage.imageBorder} flex justify-center carousel ${StartingPage.imageBorder} px-2`}>
              <div className=" carousel-item">
                <img
                  src="https://live.staticflickr.com/65535/52967869295_379cca8f42_m.jpg"
                  className="w-full"
                />
              </div>
              <div className=" carousel-item">
                <img
                  src="https://live.staticflickr.com/65535/52967635404_5a4146f6c2_m.jpg"
                  className="w-full"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
