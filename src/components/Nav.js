import { Link, withRouter } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-light" id="nav-color">
          <Link class="navbar-brand" to="/home">
            <p><span>Home</span></p>
          </Link>
          <section class="navbar-center">
            <img src="https://freepngimg.com/download/military_tank/4-2-tank-png-pic.png" id="tank-icon"></img>
          </section>
          <Link class="navbar-brand" to="/about">
            <p><span>About</span></p>
          </Link>
      </nav>
    </div>
  )
};

export default withRouter(Nav);