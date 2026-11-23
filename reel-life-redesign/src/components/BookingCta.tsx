import { properties } from "../utils/constants";

// The site doesn't publish an owner email or phone number.
// Add yours here and the contact line will appear automatically.
const CONTACT = {
  email: "", // e.g. "hello@reelliferentals.com"
  phone: "", // e.g. "(940) 555-0123"
};

export default function BookingCta() {
  const hasContact = Boolean(CONTACT.email || CONTACT.phone);

  return (
    <section className="section section--navy" id="book" aria-labelledby="book-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Book Your Stay</p>
          <h2 id="book-title">Your spot on the water is waiting.</h2>
          <p>
            Reserve directly on Airbnb or Vrbo. Pick the house that fits your
            lake days.
          </p>
        </div>

        <div className="booking-grid">
          {properties.map((property) => (
            <article className="booking-card" key={property.id}>
              <h3>{property.name}</h3>
              <p>{property.facts.join(" \u00b7 ")}</p>
              <div className="booking-card__actions">
                {property.booking.map((link, index) => (
                  <a
                    key={link.platform}
                    className={`btn ${index === 0 ? "btn--light" : "btn--outline-light"}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${property.name} on ${link.platform} (opens in a new tab)`}
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="booking-contact">
          {hasContact ? (
            <>
              Questions before you book? Reach out
              {CONTACT.email && (
                <>
                  {" "}
                  at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </>
              )}
              {CONTACT.phone && (
                <>
                  {CONTACT.email ? " or " : " at "}
                  <a href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}>{CONTACT.phone}</a>
                </>
              )}
              .
            </>
          ) : (
            <>Questions before you book? Message us through the Airbnb or Vrbo listing.</>
          )}
        </p>
      </div>
    </section>
  );
}
