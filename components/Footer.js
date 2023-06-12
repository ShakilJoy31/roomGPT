const Footer = () => {
  return (
    <div className="px-2 pb-6 lg:px-32 md:px-24">
      <div className="items-center justify-between hidden lg:flex md:flex">
        <h1>
          Powered by <span className="underline">Replicate</span>,{" "}
          <span className="underline">Upload</span>, and{" "}
          <span className="underline">Vercel</span>
        </h1>

        <div className="flex gap-x-4">
          <img src="https://i.ibb.co/MfCdFXs/Vector.png" alt="" />
          <img src="https://i.ibb.co/4FCzR7d/Vector-1.png" alt="" />
        </div>

        <p>
          Created by <span className="underline">Hassan</span>{" "}
          (hassan@roomgpt.io)
        </p>
      </div>


      {/* For mobile device */}
      <div className="block lg:hidden md:hidden">
        <h1 className="flex justify-center">
          Powered by <span className="underline">Replicate</span>,{" "}
          <span className="underline">Upload</span>, and{" "}
          <span className="underline">Vercel</span>
        </h1>

        <p className="flex justify-center">
          Created by <span className="underline">Hassan</span>{" "}
          (hassan@roomgpt.io)
        </p>

        <div className="flex justify-center my-4">
        <div className="flex gap-x-4">
          <img src="https://i.ibb.co/MfCdFXs/Vector.png" alt="" />
          <img src="https://i.ibb.co/4FCzR7d/Vector-1.png" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
