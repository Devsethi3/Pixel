"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Github, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { PackageManagerSelector } from "@/components/docs/package-manager-selector";
import ThemeToggle from "../ui/theme-toggle";

const navLinks = [
  { href: "/", label: "Gallery" },
  { href: "/docs", label: "Docs" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header>
      <nav className="fixed z-20 w-full px-2">
        <div
          className={cn(
            `
      mx-auto mt-2
      w-full max-w-6xl
      px-3 sm:px-4 lg:px-6
      bg-background/60
      backdrop-blur-lg
      rounded-2xl
      border
      transition-all duration-300
      `,
            isScrolled && "max-w-4xl px-3 sm:px-4 lg:px-5",
          )}
        >
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <span className="text-sm font-semibold tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3 py-1.5 text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <PackageManagerSelector />
              </div>

              <Button variant="outline" size="lg" asChild>
                <Link
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="size-4" />
                  GitHub
                </Link>
              </Button>

              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="size-8 md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="size-4" />
                ) : (
                  <Menu className="size-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
