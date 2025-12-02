import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = ({ buttonText, navigatePage }) => {
  const navigate = useNavigate();
  const onClickFn = () => {
    navigate(navigatePage);
  };
  return (
    <div className="back-button-div">
      <IoChevronBackCircleOutline
        onClick={onClickFn}
        style={{
          width: "40px",
          height: "40px",
        }}
        className="back-button"
      />
      <h1
        style={{
          position: "sticky",
          top: "100px",
          display: "flex",
          zIndex: 10,
          alignItems: "center",
          paddingLeft: "12px",
          width: "98%",
          height: "80px",
          backgroundColor: "#fff",
        }}
      >
        {buttonText}
      </h1>
    </div>
  );
};

export default BackButton;
