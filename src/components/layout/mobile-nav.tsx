"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./sidebar";

export function MobileDocNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on navigation
  const handleClose = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="mb-4 gap-2"
      >
        <Menu className="size-4" />
        Navigation
      </Button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-background p-4 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold">Navigation</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8"
                  onClick={handleClose}
                >
                  <X className="size-4" />
                </Button>
              </div>

              <div onClick={handleClose}>
                <MobileSidebar />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
