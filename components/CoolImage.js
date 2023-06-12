const CoolImage = () => {
  return (
    <div>
      <p className="flex justify-center mt-8 text-2xl font-bold lg:mt-24 md:mt-20 lg:text-4xl md:text-3xl">
        Some cool images that
      </p>
      <p
        style={{ color: "#0F7FEF" }}
        className="flex justify-center mb-8 text-2xl font-bold lg:text-4xl md:text-3xl"
      >
        roomGPT generated
      </p>

      <div className="">
        <div className="items-center justify-center hidden w-full lg:flex md:flex">
          <img
            src="https://i.ibb.co/mhBJKWK/Rectangle-774.png"
            className="w-full max-w-lg h-72"
          />

          <img
            src="https://i.ibb.co/J5mwcg7/Rectangle-778.png"
            className="w-full max-w-lg px-12 h-96"
          />

          <img
            src="https://i.ibb.co/hMZdGKD/Rectangle-776.png"
            className="w-full max-w-lg pr-12 h-72"
          />

          <img
            src="https://i.ibb.co/yPFQLSX/Rectangle-777.png"
            className="w-full max-w-lg h-72"
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

{
  /* <div className="w-full p-4 space-x-4 carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/mhBJKWK/Rectangle-774.png"
                className="rounded-box"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://i.ibb.co/J5mwcg7/Rectangle-778.png"
                className="rounded-box"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://i.ibb.co/hMZdGKD/Rectangle-776.png"
                className="rounded-box"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://i.ibb.co/yPFQLSX/Rectangle-777.png"
                className="rounded-box"
              />
            </div>

          </div> */
}
