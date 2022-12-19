import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
// import Badge from '@mui/material/Badge';
import logo from "../../assets/chef.png";

// type PropType = {
//   count: number;
// }
// const NavBar = (prop: PropType) => {
const NavBar = () => {
    return (
    <div className='navbar'>
        <div className='navbar__logo'>
            <img src={logo} />
            <h3>YUMMY</h3>
        </div>
        <div className="navbar__links">
        <Link to="/">HOME</Link>
        <Link to="/recipe">RECIPE</Link>
        {/* <Badge color="secondary" badgeContent={prop.count}> */}
        <Link to="/favorite">FAVORITE</Link>
        {/* </Badge> */}
        <Link to="/contact">CONTACT</Link>
        </div>
    </div>
  )
}

export default NavBar