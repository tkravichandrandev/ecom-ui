import ImageCarousel from "../components/ImageCarousel";
import ProductList from "../components/ProductList";
import "../styles/carousel.css";

const HomePage = () => {
  const images = [
    {
      id: 1,
      image: "/mens.jpg",
      title: "Slide 1",
      desc: "Description for slide 1",
    },
    {
      id: 2,
      image: "/beauty.jpg",
      title: "Slide 1",
      desc: "Description for slide 2",
    },
    {
      id: 3,
      image: "/genz.jpg",
      title: "Slide 1",
      desc: "Description for slide 3",
    },
    {
      id: 4,
      image: "/beauty.jpg",
      title: "Slide 1",
      desc: "Description for slide 4",
    },
  ];

  return (
    <div>
      <ImageCarousel images={images} />
      <ProductList />
    </div>
  );
};

export default HomePage;
