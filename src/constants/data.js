import css3 from "../assets/icons/css3.png";
import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";
import html5 from "../assets/icons/html5.png";
import javascript from "../assets/icons/javascript.png";
import mui from "../assets/icons/mui.png";
import node from "../assets/icons/node.png";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import sass from "../assets/icons/sass.png";
import typescript from "../assets/icons/typescript.png";
import newsteller from "../assets/projects/newsteller.jpg";
import innvoicegenerator from "../assets/projects/innvoicegenerator.png";
import dashboard from "../assets/projects/dashboard.jpeg";

export const SKILLS = [
  {
    id: 1,
    skill: <img alt="html5" src={html5} />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <img alt="css3" src={css3} />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <img alt="javascript" src={javascript} />,
    name: "Javascript",
  },
  {
    id: 4,
    skill: <img alt="mui" src={mui} />,
    name: "Material UI",
  },
  {
    id: 5,
    skill: <img alt="react" src={react} />,
    name: "React",
  },
  {
    id: 6,
    skill: <img alt=" node" src={node} />,
    name: "NodeJs",
  },
  {
    id: 7,
    skill: <img alt="redux" src={redux} />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <img alt="typescript" src={typescript} />,
    name: "Typescript",
  },
  {
    id: 9,
    skill: <img alt="sass" src={sass} />,
    name: "SASS",
  },
  // {
  //   id: 10,
  //   skill: <img alt="docker" src={docker} />,
  //   name: "Docker",
  // },
  {
    id: 12,
    skill: <img alt="git" src={git} />,
    name: "Git",
  },
  {
    id: 13,
    skill: <img alt="github" src={github} />,
    name: "GitHub",
  },
];

export const PROJECTS = [
  {
    link: "https://github.com/pratikj12/ecommerce_site.git",
    title: "Ecommersce site for mobile shop",
    techStack: "Tech Stack: ReactJs, Javascript",
    desc: "I developed a React dashboard using React Router with reusable components for mobile products.",
    image: dashboard,
  },
  {
    link: "https://github.com/pratikj12/invoice-generator.git",
    title: "Invoice Generator",
    techStack: "Tech Stack- ReactJs, Material UI, React Hook Form, Typescript",
    desc: "I created a React-based invoice generator for streamlined and efficient invoicing.",
    image: innvoicegenerator,
  },
  {
    link: "https://github.com/pratikj12/news-teller.git",
    title: "The Daily Scoop",
    techStack: "Tech Stack- ReactJs, Material UI, Typescript, React Query",
    desc: "The Daily Scoop is a user-friendly news teller app that delivers breaking news and current events in a simple and streamlined format.",
    image: newsteller,
  },
  
];

export const RESUME_LINK =
  "https://drive.google.com/file/d/1SzAHKG-jBowDi1oHVhILq9PsLqnwCFao/view?usp=sharing";

export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/pratik-jadhav-2602aa199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

export const GITHUB_LINK = "https://github.com/pratikj12";

export const FORM_SUBMIT_LINK =
  "https://formsubmit.co/110829814ede14ab1ec697c5686b3766";

export const MY_NAME = "Pratik Jadhav";
