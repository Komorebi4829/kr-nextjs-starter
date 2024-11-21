"use client";
import HeaderLinks from "@/components/header/HeaderLinks";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { siteConfig } from "@/config/site";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { ThemedButton } from "../ThemedButton";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const links = [
  { label: "Features", href: "#Features" },
  { label: "Pricing", href: "#Pricing" },
  { label: "Testimonials", href: "#Testimonials" },
  { label: "FAQ", href: "#FAQ" },
];

const Header = () => {
  const params = useParams();
  const lang = params.lang;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => ({
        id: link.href.substring(1),
        element: document.getElementById(link.href.substring(1))
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      setActiveSection(currentSection ? currentSection.id : "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="backdrop-blur py-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sticky top-0 z-50 bg-gray-50/80 dark:bg-gray-900/80">
      <nav className="relative z-50 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center md:gap-x-12 flex-1">
          <Link
            href="/"
            aria-label="Landing Page Boilerplate"
            title="Landing Page Boilerplate"
            className="flex items-center space-x-1 font-bold"
          >
            {/* <Image
              alt="Logo"
              src="/logo.svg"
              className="w-8 h-8"
              width={32}
              height={32}
            /> */}
            <span className="text-2xl text-gray-950 dark:text-gray-300 hidden md:block">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        {/* Center section - Navigation */}
        <ul className="hidden md:flex items-center justify-center gap-8 flex-1 px-6 py-2 mx-6 rounded-full ring-1 ring-gray-200 dark:ring-gray-800 bg-white/50 dark:bg-gray-900/50">
          {links.map((link) => (
            <li
              key={link.label}
              className={
                activeSection === link.href.substring(1)
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }
            >
              <Link
                href={link.href}
                aria-label={link.label}
                title={link.label}
                className={`tracking-wide transition-colors duration-200 text-[15px] font-normal nav-link-underline ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                  }
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="hidden md:flex items-center justify-end gap-x-6 flex-1">
          <HeaderLinks />
          <ThemedButton />
          <LangSwitcher />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon className="dark:text-gray-300" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-background border rounded shadow-sm dark:border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Landing Page Boilerplate"
                      title="Landing Page Boilerplate"
                      className="inline-flex items-center"
                    >
                      <span className="text-xl font-bold tracking-wide text-gray-800 dark:text-gray-200">
                        {siteConfig.name}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CgClose className="w-5 h-5 dark:text-gray-300" />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          aria-label={link.label}
                          title={link.label}
                          className="font-medium tracking-wide text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li className="flex items-center gap-4">
                      <HeaderLinks />
                      <ThemedButton />
                      <LangSwitcher />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
