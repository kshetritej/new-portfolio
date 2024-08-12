import { Button } from "./ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="sm:h-[60vh] py-12  px-8 flex flex-col sm:flex-row justify-between">
      <div className="sm:w-1/2">
        <p>
          Ready to see your digital presence shine? Let's connect and explore
          how we can refine your user experience for exceptional outcomes
        </p>
        <div className="flex  items-center gap-5 py-12">
          <Button variant={"secondary"} className="rounded-full">
            Get in touch
          </Button>

          <div className="flex gap-3 text-5xl">
            <a href="https:://github.com/kshetritej" target="_blank">
              <Github />
            </a>
            <a href="https:://x.com/kshetritej" target="_blank">
              <Twitter />
            </a>
            <a href="https:://linkedin.com/in/kshetritej" target="_blank">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          width={240}
          src="/undraw_cat_epte.svg"
          alt="just-a-cat"
          className="p-8 flex m-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
