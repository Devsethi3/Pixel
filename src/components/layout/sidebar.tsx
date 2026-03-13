"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useState, useCallback, useMemo } from "react";

import { cn } from "@/lib/utils";
import { SHADERS_CONFIG } from "@/lib/shaders-config";
import { CATEGORIES } from "@/lib/constants";

interface SidebarLink {
  title: string;
  href: string;
}

interface SidebarCategory {
  title: string;
  links: SidebarLink[];
}

function buildSidebarNav(): SidebarCategory[] {
  const gettingStarted: SidebarCategory = {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  };

  const categoryGroups = CATEGORIES.filter(
    (c) => c.id !== "all" && c.id !== "favorites",
  ).map((cat) => ({
    title: cat.label,
    links: SHADERS_CONFIG.filter((s) => s.category === cat.id).map(
      (shader) => ({
        title: shader.name,
        href: `/docs/${shader.id}`,
      }),
    ),
  }));

  return [gettingStarted, ...categoryGroups.filter((g) => g.links.length > 0)];
}

// ─── Sidebar Link Item ─────────────────────────────────────────────────────

function SidebarItem({
  link,
  isActive,
  onClick,
}: {
  link: SidebarLink;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <li>
      <Link
        href={link.href}
        onClick={onClick}
        className={cn(
          "group relative flex items-center rounded-md px-2.5 py-1.5 text-[13px] transition-colors duration-150",
          isActive
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {/* Active indicator bar */}
        {isActive && (
          <motion.div
            layoutId="sidebar-indicator"
            className="absolute inset-y-1 left-0 w-[2px] rounded-full bg-foreground"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 35,
              mass: 0.5,
            }}
          />
        )}

        {/* Active background */}
        {isActive && (
          <motion.div
            layoutId="sidebar-active-bg"
            className="absolute inset-0 rounded-md bg-muted/60"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 35,
              mass: 0.5,
            }}
          />
        )}

        <span className="relative z-10">{link.title}</span>
      </Link>
    </li>
  );
}

// ─── Collapsible Section ────────────────────────────────────────────────────

function SidebarSection({
  category,
  pathname,
  defaultOpen = true,
  onLinkClick,
}: {
  category: SidebarCategory;
  pathname: string;
  defaultOpen?: boolean;
  onLinkClick?: () => void;
}) {
  const hasActiveLink = category.links.some((link) => pathname === link.href);
  const [isOpen, setIsOpen] = useState(defaultOpen || hasActiveLink);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div>
      <button
        onClick={toggle}
        className={cn(
          "group flex w-full items-center gap-1 py-1 text-[13px] font-medium transition-colors duration-150",
          "text-muted-foreground hover:text-foreground",
        )}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className="flex items-center justify-center"
        >
          <ChevronRight className="size-3 text-muted-foreground/60" />
        </motion.div>
        <span>{category.title}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                type: "spring",
                stiffness: 500,
                damping: 40,
                mass: 0.5,
              },
              opacity: { duration: 0.15, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <ul className="ml-1 border-l border-border/50 py-1 pl-2 space-y-0.5">
              {category.links.map((link) => (
                <SidebarItem
                  key={link.href}
                  link={link}
                  isActive={pathname === link.href}
                  onClick={onLinkClick}
                />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Sidebar Navigation ─────────────────────────────────────────────────────

function SidebarNav({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();
  const nav = useMemo(() => buildSidebarNav(), []);

  return (
    <LayoutGroup>
      <nav className="space-y-4">
        {nav.map((category) => (
          <SidebarSection
            key={category.title}
            category={category}
            pathname={pathname}
            onLinkClick={onLinkClick}
          />
        ))}
      </nav>
    </LayoutGroup>
  );
}

// ─── Desktop Sidebar ────────────────────────────────────────────────────────

export function Sidebar() {
  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-56 shrink-0 lg:block">
      <div className="h-full overflow-y-auto overflow-x-hidden py-6 pr-4 scrollbar-thin">
        <SidebarNav />
      </div>

      {/* Fade-out gradient at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-4 h-8 bg-gradient-to-t from-background to-transparent" />
    </aside>
  );
}

// ─── Mobile Sidebar (for sheet/drawer) ──────────────────────────────────────

export function MobileSidebar({ onClose }: { onClose?: () => void }) {
  return (
    <div className="overflow-y-auto py-4 px-2">
      <SidebarNav onLinkClick={onClose} />
    </div>
  );
}
