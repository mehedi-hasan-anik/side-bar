import React from "react";
import SideBar from "../../components/SideBar";
import "./Home.style.css";

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <SideBar />
          </div>
          <div className="col py-3">Content area...</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
