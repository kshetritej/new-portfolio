import { Globe2, LucidePaperclip, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";
const Services = () => {
  const services = [
    {
      icon: <Globe2 size={42} />,
      name: "Streamline & Launch Web Presence",
      description:
        "Businesses often overcomplicate their online presence. I simplify and launch clear, focused websites that resonate with your target audience.",
    },
    {
      icon: <LucidePaperclip size={42} />,
      name: "Craft Simple yet Engaging Landing Pages",
      description:
        "Landing pages can easily become cluttered. I specialize in designing clean, effective landing pages that drive conversions.",
    },
    {
      icon: <Paintbrush size={42} />,
      name: "Optimize & Redesign User Experience",
      description:
        "When websites grow, they often lose their original simplicity. I help redesign and optimize user experiences to make your website more intuitive and user-friendly.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 p-4  py-12 lg:h-[50vh]">
        {services.map((service) => {
          return (
            <motion.div
              
              initial="hidden"
              whileInView="visible"
              
              key={service.name}
              className="w-[320px] flex gap-3 flex-col p-4"
            >
              <div className="text-red-200">{service.icon}</div>
              <div className="py-2">
                <h2 className="font-medium text-lg">{service.name}</h2>
              </div>
              <p>{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
