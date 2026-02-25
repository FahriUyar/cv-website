import { FaChevronUp } from "react-icons/fa";

export default function Footer({ data }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>{data.copyright}</p>
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
