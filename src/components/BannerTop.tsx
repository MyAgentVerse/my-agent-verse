import { Link } from "react-router-dom";

const BannerTop = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[hsl(var(--banner-gradient-start))] to-[hsl(var(--banner-gradient-end))] py-3 px-4 text-center">
      <p className="text-sm sm:text-base font-semibold text-white">
        Get Your AI Implementation Roadmap — The $10K Strategy for $299 →{" "}
        <Link 
          to="/consultation" 
          className="text-[hsl(var(--banner-link))] hover:underline hover:brightness-110 transition-all"
          aria-label="AI Implementation Roadmap Consultation Offer Banner"
        >
          Book Now
        </Link>
      </p>
    </div>
  );
};

export default BannerTop;
