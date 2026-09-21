import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">La Tavola</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Offers</a>
          <a href="#">Reservation</a>
          <a href="#">Contact</a>
        </div>

        <button className="reserve-btn">
          Reserve a Table
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <p className="subtitle">WELCOME TO LA TAVOLA</p>

          <h1>
            Good Food.
            <br />
            Great Moments.
          </h1>

          <p className="hero-text">
            Fresh ingredients, carefully prepared dishes,
            and a warm atmosphere made for unforgettable moments.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Menu
            </button>

            <button className="secondary-btn">
              Reserve a Table
            </button>
          </div>
        </div>

      </section>

      {/* Specialties */}
      <section className="specialties">

        <p className="section-label">OUR FAVORITES</p>

        <h2>Chef's Specialties</h2>

        <div className="dishes">

          <div className="dish-card">
            <div className="dish-image">🍛</div>

            <div className="dish-info">
              <h3>Paneer Tikka</h3>
              <p>
                Grilled cottage cheese with aromatic spices.
              </p>
              <span>₹249</span>
            </div>
          </div>

          <div className="dish-card">
            <div className="dish-image">🍕</div>

            <div className="dish-info">
              <h3>Farmhouse Pizza</h3>
              <p>
                Fresh vegetables and mozzarella on a crispy crust.
              </p>
              <span>₹349</span>
            </div>
          </div>

          <div className="dish-card">
            <div className="dish-image">🍚</div>

            <div className="dish-info">
              <h3>Veg Biryani</h3>
              <p>
                Fragrant basmati rice with vegetables and spices.
              </p>
              <span>₹299</span>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default App;