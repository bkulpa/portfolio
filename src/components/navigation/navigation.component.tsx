import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </>
  );
};

export default Header;
