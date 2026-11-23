import { properties } from "../utils/constants";

export interface BookingLink {
  platform: string;
  href: string;
}
export function StayWithUs() {
  return (
    <section
      className="section"
      id="stay"
      aria-labelledby="stay-title"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Stay With Us</p>

          <h2 id="stay-title">
            Two places to make
            <br />
            the lake your own.
          </h2>

          <p>
            The best part of a lake getaway? Finding the right place to come
            back to after a day outside. Get to know our two waterfront
            rentals and choose the stay that feels right for you.
          </p>
        </div>

        <div className="property-grid">
          {properties.map((property) => (
            <article className="property-card" key={property.id}>
              <div className="property-card__media">
                <img
                  src={property.image}
                  alt={property.imageAlt}
                  loading="lazy"
                />
              </div>

              <div className="property-card__body">
                <p className="property-card__location">
                  {property.location}
                </p>

                <h3>{property.name}</h3>

                <p className="property-card__tagline">
                  {property.tagline}
                </p>

                <p className="property-card__description">
                  {property.description}
                </p>

                <ul className="chips" aria-label={`${property.name} details`}>
                  {property.chips.map((chip) => (
                    <li key={chip}>{chip}</li>
                  ))}
                </ul>

                <ul className="highlights">
                  {property.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <p className="property-card__note">{property.note}</p>

                <div className="property-card__actions">
                  {property.booking.map((link) => (
                    <a
                      className="btn btn--dark"
                      href={link.href}
                      key={link.platform}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${property.name} on ${link.platform} (opens in a new tab)`}
                    >
                      View on {link.platform}
                    </a>
                  ))}

                  <a
                    className="btn btn--outline-dark"
                    href="#book"
                  >
                    Booking Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
