
import  {SKILLS}  from "../data/Config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Skills() {

    const SkillCircle = ({ skill, icon }) => {
      const radius = 50;
      const circumference = 2 * Math.PI * radius;
  
      return (
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center"
        >
          <svg width={120} height={120} className="rotate-[-90deg]">
            {/* Static background circle */}
            <circle
              cx={60}
              cy={60}
              r={50}
              fill="transparent"
              stroke="#ffffff29"
              strokeWidth={10}
            />
            {/* Animated yellow border circle */}
            <motion.circle
              cx={60}
              cy={60}
              r={50}
              fill="transparent"
              stroke="#a855f7"
              strokeWidth={10}
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{
                strokeDashoffset: 0, // Animate from full to empty circle
              }}
              transition={{
                duration: 4, // Animation duration
                ease: "easeInOut", // Smooth easing
              }}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={icon} alt={skill} className="w-10 h-10 mb-1" loading="lazy"/>
            <p className="text-sm">{skill}</p>
          </div>
        </motion.article>
      );
    };
  

  return (
    <>
      <section className="relative" id="skills">
        <header className="absolute w-1/2 aspect-[16/3] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
        <header className="absolute w-1/2 aspect-[16/1] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>
        <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
      </div>
        <section className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 p-16 text-white mt-2">
          {SKILLS.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <SkillCircle skill={item.skill} icon={item.icon} />
            </motion.article>
          ))}
        </section>
      </section>
    </>
  );
}

export default Skills;
