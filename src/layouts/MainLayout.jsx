import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/common.css";
import { useRef } from "react";
import ScrolToTop from "../components/ScrolToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  const cartRef = useRef(null);
  return (
    <>
      <ToastContainer />
      <ScrolToTop />
      <NavBar cartRef={cartRef} />
      <div className="main-container">
        <Outlet context={{ cartRef }} />
      </div>
      <Footer />
      <div className="text-center fs-6">
        <div className="textwidget">
          ©2025 RMart Pvt. Ltd. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default MainLayout;
