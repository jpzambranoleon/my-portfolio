import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h3 className="logo">Jean-Paul.dev</h3>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
