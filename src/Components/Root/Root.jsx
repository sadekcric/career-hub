import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto">
        <Header />
        <div className="min-h-[calc(100vh-288px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
