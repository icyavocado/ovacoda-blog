import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="pb-5">
    <ul className="Home__nav-list pt-3 pr-5">
      <li>
        <Link className="logo" to="/">
          Ovacoda
        </Link>
      </li>
      <li className="to-left">
        <Link className="" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="" to="/blog-index">
          Blog
        </Link>
      </li>
      <li>
        <Link className="" to="/about-me">
          About
        </Link>
      </li>
      <li>
        <Link className="" to="/contact-me">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
