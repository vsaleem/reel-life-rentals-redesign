import Hero from "./components/Hero";
import Experience from "./components/Experience";
import { StayWithUs } from "./components/PropertyCard";
import ExploreArea from "./components/ExploreArea";
import BookingCta from "./components/BookingCta";
import "./index.css";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Experience />
        <StayWithUs />
        <ExploreArea />
        <BookingCta />
      </main>
      <footer className="footer">
        <div className="container">
          <span>&copy; {new Date().getFullYear()} Reel Life Rentals</span>
          <span>Lake Palo Pinto, Texas</span>
        </div>
      </footer>
    </>
  );
}
