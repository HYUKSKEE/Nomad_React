import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav-bar">
      <div className="nav-h1">
        <h1>
          <Link to="/Main">
            <i className="fa-brands fa-instagram"></i>
            {props.title}
          </Link>
        </h1>
      </div>
      <div className="nav-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="검색" />
      </div>
      <div className="nav-icons">
        <i className="fas fa-thin fa-compass">
          <Link to="/Main"></Link>
        </i>
        <i className="fas fa-thin fa-heart">
          <Link to="/Main"></Link>
        </i>
        <i className="fas fa-light fa-user">
          <Link to="/Main"></Link>
        </i>
      </div>
    </nav>
  );
}

export default Nav;
