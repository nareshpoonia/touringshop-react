import "./App.css";
import logo from "./logo.png";
import hero from "./assets/images/hero-image.jpg";
import saddle from "./assets/images/saddle-bags.jpg";
import gears from "./assets/images/riding-gear.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="c-navbar flex-center justify-between px-4">
          <a className="fs-8" href="/index.html">
            {" "}
            Touring Shop{" "}
          </a>
          <div className="search-bar">
            <input className="flex-center nav-input" type="search" />
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
          </div>
          <ul className="flex-col text-center">
            <li className="fs-7 mx-8">
              <a href="/html/log.html">Login</a>
            </li>
            <li className="nav-item fs-7 mx-8">
              <a href="/html/wishlist.html">
                <i className="far fa-heart fa-xl mr-4"></i>
              </a>
              <a href="/html/cart.html">
                <i className="fas fa-cart-plus"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="body-container">
        <div className="hero-image">
          <img
            className="hero-image responsive-img"
            src={hero}
            alt="A guy with Motorcylce"
          />
        </div>
        <div className="landing-section mt-16 flex-center">
          <div>
            <a href="/html/luggage.html">
              <figure className="avatar">
                <img src={saddle} />
              </figure>
              <p className="category mt-8 fs-8">Luggage</p>
            </a>
          </div>
          <div>
            <a href="/html/riding-gears.html">
              <figure className="avatar">
                <img src={gears} alt="A guy/girl with Riding-Gears" />
              </figure>
              <p className="category mt-8 fs-8">Riding Gears</p>
            </a>
          </div>
        </div>
        <div className="footer"></div>
      </div>{" "}
    </div>
  );
}

export default App;
