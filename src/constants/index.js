import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    door,
    redux,
    scc,
    tailwind,
    nodejs,
    utcs,
    mongodb,
    givingTree,
    summaryAI,
    carpet,
    cplus,
    java,
    pyTorch,
    openCV,
    git,
    figma,
    docker,
    uh,
    convergent,
    ut,
    cognizant,
    bofa,
    utd,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Robotics Researcher",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "ML/AI Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "OpenCV",
      icon: openCV,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "PyTorch",
      icon: pyTorch,
    },
  ];
  
  const experiences = [
    {
      title: "Tech Summer Camp Instructor",
      company_name: "University of Houston",
      icon: uh,
      iconBg: "#383E56",
      date: "May 2020 - August 2020",
      points: [
        "Orchestrated virtual technology summer camp for approximately 200 local elementary students.",
        "Provided instruction to students on introductory computational and engineering skills to implement in a final project.",
        "Introduced students to introductory Java, Python, HTML, and CAD (3D Printing).",
        "Organized summer camp closing ceremony and designed student certificates.",
      ],
    },
    {
      title: "ML Research Intern",
      company_name: "University of Texas at Dallas",
      icon: utd,
      iconBg: "#E6DEDD",
      date: "May 2021 - August 2021",
      points: [
        "Constructed machine learning model to detect pneumonia from lung CT scans.",
        "Utilized Keras VGG16 deep learning architecture and CNNs for binary image classifications.",
        "Presented work alongside Dr. Sriram Natarajan at Jonsson School of Engineering Research Symposium.",
        "Trained model on dataset of 6,000 CT scans from National Institute of Health, yielding 97% prediction accuracy.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Texas Convergent",
      icon: convergent,
      iconBg: "#383E56",
      date: "Jan 2023 - May 2023",
      points: [
        "Constructed iOS/Android mobile app hosting peer-to-peer marketplace and freelance services for students on campus.",
        "Designed frontend with React Native and hosted backend in ExpressJS and cloud database, Google Firebase.",
        "Integrated Stripe API to construct an in-app transaction system and ease user experience.",
        "Presented app to over 300 individuals including industry professionals from Capital Factory.",
      ],
    },
    {
      title: "Undergraduate Researcher",
      company_name: "University of Texas at Austin",
      icon: ut,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - May 2023",
      points: [
        "Conducted research with LIDAR and obstacle avoidance to automate a robot returning back to its base on low battery.",
        " Devised custom dataset of 100 images to train model through series of 10 epochs.",
        " Utilized C++, ROS, and CNN model (resnet18) to recognize open and closed doors/elevators with 99% accuracy via image processing.",
      ],
    },
    {
      title: "Apprentice",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#383E56",
      date: "Feb 2023 - May 2023",
      points: [
        "Networked and learned about Software Engineering roles at Cognizant.",
        "Obtained certification in Agile Methodologies.",
        "Studied computational models utilized in Cognizant's F1 partnership.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Bank of America",
      icon: bofa,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        " Worked in Global Markets Technology, managing traded product reference data for 1M+ securities from Bloomberg and Reuters across cross-functional teams.",
        " Deployed full-stack enterprise application for internal bank auditors and regulators (FINRA) to query and translate business rules applied to individual securities using Java, SQL, Oracle RDBMS, Jenkins/CloudBees, and Jakarta Server Pages (JSP).",
        " Constructed NLP email summarization tool with ML urgency detection for business executives to identify urgent emails and prioritize responses using Python, Streamlit, and Jupyter Notebook.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Mentored and guided 25+ incoming CS students in discovering their mission through weekly seminars and industry speakers.",
      name: "CS Pod Mentor",
      designation: "",
      company: "UT Austin Department of Computer Science",
      image: utcs,
    },
    {
      testimonial:
        "Directly oversaw residents in North Campus residence hall, fostered fellowship amongst residents and attended to building complex inquiries.",
      name: "Resident Assistant",
      designation: "",
      company: "UT Housing and Dining",
      image: utcs,
    },
    {
      testimonial:
        "Oversaw expansion of nonprofit providing free Computer Science instruction to students at Title I schools across the nation.",
      name: "Regional Director",
      designation: "",
      company: "Steel City Codes",
      image: scc,
    },
  ];
  
  const projects = [
    {
      name: "GivingTree",
      description:
        "Winning mobile app featured in U.S. Capitol and house.gov website targeting food insecurity and supply chain shortages at local shelters and within marginalized communities amidst the pandemic.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "google firebase",
          color: "green-text-gradient",
        },
        {
          name: "dart + css",
          color: "pink-text-gradient",
        },
      ],
      image: givingTree,
      source_code_link: "https://github.com/dysonspheres/GivingTree-Mobile-App",
    },
    {
      name: "Carpet: The Campus Market",
      description:
        "Mobile app hosting peer-to-peer marketplace as well as accessible freelance services for students on college campuses.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "google firebase + expressJS",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carpet,
      source_code_link: "https://github.com/akshatdotcom/carpet",
    },
    {
      name: "ML Door Detection",
      description:
        "A comprehensive research initiative comparing the efficacy of door detection between a robot's LiDAR sensors and a CNN binary image classification model.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "google colab",
          color: "green-text-gradient",
        },
        {
          name: "latex",
          color: "pink-text-gradient",
        },
      ],
      image: door,
      source_code_link: "https://github.com/dysonspheres/FRI-ML-Door-Detection-Model",
    },
    {
      name: "summaryAI",
      description:
        "An AI summarization tool powered by OpenAI GPT-4 that can summarize the dense texts, articles, and lengthy reports one is exposed to in life.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: summaryAI,
      source_code_link: "https://github.com/dysonspheres/summaryAI",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };