import { Github, HomeIcon, Linkedin, Send, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
        <a href="https://github.com/kshetritej" target="_blank">
          <Github />
        </a>
        <a href="https://x.com/kshetritej_" target="_blank">
          <Twitter />
        </a>
        <a
          href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=kshetritej"
          target="_blank"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default Nav;
