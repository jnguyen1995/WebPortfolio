import { Carousel } from "react-carousel-minimal";
import "./CarouselSlider.css";

const CarouselSlider = () => {
  const data = [
    {
      image: "images/Taipei.jpg",
    },
    {
      image: "images/Lanterns.jpg",
    },
    {
      image: "images/Love.JPEG",
    },
    {
      image: "images/Skateboard.JPG",
    },
    {
      image: "images/Freeze.JPG",
    },
    {
      image: "images/CarlyChase.JPG",
    },
    {
      image: "images/Cashier.JPG",
    },
    {
      image: "images/Cashier2.JPG",
    },
    {
      image: "images/Clouds.jpg",
    },
    {
      image: "images/Dock.jpg",
    },
    {
      image: "images/Sand.jpg",
    },
    {
      image: "images/LoneFisherman.jpg",
    },
    {
      image: "images/SutroBath.JPEG",
    },
    {
      image: "images/SunsetSkater.JPEG",
    },
    {
      image: "images/Pupuseria.jpg",
    },
  ];

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="carousel-container">
      <div
        style={{
          padding: "0 20px",
        }}
        className="carousel-center"
      >
        <br />
        <h1>P H O T O G R A P H Y</h1>

        <Carousel
          data={data}
          time={2000}
          height="1080px"
          width="1080px"
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={false}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "1920px",
            maxHeight: "1080px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  );
};

export default CarouselSlider;
