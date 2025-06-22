import React, { useState } from "react";
import { projects } from "../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(!selectedProject);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="w-full m-auto ">
        <div className="m-10">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-4">
                {" "}
                {/* Add horizontal padding here */}
                <div className="flex flex-col justify-between h-[650px] md:h-[600px] border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300">
                  <div className="p-4">
                    <img
                      src={project.image}
                      loading="lazy"
                      alt={project.title}
                      className="w-full h-48 object-contain rounded-xl"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto justify-center flex">
                      <a
                        href={project.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-1 px-2 py-1 rounded-xl lg:text-lg text-sm font-semibold text-center hover:shadow-2xl hover:cursor-pointer"
                      >
                        View Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Work;
