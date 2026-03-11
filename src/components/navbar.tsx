"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon, GithubIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { useFavoritesStore } from "@/lib/favorites-store";

export function Navbar() {
  const pathname = usePathname();
  const favorites = useFavoritesStore((state) => state.favorites);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shaders", label: "Shaders" },
    { href: "/docs", label: "Docs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-8 flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-primary/60" />
          <span className="font-semibold text-lg">Lumina</span>
        </div>

        <nav className="flex items-center gap-6 text-sm flex-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-foreground/60",
              )}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/shaders?filter=favorites"
            className="ml-auto flex items-center gap-1.5 text-foreground/60 hover:text-foreground/80 transition-colors"
          >
            <HugeiconsIcon icon={FavouriteIcon} className="h-4 w-4" />
            {favorites.length > 0 && (
              <span className="text-xs">{favorites.length}</span>
            )}
          </Link>

          <a
            href="https://github.com/devsethi/lumina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground/80 transition-colors"
          >
            <HugeiconsIcon icon={GithubIcon} className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
