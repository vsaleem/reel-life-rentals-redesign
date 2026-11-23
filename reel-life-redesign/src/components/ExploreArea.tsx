
const nearbyPlaces = [
  {
    category: "OUTDOOR ADVENTURE",
    name: "Palo Pinto Mountains State Park",
    description:
      "Make a day of exploring North Texas outdoors. The park offers 16 miles of multiuse trails for hiking, biking, and horseback riding, plus wildlife viewing and beautiful scenic overlooks.",
    detail: "Strawn, Texas",
    link: "https://tpwd.texas.gov/state-parks/palo-pinto-mountains",
    linkText: "Explore the state park",
  },
  {
    category: "LOCAL HISTORY & CULTURE",
    name: "Historic Mineral Wells",
    description:
      "Spend an afternoon discovering a town known for its mineral-water history, historic architecture, downtown murals, local shops, and distinctive small-town character.",
    detail: "Mineral Wells, Texas",
    link: "https://visitmineralwells.org/plan-your-trip",
    linkText: "Discover Mineral Wells",
  },
  {
    category: "A LITTLE SOMETHING DIFFERENT",
    name: "Mineral Wells Fossil Park",
    description:
      "Looking for a family-friendly outing? Visit this unique outdoor destination where visitors can search for fossils and learn more about the area's prehistoric past.",
    detail: "Mineral Wells, Texas",
    link: "https://www.mineralwellsfossilpark.com/",
    linkText: "Learn about the Fossil Park",
  },
];

export default function ExploreArea() {
  return (
    <section
      className="section section--sand"
      id="explore"
      aria-labelledby="explore-title"
    >
      <div className="container">
        <div className="explore-top">
          <div className="explore-copy">
            <p className="eyebrow">A Little More to Explore</p>

            <h2 id="explore-title">
              Find your way
              <br />
              to the good stuff.
            </h2>

            <p>
              Tucked into the North Texas landscape, Lake Palo Pinto is
              a place to trade busy schedules for open water, fresh air,
              and time outdoors. Whether you're here for a fishing
              weekend or a change of scenery, there's plenty to enjoy
              around the lake.
            </p>

            <p>
              The surrounding area offers its own kind of adventure,
              from small-town history to scenic trails and outdoor
              discoveries.
            </p>

            <div className="stats">
              <div className="stat">
                <span className="stat__value">2,399</span>
                <span className="stat__label">
                  Acres of lake surface
                </span>
              </div>

              <div className="stat">
                <span className="stat__value">47 ft</span>
                <span className="stat__label">
                  Maximum reservoir depth
                </span>
              </div>

              <div className="stat">
                <span className="stat__value">1964</span>
                <span className="stat__label">
                  Year the reservoir was impounded
                </span>
              </div>
            </div>

            <a
              className="text-link"
              href="https://tpwd.texas.gov/fishboat/fish/recreational/lakes/palo_pinto/index.phtml"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn about Lake Palo Pinto fishing
            </a>
          </div>

          <div className="explore-map">
            <iframe
              title="Map showing Lake Palo Pinto, Texas"
              src="https://maps.google.com/maps?q=Lake%20Palo%20Pinto%2C%20Texas&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="section-head">
          <p className="eyebrow">Beyond the Shoreline</p>

          <h2>Make a day of exploring.</h2>

          <p>
            If you feel like venturing beyond the water, there are
            a few more North Texas destinations worth adding to your
            getaway.
          </p>
        </div>

        <div className="place-grid">
          {nearbyPlaces.map((place) => (
            <article className="place-card" key={place.name}>
              <p className="place-card__town">{place.category}</p>

              <h3>{place.name}</h3>

              <p>{place.description}</p>

              <p className="place-card__town" style={{ marginTop: "1rem" }}>
                {place.detail}
              </p>

              <a
                className="text-link"
                href={place.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {place.linkText} →
              </a>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <p className="explore-copy">
            <strong>Love a fishing day?</strong> Lake Palo Pinto is known
            for largemouth bass, white and hybrid striped bass, catfish,
            and white crappie. Public boat ramps are available around
            the reservoir, including the North Ramp, Love Ramp, and
            FM 2692 Ramp. Check current lake conditions and access
            information before heading out.
          </p>

          <a
            className="text-link"
            href="https://tpwd.texas.gov/fishboat/fish/recreational/lakes/palo_pinto/access.phtml"
            target="_blank"
            rel="noopener noreferrer"
          >
            View public boat access information
          </a>
        </div>
      </div>
    </section>
  );
}
