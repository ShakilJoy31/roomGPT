import HomeCss from '../CSSfile/StartingPage.module.css'

const HomeBanner = () => {
  return (
    <div className='pt-32 text-black'>
      <h1 style={{filter: 'brightness(1)'}} className='flex justify-center text-xl'>FUNDRAISING FOR SPORTS TEAMS</h1>
      <h1 style={{filter: 'brightness(1)'}} className='flex justify-center px-32 mt-6 text-5xl'>
        Make this season one to remember with RaiseRight
      </h1>
      <h1 style={{filter: 'brightness(1)'}} className='flex justify-center text-5xl'>
      sports team fundraising
      </h1>

      <div className={`flex justify-center my-6`}>
        <div className={`${HomeCss.redLine}`}></div>
      </div>
      <h1 style={{filter: 'brightness(1)'}} className='flex justify-center text-xl'>Sports fundraising made easy with the #1 gift card fundraiser</h1>
      <div className='flex justify-center mt-8'>
      <label
        style={{
          backgroundImage: "linear-gradient(45deg ,#5D9C59, #3E54AC)",
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
        }}
        className={`normal-case btn border-0 text-white`}
      >
        Start a free program
      </label>
      </div>
      
    </div>
  );
};

export default HomeBanner;
