import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  Add,
  AddCircleOutlineOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,
} from "@mui/icons-material";

function Header() {
  const [tab, setTab] = useState(window.location.pathname);
  // console.log(tab);
  return (
    <div className="header">
      <Link to="/" onClick={() => setTab("/")}>
        {tab === "/" ? <Home style={{ color: "#019267" }} /> : <HomeOutlined />}
      </Link>
      <Link to="/newpost" onClick={() => setTab("/newpost")}>
        {tab === "/newpost" ? (
          <Add style={{ color: "#019267" }} />
        ) : (
          <AddCircleOutlineOutlined />
        )}
      </Link>
      <Link to="/search" onClick={() => setTab("/search")}>
        {tab === "/search" ? (
          <Search style={{ color: "#019267" }} />
        ) : (
          <SearchOutlined />
        )}
      </Link>
      <Link to="/account" onClick={() => setTab("/account")}>
        {tab === "/account" ? (
          <AccountCircle style={{ color: "#019267" }} />
        ) : (
          <AccountCircleOutlined />
        )}
      </Link>
    </div>
  );
}

export default Header;
