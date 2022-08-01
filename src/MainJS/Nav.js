function Nav(props) {
  return (
    <nav className="nav-bar">
      <div className="nav-h1">
        <h1>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
            {props.title}
          </a>
        </h1>
      </div>
      <div className="nav-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="검색" />
      </div>
      <div className="nav-icons">
        <i className="fas fa-thin fa-compass">
          <a href="#"></a>
        </i>
        <i className="fas fa-thin fa-heart">
          <a href="#"></a>
        </i>
        <i className="fas fa-light fa-user">
          <a href="#"></a>
        </i>
      </div>
    </nav>
  );
}

export default Nav;
