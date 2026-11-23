export interface BookingLink {
  platform: string;
  href: string;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  chips: string[];
  highlights: string[];
  note: string;
  facts: string[];
  booking: BookingLink[];
}

export const properties: Property[] = [
  {
    id: "dock-holiday",
    name: "Dock Holiday",
    location: "Lake Palo Pinto · Gordon, Texas",
    tagline: "Your own little corner of lake life.",
    description:
      "A waterfront getaway made for fishing days, time on the dock, and evenings spent enjoying the view. Bring your boat, gather your people, and settle into the rhythm of the lake.",
    image: "/images/dock-holiday.jpeg",
    imageAlt: "Dock Holiday waterfront home and outdoor space",
    facts: ["3 bedrooms", "Sleeps 6", "2.5 bathrooms"],
    chips: ["Private dock", "2 kayaks", "Lake views"],
    highlights: [
      "Direct access to Lake Palo Pinto",
      "Private dock for fishing and relaxing",
      "Open-concept kitchen and living area",
      "Enclosed all-weather porch",
    ],
    note:
      "A great fit for a group getaway, fishing weekend, or a little more room to spread out.",
    booking: [
      {
        platform: "Vrbo",
        href: "https://www.vrbo.com/en-ca/cottage-rental/p4959138vb",
      },
    ],
  },
  {
    id: "crappie-house",
    name: "The Crappie House",
    location: "Lake Palo Pinto · Palo Pinto, Texas",
    tagline: "A cozy hideaway for the fishing-minded.",
    description:
      "Right on the water at the quiet north end of Lake Palo Pinto, The Crappie House is a laid-back retreat with a private dock, boathouse, and easy access to a peaceful cove.",
    image: "/images/crappie-house.jpeg",
    imageAlt: "The Crappie House lakeside retreat and covered deck",
    facts: ["Sleeps 5", "2 private bedrooms", "2 bathrooms"],
    chips: ["Private dock", "Boathouse", "2 kayaks"],
    highlights: [
      "Waterfront location in a protected no-wake cove",
      "Private dock and boathouse",
      "Two kayaks available for guest use",
      "A peaceful setting for fishing and unwinding",
    ],
    note:
      "A natural choice for a fishing-focused getaway or a slower weekend by the water.",
    booking: [
      {
        platform: "Vrbo",
        href: "https://www.vrbo.com/en-ca/cottage-rental/p2847782vb",
      },
    ],
  },
];