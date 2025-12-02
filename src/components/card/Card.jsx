import { useState } from "react";
import Cam1 from "../../assets/cctv/cam1.jpg";
import Cam2 from "../../assets/cctv/cam2.jpg";
import Cam3 from "../../assets/cctv/cam3.jpg";
import "./card.css";

function Card() {
  const [cardImgs, setCardImgs] = useState([
    {
      img: Cam1,
      title: "Cemera 1",
      desc: "This is the description of the Camera 1",
      id: 1,
    },
    {
      img: Cam1,
      title: "Cemera 2",
      desc: "This is the description of the Camera 2",
      id: 2,
    },
    {
      img: Cam1,
      title: "Cemera 3",
      desc: "This is the description of the Camera 3",
      id: 3,
    },
  ]);
  return (
    <div className="card-container">
      {cardImgs?.map((crd) => {
        return (
          <div className="card-container-card" key={crd?.id}>
            <img
              className="card-container-img"
              src={crd?.img}
              alt="card-img"
            ></img>
            <h2 className="card-container-title">{crd?.title}</h2>
            <p className="card-container-desc">{crd?.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
