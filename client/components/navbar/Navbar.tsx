// components/navbar/Navbar.tsx
import Brand from "./Brand";
import CenterNav from "./CenterNav";
import AuthButtons from "./AuthButtons";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <header className="header">
          {/* Left */}
          <Brand />

          {/* Center (desktop only) */}
          <CenterNav />

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Desktop auth */}
            <div className="hidden md:block">
              <AuthButtons />
            </div>

            {/* Mobile menu */}
            <MobileNav />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
