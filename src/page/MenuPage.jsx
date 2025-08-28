// MenuPage.jsx

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../style/Menu.css";
import { FaAddressCard, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import useStore from "../Data/DataGloble";
import CartProps from "../PropsCart/CartProps";
import AlertPage from "./AlertPage";
const MenuPage = () => {
  const { SetSelectionCartItems, SelectionCartItems } = useStore();

  // update localStorage 
  useEffect(() => {
    const GetTake = localStorage.getItem("SelectionCartItems");
    if (GetTake) {
      SetSelectionCartItems(JSON.parse(GetTake));
    }
  }, [SetSelectionCartItems]);

  
  return (
    <>
      {/* Top contact bar */}
      <nav className="p-1 bg-secondary ps-5 pe-5">
        <div className="d-flex justify-content-center align-items-center">
          <ul className="d-flex gap-1 m-0 list-unstyled text-white list_ul">
            <li className="text-light">
              <FaAddressCard /> Phnom Penh |
            </li>
            <li className="text-light">
              <AiOutlineMail /> Vothanarern@gmail.com |
            </li>
            <li className="text-light">
              <MdOutlinePhone /> 016 555 637
            </li>
          </ul>
        </div>
      </nav>

      {/* Main navigation bar */}
      <nav
        id="navbar"
        className="d-flex justify-content-between align-items-center p-2 bg-dark text-white ps-5 pe-5"
      >
        <div className="logo">
          <h1 className="text-success">Zeya</h1>
        </div>

        <ul className="d-flex gap-5 m-0 list-unstyled text-white list_ul">
          <li>
            <a href="">
              <NavLink className="text-decoration-none fs-5 text-white" to="/">
                Home
              </NavLink>
            </a>
          </li>
          <li>
            <a href="">
              <NavLink
                className="text-decoration-none fs-5 text-white"
                to="/about"
              >
                About
              </NavLink>
            </a>
          </li>
          <li>
            <a href="">
              <NavLink
                className="text-decoration-none fs-5 text-white"
                to="/shop"
              >
                Shop
              </NavLink>
            </a>
          </li>
          <li>
            <a href="">
              <NavLink
                className="text-decoration-none fs-5 text-white"
                to="/contect"
              >
                Contact
              </NavLink>
            </a>
          </li>
          <li>
            <a href="">
              <NavLink
                className="text-decoration-none fs-5 text-white"
                to="/addcard"
              >
                Stock
              </NavLink>
            </a>
          </li>
          <li>
            <button
              className="btn position-relative text-white"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <FaShoppingCart />
              {SelectionCartItems.length >= 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {SelectionCartItems.length}
                </span>
              )}
            </button>
          </li>
        </ul>

        {/* Search Form */}
        <div className="form">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search input"
              />
              <span
                className="input-group-text text-bg-primary"
                id="basic-addon2"
              >
                Search
              </span>
            </div>
          </form>
        </div>
      </nav>
      <AlertPage />
    </>
  );
};

export default MenuPage;
