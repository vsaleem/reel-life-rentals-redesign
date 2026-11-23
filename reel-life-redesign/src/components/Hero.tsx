
export default function Hero() {
  return (
    <header className="hero">
      <img
        className="hero__image"
        src="/images/lake-palo-pinto-hero.jpeg"
        alt="Lake Palo Pinto at golden hour, with calm water and a wide Texas sky"
        fetchPriority="high"
      />

      <nav className="hero__nav" aria-label="Main navigation">
        <div className="container hero__nav-inner">
          <a className="hero__brand" href="#" aria-label="Reel Life Rentals home">
            Reel Life Rentals
          </a>

          <div className="hero__links">
            <a href="#experience">The Experience</a>
            <a href="#stay">Our Rentals</a>
            <a href="#explore">Explore the Area</a>
            <a className="btn btn--light btn--sm" href="#book">
              Book Your Stay
            </a>
          </div>
        </div>
      </nav>

      <div className="container hero__content">
        <p className="eyebrow">REEL LIFE RENTALS · LAKE PALO PINTO, TEXAS</p>

        <h1>
          A little closer to the water.
          <br />
          A little farther from <em>everything else.</em>
        </h1>

        <p className="hero__lede">
          Quiet mornings, days on the water, and sunsets worth staying up for.
          Find your own kind of lake life at Lake Palo Pinto.
        </p>

        <div className="hero__actions">
          <a className="btn btn--light" href="#stay">
            Explore the Rentals
          </a>

          <a className="btn btn--outline-light" href="#experience">
            Discover the Experience
          </a>
        </div>
      </div>
    </header>
  );
}
