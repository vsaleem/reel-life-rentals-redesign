
const experiences = [
  {
    number: "01",
    title: "A little time on the water",
    kicker: "FISH · FLOAT · EXPLORE",
    description:
      "Cast a line, take the boat out, or enjoy a slower afternoon along the shoreline. Around here, the water sets the pace.",
    image: "/images/lake-fishing.jpeg",
    alt: "A peaceful fishing scene on Lake Palo Pinto",
  },
  {
    number: "02",
    title: "Mornings without a hurry",
    kicker: "SLOW DOWN",
    description:
      "Start the day with fresh air, a quiet view, and nowhere in particular you need to be. That's part of the getaway.",
    image: "/images/lake-morning.jpeg",
    alt: "Soft morning light over a quiet lake",
  },
  {
    number: "03",
    title: "Room to enjoy the outdoors",
    kicker: "GET OUTSIDE",
    description:
      "Take in the open skies, shoreline scenery, and the little moments that make time outside feel like time well spent.",
    image: "/images/lake-outdoors.jpeg",
    alt: "Natural scenery along a Texas lake",
  },
  {
    number: "04",
    title: "Stay for the sunsets",
    kicker: "END THE DAY WELL",
    description:
      "When the light starts to fade, settle in by the water and enjoy the kind of evening that makes you want to stay one more night.",
    image: "/images/lake-sunset.jpeg",
    alt: "Golden sunset reflecting across a lake",
  },
];

export default function Experience() {
  return (
    <section
      className="section section--sand"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">The Lake Palo Pinto Experience</p>

          <h2 id="experience-title">
            More than a place to stay.
            <br />
            It's a different kind of day.
          </h2>

          <p>
            Some trips are about seeing more. This one is about slowing down
            enough to enjoy what's right in front of you. From early mornings
            on the water to evenings under an open Texas sky, make room for
            the moments that matter.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.number}>
              <img
                className="experience-card__image"
                src={experience.image}
                alt={experience.alt}
                loading="lazy"
              />

              <div className="experience-card__content">
                <p className="experience-card__kicker">
                  {experience.kicker}
                </p>

                <h3>{experience.title}</h3>

                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
