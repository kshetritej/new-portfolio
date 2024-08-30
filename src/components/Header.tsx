import { motion } from "framer-motion"
const Header = () => {
  return (
    <div className="flex h-[80vh] items-center relative p-4">
      <motion.div initial={{ opacity: 0, x:-10 }} whileInView ={{opacity:1,x:10}} className="p-4">
        <p className="text-xl md:text-2xl">I'm Tej - Web Designer 🖌️</p>
        <h1 className="font-medium text-4xl leading-relaxed">
          Helping individuals & businesses <br />
          crafting simple yet effective systems!
        </h1>
      </motion.div>
    </div>
  );
};

export default Header;
