import { Link, withRouter } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-light" id="nav-color">
          <Link class="navbar-brand" to="/home">
            <p><span class="nav-bg">Home</span></p>
          </Link>
          <Link class="navbar-brand" to="/search">
            <p><span class="nav-bg">search</span></p>
          </Link>
          <Link class="navbar-brand" to="/about">
            <p><span class="nav-bg">About</span></p>
          </Link>
      </nav>
    </div>
  )
};

export default withRouter(Nav);