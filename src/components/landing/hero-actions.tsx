import { motion } from "motion/react";
import { TextureButton } from "../ui/texture-button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon } from "@hugeicons/core-free-icons";

const HeroActions = () => {
  return (
    <div>
      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-wrap items-center gap-3 pt-2"
      >
        <TextureButton asChild className="group">
          <Link href="/docs" className="gap-2 flex items-center">
            <span>Get Started</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </TextureButton>
        <TextureButton variant="accent" asChild>
          <Link
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 flex items-center"
          >
            <HugeiconsIcon icon={GithubIcon} className="size-4" />
            GitHub
          </Link>
        </TextureButton>
      </motion.div>

      {/* Stats */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex items-center gap-4 pt-4 text-xs text-muted-foreground"
      >
        <span>10 shaders</span>
        <span className="text-border">·</span>
        <span>4 categories</span>
        <span className="text-border">·</span>
        <span>shadcn CLI ready</span>
      </motion.div> */}
    </div>
  );
};

export default HeroActions;
