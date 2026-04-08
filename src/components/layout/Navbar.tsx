"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass shadow-[var(--shadow-ghost)]">
        <div className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="Clean View Glass Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="text-xl lg:text-2xl font-extrabold tracking-tighter text-on-surface font-headline uppercase">
              {BUSINESS.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-headline font-bold text-sm tracking-wide transition-all duration-200 ease-out cursor-pointer ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button href="/contact" variant="gradient">
              Get a Free Quote
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-on-surface cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-surface-lowest shadow-[var(--shadow-ghost-lg)] pt-20 px-6">
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-headline font-bold text-lg tracking-tight transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-primary" : "text-on-surface hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button
                href="/contact"
                variant="gradient"
                className="mt-4 w-full text-center"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
