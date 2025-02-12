const mcdoData = [
  {
    name: "Focaccia",
    photoName: "mcdo_icon/Deliver1.jpeg",
    optionName: "McDelivery",
  },
  {
    name: "Pizza Margherita",
    photoName: "mcdo_icon/Deliver2.jpeg",
    optionName: "NXTGEN",
  },
  {
    name: "Pizza Spinaci",
    photoName: "mcdo_icon/Deliver3.jpg",
    optionName: "Careers",
  },
  {
    name: "Pizza Funghi",
    photoName: "mcdo_icon/Deliver4.jpg",
    optionName: "Family Activities",
  },
  {
    name: "Pizza",
    photoName: "mcdo_icon/Deliver5.jpeg",
    optionName: "Download the McDelivery PH App",
  },
  {
    name: "Funghi",
    photoName: "mcdo_icon/Deliver6.jpeg",
    optionName: "Charity",
  },
];

function App() {
  //const x = "gab";
  //rfc
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
    //pizzas/faracia.jpg
  );
}

export default App;

function Pizza(props) {
  return (
    <div className="mcdo_option">
      <div className="mcdo_logo">
        <div className="parentContainer">
          <img src={props.mcdoDatObj.photoName} alt={props.mcdoDatObj.name} />
          <p className="center-text">{props.mcdoDatObj.optionName}</p>
        </div>
      </div>
    </div>
  );
}

//new function, new component

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Logo />
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Family Activities
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              McDelivery
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Careers
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Opportunities
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-collapse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50px"
                viewBox="0 -960 960 960"
                width="50px"
                fill="#db0007"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div>
      <img
        className="mcdo_logo_img"
        src="mcdo_img/MCDOlogo.png"
        alt="mcdo logo"
      />
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <div className="carousel">
        <div className="carousel_track-container"></div>
        <ul className="carousel_track">
          <li className="carousel_slide">
            <img
              className="carousel_image"
              src="mcdo_img/Banner1.jpg"
              alt="banner"
            ></img>
          </li>
          <li className="carousel_slide">
            <img
              className="carousel_image"
              src="mcdo_img/Banner2.jpg"
              alt="banner"
            ></img>
          </li>
          <li className="carousel_slide">
            <img
              className="carousel_image"
              src="mcdo_img/Banner3.jpg"
              alt="banner"
            ></img>
          </li>
          <li className="carousel_slide">
            <img
              className="carousel_image"
              src="mcdo_img/Banner4.jpg"
              alt="banner"
            ></img>
          </li>
        </ul>
      </div>

      <div className="carousel_nav">
        <button className="carousel_indicator"></button>
        <button className="carousel_indicator"></button>
        <button className="carousel_indicator"></button>
      </div>

      <div className="mcdo-option-grid">
        {mcdoData.map((mcdo_dat) => (
          <Pizza mcdoDatObj={mcdo_dat} key={mcdo_dat.name} />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const order = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2.4rem",
  };

  return <div></div>;
}
