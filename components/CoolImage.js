const CoolImage = () => {
  return (
    <div>
      <p className="flex justify-center mt-24 text-4xl font-bold">
        Some cool images that
      </p>
      <p
        style={{ color: "#0F7FEF" }}
        className="flex justify-center mb-24 text-4xl font-bold"
      >
        roomGPT generated
      </p>

      <div className="">
        <div className="flex items-center justify-center w-full">
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
