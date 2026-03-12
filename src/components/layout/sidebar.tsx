"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

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

export function Sidebar() {
  const pathname = usePathname();
  const nav = buildSidebarNav();

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-border py-6 pr-4 scrollbar-thin lg:block">
      <nav className="space-y-6">
        {nav.map((category) => (
          <SidebarSection
            key={category.title}
            category={category}
            pathname={pathname}
          />
        ))}
      </nav>
    </aside>
  );
}

function SidebarSection({
  category,
  pathname,
}: {
  category: SidebarCategory;
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
      >
        {category.title}
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <ChevronRight className="size-3.5" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <ul className="mt-2 space-y-0.5">
          {category.links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative block rounded-md px-3 py-1.5 text-sm transition-colors",
                    isActive
                      ? "bg-accent font-medium text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}

export function MobileSidebar() {
  const pathname = usePathname();
  const nav = buildSidebarNav();

  return (
    <nav className="space-y-6 py-4">
      {nav.map((category) => (
        <SidebarSection
          key={category.title}
          category={category}
          pathname={pathname}
        />
      ))}
    </nav>
  );
}
