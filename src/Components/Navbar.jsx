import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  {
    title: "Home",
    link: "/",
    id: 1,
  },
  {
    title: "Top Stories",
    link: "/topstories",
    id: 2,
  },
  {
    title: "New Stories",
    link: "/newstories",
    id: 3,
  },
  {
    title: "Best Stories",
    link: "/beststories",
    id: 4,
  },
];

export const Navbar = () => {
  return (
      <>
      <div id="navbar_heading">
      <img src="./logo.png" alt="logo" />
      </div>
      
    <div id="navbar_wrapper">
      {links.map((e) => {
        return (
          <Link to={e.link} key={e.id} className="navbar_headings">
            {e.title}
          </Link>
        );
      })}
    </div>
    </>
  );
};