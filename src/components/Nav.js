import { Link, withRouter } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-light" id="nav-color">
          <Link class="navbar-brand" to="/home">
            <p><span class="nav-bg">Home</span></p>
          </Link>
          <img src="https://cdn2.bigcommerce.com/server1700/01wp0ckw/products/2624/images/7707/LOGO_LOCO_004__83210.1503522736.500.500.png?c=2" height="50px" width="50px" id="logos"></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/1200px-Flag_of_the_Soviet_Union.svg.png" height="30px" width="50px" id="logos"></img>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" height="30px" width="50px" id="logos"></img>
       
          <Link class="navbar-brand" to="/about">
            <p><span class="nav-bg">About</span></p>
          </Link>
      </nav>
    </div>
  )
};

export default withRouter(Nav);