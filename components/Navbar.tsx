"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Platform", path: "/platform" },
    { name: "Solutions", path: "/solutions" },
    { name: "Resources", path: "/resources" },
    { name: "Open Source", path: "/open-source" },
    { name: "Enterprise", path: "/enterprise" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav
      className={`w-[2412px] h-[40px] flex items-center gap-[18px] text-[17px] p-[35px] fixed top-0 left-0 z-50 transition-all duration-300
      ${scrolled ? "bg-[#000106] text-white" : "bg-transparent text-white"}`}
    >
      {/* Logo SVG */}
      <svg
        height="32"
        width="32"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="text-white fill-white"
      >
        <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" />
      </svg>

      {/* Nav Items */}
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="hover:text-blue-500 transition flex items-center gap-1"
        >
          {item.name}

          {item.name !== "Pricing" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </Link>
      ))}
    </nav>
  );
}
