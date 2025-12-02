import { Carousel } from "react-bootstrap";
const ImageCarousel = ({ images }) => {
  return (
    <Carousel>
      {images?.map((image, index) => {
        return (
          <Carousel.Item key={image?.id}>
            <img
              className="d-block w-100"
              src={image?.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{image?.title}</h3>
              <p>{image?.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
