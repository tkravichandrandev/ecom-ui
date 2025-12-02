import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { Menu } from "./Menu";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-header">
      <img
        src="/mylogo.svg"
        alt="R-Commerce"
        className="nav-logo"
        onClick={() => navigate("/")}
      />
      <SearchBar />
      <Menu />
    </div>
  );
};

export default NavBar;
