import StartingPage from "../CSSfile/StartingPage.module.css";
import { TbRosetteNumber1 } from "react-icons/tb";

const HowItWorks = () => {
  return (
    <div className="">
      <h1 className="flex justify-center my-8 text-4xl font-bold lg:my-16 md:my-12">
        How it <span style={{ color: "#0F7FEF", marginLeft:'10px'}}> Works</span>
      </h1>
      <div className='p-2 lg:px-32 md:px-24'>
        <div className='grid items-center justify-between lf:flex md:flex'>

          <div className={`${StartingPage.workingBackground} w-full`}>
            <ul className="steps steps-vertical">
              <li className="step step-primary">
                <div className={`flex items-center ${StartingPage.uploadImageHead}`}>
                    <span style={{paddingTop: '8px', paddingBottom: '8px', paddingLeft:'15px', paddingRight: '15px', borderRadius:'50%', background: 'rgba(236, 245, 255, 0.24);'}}>1</span>
                    <p style={{marginLeft: '10px'}}>Upload an image of a room</p>
                </div>
              </li>

              <li className="step step-primary">
              <div className={`flex items-center ${StartingPage.uploadImageNonHead} mt-4`}>
                    <span style={{paddingTop: '8px', paddingBottom: '8px', paddingLeft:'15px', paddingRight: '15px', borderRadius:'50%', background: 'rgba(236, 245, 255, 0.24);'}}>2</span>
                    <p style={{ marginLeft: '10px'}}>Select the theme(s)</p>
                </div>
              </li>
              <li className="step">
              <div className={`flex items-center ${StartingPage.uploadImageNonHead} mt-4`}>
                    <span style={{paddingTop: '8px', paddingBottom: '8px', paddingLeft:'15px', paddingRight: '15px', borderRadius:'50%', background: 'rgba(236, 245, 255, 0.24);'}}>2</span>
                    <p style={{ marginLeft: '10px'}}>Get their generated result</p>
                </div>
              </li>
            </ul>
          </div>


          <div>
            <div className={`w-96 carousel ${StartingPage.imageBorder}`}>
            <div className="w-1/2 carousel-item">
              <img
                src="https://live.staticflickr.com/65535/52967869295_379cca8f42_m.jpg"
                className="w-full"
              />
            </div>
            <div className="w-1/2 carousel-item">
              <img
                src="https://live.staticflickr.com/65535/52967635404_5a4146f6c2_m.jpg"
                className="w-full"
              />
            </div>
          </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
