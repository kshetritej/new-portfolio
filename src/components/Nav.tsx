import { Github, HomeIcon, Linkedin, Send, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/motion-primitives/AnimatedBackground";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TABS = [
  {
    icon: <Github />,
    link: "https://github.com/kshetritej",
  },

  {
    icon: <Twitter />,
    link: "https://x.com/kshetritej_",
  },

  {
    icon: <Linkedin />,
    link: "https://linkedin.com/in/kshetritej",
  },
];

const Nav = () => {
  return (
    <div className="p-8 flex justify-between align-center container">
      <div className="flex gap-4 items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/">
                <HomeIcon />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Go to Homepage</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button variant={"ghost"}>
          <Link className="hidden md:flex gap-4" to="/contact">
            <Send className="hover:-translate-y-2" /> hey@t3j.dev
          </Link>
        </Button>
      </div>
      <div className="flex gap-3 text-xl">
        <AnimatedBackground
          className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover
        >
          {TABS.map((tab, index) => (
            <button
              key={index}
              data-id={`tab-${index}`}
              type="button"
              className="p-4 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              <a href={tab.link} target="_blank">
                {tab.icon}
              </a>
            </button>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  );
};

export default Nav;
