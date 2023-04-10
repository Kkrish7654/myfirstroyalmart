import React from "react";
import headerListItems from "./HeaderList";
import { FaBabyCarriage } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../constant/ProductsAction";

const Navbar = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  // search products
  const [search, setSearch] = useState("");
  const [searchResult, setSearchresult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // hamburger menu
  const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
      setIsSearching(true);
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(search)
      );
      console.log(result)
      dispatch(setProducts(result));
      //setsearchresilt(result);
      //setIsSearching(false);
    };

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
    console.log("working")
  };


  return (
    <div>
      <header className="header">
        <nav className="top-nav">
          <div>
            <h1 className="logo">
              <a href="/">RoyalMart</a>
            </h1>
            <IoLocationSharp className="location-icon" />
            <a className="location-text" href="#">select your address</a>
            <form>
              <input
                className="search"
                type="search"
                name="search"
                id="search"
                placeholder="Search RoyalMart.in"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Link to="/new-arrivals">
                <button
                  className="submit"
                  type="submit"
                  onClick={handleClick}     
               >Search</button>
              </Link>
              
            </form>

            
          </div>
          <div className={`${toggle ? 'active' : '' }`}> 
            <ul>
              <li className="sign-in">
                <a href="/">Hello, Sign in</a>
                <a href="/">Account & Lists</a>
              </li>
              <li className="return-orders">
                <a href="/">Returns</a>
                <a href="/">& Orders</a>
              </li>
              <li className="cart">
                <FaBabyCarriage className="cart-icon" />
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
            <ul className="nav-lists">
            {headerListItems.map((item, index) => (
              <li key={index}  onClick={handleToggle}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          </div>

          <div className={`hamburger-menu ${toggle ? 'active' : ''}`} onClick={handleToggle}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
          </div>
        </nav>
        <div className="bottom-nav">
          <ul>
            {headerListItems.map((item, index) => (
              <li key={index}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div>
            <h3>Shopping made easy | Download the app</h3>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
