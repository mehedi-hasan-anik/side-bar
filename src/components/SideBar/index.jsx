import React from "react";
import "./SideBar.style.css";

const SideBar = () => {
  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-5 d-none d-sm-inline">Menu</span>
      </a>
      <ul
        className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        <li className="nav-item">
          <a
            href="/"
            className="nav-link align-middle px-0 d-flex align-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ms-1 d-none d-sm-inline">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#submenu1"
            data-bs-toggle="collapse"
            className="nav-link px-0 align-middle "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
          </a>
          <ul
            className="collapse show nav flex-column ms-1"
            id="submenu1"
            data-bs-parent="#menu"
          >
            <li className="w-100">
              <a href="#" className="nav-link px-0">
                {" "}
                <span className="d-none d-sm-inline">Item</span> 1{" "}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-0">
                {" "}
                <span className="d-none d-sm-inline">Item</span> 2{" "}
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="nav-link px-0 align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ms-1 d-none d-sm-inline">Orders</span>
          </a>
        </li>
        <li>
          <a
            href="#submenu2"
            data-bs-toggle="collapse"
            className="nav-link px-0 align-middle "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
          </a>
          <ul
            className="collapse nav flex-column ms-1"
            id="submenu2"
            data-bs-parent="#menu"
          >
            <li className="w-100">
              <a href="#" className="nav-link px-0">
                {" "}
                <span className="d-none d-sm-inline">Item</span> 1
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-0">
                {" "}
                <span className="d-none d-sm-inline">Item</span> 2
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#submenu3"
            data-bs-toggle="collapse"
            className="nav-link px-0 align-middle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
          </a>
          <ul
            className="collapse nav flex-column ms-1"
            id="submenu3"
            data-bs-parent="#menu"
          >
            <li className="w-100">
              <a href="#" className="nav-link px-0">
                {" "}
                <span className="d-none d-sm-inline">Product</span> 1
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-0">
                {" "}
                <span className="d-none d-sm-inline">Product</span> 2
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-0">
                {" "}
                <span className="d-none d-sm-inline">Product</span> 3
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-0">
                {" "}
                <span className="d-none d-sm-inline">Product</span> 4
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="nav-link px-0 align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ms-1 d-none d-sm-inline">Customers</span>{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
