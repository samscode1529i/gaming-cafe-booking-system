
"use client";

import { useState } from "react";
import Link from "next/link";
import { Gamepad2, MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "#0b1a24" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl"
            style={{ backgroundColor: "#f5c433" }}
          >
            <Gamepad2 size={25} color="#0b1a24" strokeWidth={2.2} />
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            The Cordner
          </span>
        </Link>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

          <button className="rounded-lg border border-[#c2cbd1]/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#f5c433] hover:text-[#f5c433]">
            12hr
          </button>

          <button className="rounded-lg border border-[#c2cbd1]/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#f5c433] hover:text-[#f5c433]">
            24hr
          </button>

          <a
            href="https://wa.me/?text=Hi%2C%20I%27d%20like%20to%20make%20a%20booking."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition hover:brightness-110"
            style={{
              backgroundColor: "#f5c433",
              color: "#0b1a24",
            }}
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-5 pb-5 pt-2">

          <button
            onClick={() => setMenuOpen(false)}
            className="w-full rounded-lg border border-[#c2cbd1]/30 px-4 py-3 text-left text-sm font-semibold text-white transition hover:border-[#f5c433] hover:text-[#f5c433]"
          >
            12hr
          </button>

          <button
            onClick={() => setMenuOpen(false)}
            className="w-full rounded-lg border border-[#c2cbd1]/30 px-4 py-3 text-left text-sm font-semibold text-white transition hover:border-[#f5c433] hover:text-[#f5c433]"
          >
            24hr
          </button>

          <a
            href="https://wa.me/?text=Hi%2C%20I%27d%20like%20to%20make%20a%20booking."
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition hover:brightness-110"
            style={{
              backgroundColor: "#f5c433",
              color: "#0b1a24",
            }}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

        </div>
      </div>
    </nav>
  );
}
