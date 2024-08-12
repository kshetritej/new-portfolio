import { Github, Linkedin, Send, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <div className="p-8 flex justify-between align-center">
      <div>
        <Button variant={'ghost'} >
           <a className="flex gap-3" href="mailto:hey@t3j.dev"><Send className="hover:-translate-y-2" />  hey@t3j.dev</a> 
        </Button>
      </div>
      <div className="flex gap-3 text-xl">
        <a href="https:://github.com/kshetritej" target="_blank">
          <Github/>
        </a>
        <a href="https:://x.com/kshetritej" target="_blank">
          <Twitter/>
        </a>
        <a href="https:://linkedin.com/in/kshetritej" target="_blank">
          <Linkedin/>
        </a>
      </div>
    </div>
  );
};

export default Nav;
