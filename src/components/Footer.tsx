import { Button } from "./ui/button";
import { Github,  Linkedin, Twitter } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {  
    navigate('/contact');
  }
  return (
    <div className="sm:h-[60vh] py-12 px-16  flex flex-col lg:flex-row justify-between">
      <div className="">
        <p>
          Ready to see your digital presence shine? Let's connect and explore
          how we can refine your user experience for exceptional outcomes.
        </p>
        <div className="flex  items-center gap-5 py-12">
          <Button onClick={handleSubmit} variant={"secondary"} className="rounded-full">
          Get in Touch 
          </Button>

          <div className="flex gap-3 text-5xl">
            <a href="https://github.com/kshetritej" target="_blank">
              <Github />
            </a>
            <a href="https://x.com/kshetritej_" target="_blank">
              <Twitter />
            </a>
            <a href="https://linkedin.com/in/kshetritej" target="_blank">
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
