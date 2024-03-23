import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
