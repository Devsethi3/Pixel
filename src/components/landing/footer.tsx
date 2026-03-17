"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "../ui/logo";
import Link from "next/link";
import { ArrowUpIcon, TwitterIcon, GithubIcon } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t bg-muted/30">
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 lg:px-8",
          "dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]",
        )}
      >
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Brand Section */}
            <div className="md:col-span-5 lg:col-span-6">
              <Logo />
              <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
                Create beautiful background shaders for your next project with
                ease.
              </p>
              {/* Social Links */}
              <div className="mt-6 flex items-center gap-3">
                <Button variant={"outline"} size={"icon-lg"}>
                  <Link
                    href="https://x.com/imsethidev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground"
                  >
                    <TwitterIcon className="size-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button variant={"outline"} size={"icon-lg"}>
                  <Link
                    href="https://github.com/Devsethi3/Pixel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground"
                  >
                    <GithubIcon className="size-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-sm font-medium text-foreground">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/docs"
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates"
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Devsethi3/Pixel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 lg:col-span-3 flex md:justify-end">
              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="text-xs text-muted-foreground">
                  Back to top
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollToTop}
                  className="group size-10"
                >
                  <ArrowUpIcon className="size-4 transition-transform group-hover:-translate-y-0.5" />
                  <span className="sr-only">Back to top</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Dev Sethi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
