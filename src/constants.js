
// Experience Section Logo's
import octanet from './assets/octanet.png'
import wwl from './assets/wwl.png'

// Education Section Logo's
import MRU from './assets/MRU.png'
import MDU from './assets/MDU.png'
import DAV from './assets/DAV.png'

// Project Section Logo's
import gaming from './assets/gaming.png';
import food from './assets/food.png';
import edtech from './assets/edtech.png';
import book from './assets/book.png';
import agency from "./assets/agency-website.png"

  export const experiences = [
    {
      id: 0,
      img: wwl,
      role: "Web Developer",
      company: "World Weblogoic Pvt. Ltd.",
      date: "February 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Redux",
        "TypeScript",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        "Next Js",
      ],
    },
    {
      id: 1,
      img: octanet,
      role: "Web Developer Intern",
      company: "Octanet Pvt. Ltd.",
      date: "June 2024 - August 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ]
  
  export const education = [
    {
      id: 0,
      img: MRU,
      school: "MANAV RACHNA UNIVERSITY",
      date: "June 2023 - July 2025",
      grade: "7.81 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Manav Rachna University, Haryana. During my time at MRU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Manav Rachna University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: MDU,
      school: "MAHARSHI DAYANAND UNIVERSITY",
      date: "June 2019 - July 2022",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Application (BCA) from MAHARSHI DAYANAND UNIVERSITY, Haryana. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at MAHARSHI DAYANAND UNIVERSITY allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BCA",
    },
    {
      id: 2,
      img: DAV,
      school: "D.A.V PUBLIC SCHOOL, JASOLA VIHAR",
      date: "Apr 2017 - March 2019",
      grade: "78%",
      desc: "I completed my class 12 education from D.A.V PUBLIC SCHOOL, JASOLA VIHAR, under the CBSE board, where I studied Commerce.",
      degree: "CBSE(XII) - Commerce",
    },
    {
      id: 3,
      img: DAV,
      school: "D.A.V PUBLIC SCHOOL, JASOLA VIHAR",
      date: "Apr 2015 - March 2016",
      grade: "87.5%",
      desc: "I completed my class 10 education from D.A.V PUBLIC SCHOOL, JASOLA VIHAR, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Gaming website",
      description:
        "Developed a feature-rich gaming website using React.js, framer-motion, and Tailwind CSS, translating UI/UX mockups into a responsive and user-friendly interface.",
      image: gaming,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://gaming-website-cyan.vercel.app/",
    },
    {
      id: 1,
      title: "Book Store Website",
      description:
        "Developed a high-performance Book-store website using React.js, Redux, Tailwind CSS, and REST APIs translating UI/UX mockups into a responsive and user-friendly interface.",
        name: "Book Store Website",
      image: book,
      tags: ["React JS", "JavaScript", "Redux" , 'Express JS', 'MongoDB', 'Node JS'],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://book-store-frontend-24sf.vercel.app/",
    },
    {
      id: 2,
      title: "Agency Website",
      description:
        "Developed a high-performance Agency website using React.js, Redux, Tailwind CSS, and REST APIs translating UI/UX mockups into a responsive and user-friendly interface.",
        name: "Book Store Website",
      image: agency,
      tags: ["React JS", "HTML", "CSS", "JavaScript", "Tailwind CSS", 'API', 'Framer Motion'],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://agency-website-mu-seven.vercel.app/",
    },
    {
      id: 3,
      title: "Food Delivery Website",
      description:
        "Developed a feature-rich food-delivery website using React.js, Redux, and Tailwind CSS, translating UI/UX mockups into a responsive and user-friendly interface.",
        name: "Food Delivery Website",
      image: food,
      tags: ["React JS", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Redux", "API"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://food-delivery-delta-nine.vercel.app/",
    },
     {
        id: 4,
        title: "Ed-tech Website",
        description: "Developed a feature-rich education-tech website using React.js, Redux, and Tailwind CSS, translating UI/UX mockups into a responsive and user-friendly interface.",
        name: "Education-tech Website",
        image: edtech,
        webapp: "https://education-tech-website.vercel.app/",
        tags: ["HTML", "CSS","JavaScript","React.js", "Framer-motion", "Tailwind CSS"],
    },
  ];  