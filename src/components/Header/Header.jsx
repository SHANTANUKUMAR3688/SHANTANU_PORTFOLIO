
import React from 'react';
import { motion } from 'framer-motion';
import about from '../../assets/contact-img.svg'
function Header() {
  return (
    <section id='about' classname='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className="flex flex-col lg:flex-row justify-between mt-40 mb-10 px-4 md:px-16">
        {/* Image Section with scroll animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center lg:justify-start mb-8 lg:mb-0"
        >
          <img
            src={about}
            alt="about"
            className="w-[6000px] rouned-full shadow-lg"
          />
        </motion.div>

        {/* Text Section with scroll animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 lg:ml-20"
        >
          <div className=" mb-6">
        <h2 className="text-4xl font-bold text-white sm:justify-center">ABOUT US</h2>
        <div className="w-32 h-1 bg-purple-500 mt-4"></div>
      </div>
          <p className=" sm:text-lg md:text-lg lg:text-xl text-white text-justify">
            I am a Web developer with a passion for creating innovative and user-friendly applications. I have specialized in crafting dynamic, responsive web pages and intuitive UI/UX designs. Explore my portfolio to discover how I transform ideas into visually engaging and functional digital experiences through clean, efficient code and innovative design solutions. Welcome to My Portfolio I am a working professional, specializing in Web Development from Faridabad, Haryana, India. With expertise in MERN STACK, I am dedicated to developing user-centric digital solutions and building scalable applications. I am eager to enhance my skills, explore emerging technologies, and collaborate on impactful projects. If you are interested in discussing potential collaborations, feel free to connect. Thank you for visiting my portfolio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Header;


