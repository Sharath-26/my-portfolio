const logotext = "Sharath";
const meta = {
  title: "Sharath Reddy",
  description:
    "I’m Sharath Reddy Ravula_Software Engineer,currently working in Austin,Texas.",
};

const introdata = {
  title: "I’m Sharath Reddy Ravula",
  animated: {
    first:
      "Software Engineer passionate about building scalable, customer-focused solutions.",
    second:
      "Building efficient, cloud-powered applications using React, TypeScript, and AWS.",
    third:
      "Driving innovation through clean code, ownership, and continuous learning.",
  },
  description:
    "Full-Stack Developer passionate about creating scalable, cloud-native applications with React, TypeScript, and AWS — driven by customer obsession and clean, reliable code.",
  // your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
  your_img: "/mypic.jpg",
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "Full-Stack Developer with a passion for building scalable, cloud-native applications. I focus on customer-centric solutions, clean code, and continuous growth.",
};
const educationData= [
  {
    degree: "M.Sc. Information Technology ",
    institution: " Valparaiso University",
    year: "2023",
    logo:"https://e7.pngegg.com/pngimages/967/1024/png-clipart-valpo-university-logo-valparaiso-university-college-valpo-university-logo-thumbnail.png"
  },
  {
    degree: "B.Tech. Computer Science ",
    institution: " SR University",
    year: "2021",
    logo:"https://upload.wikimedia.org/wikipedia/commons/1/12/SRUniversity.png"
  }
 
];

const worktimeline = [
   {
    jobtitle: "Front End Engineer -II (L5)",
    where: "Amazon.com",
    date: "2025-present",
  },
  {
    jobtitle: "Software Engineer",
    where: "Deloitte",
    date: "2023-2025",
  },
  {
    jobtitle: "Associate Software Engineer",
    where: "Accenture",
    date: "2020-21",
  },
];

const skills = [
  {
    name: "JavaScript",
    value: 90,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "Java",
    value: 80,
  },
  {
    name: "AWS",
    value: 80,
  },
  {
    name: "Python",
    value: 70,
  },
];

const Services = [
  {
    title: "Enterprise UX & Performance Optimization",
    description: [
      "Developed real-time, multi-agency search systems for the State of Texas using ReactJS, Redux, and AWS, increasing data access efficiency by 45% while supporting 10,000+ monthly users under peak load.",
      "Created mobile-first, accessible UIs with WCAG-compliance and responsive layouts, improving user task speed by 40% and mobile usability by 50%.",
      "Built and maintained 25+ modular, reusable components using Redux and Context API, reducing development time by 35% and maintenance overhead by 50%",
    ],
  },
  {
    title: "Cloud-Native Architecture & DevOps Automation",
    description: [
      "Designed and deployed Java Spring Boot microservices and NodeJS APIs, reducing system downtime by 30% and improving scalability for high-volume, mission-critical apps.",
      "Automated CI/CD workflows with Jenkins, Docker, AWS CodePipeline, cutting deployment time by 60%, achieving 99.9% uptime, and enabling reliable daily releases.",
      "Provisioned and optimized cloud infrastructure on AWS EC2, Lambda, S3, ensuring load-balanced, fault-tolerant systems capable of handling surge traffic scenarios.",
    ],
  },
  {
    title: "Security-Focused Omnichannel Frontends",
    description: [
      "  Developed SPA-based, omnichannel applications using ReactJS, Next.js, HTML5, improving task execution times by 40% and reducing UI errors by 30%.",
      "Integrated OAuth2, JWT, and role-based access controls, reducing unauthorized access incidents by 60% while maintaining state-level compliance.Implemented unit and integration testing with Jest, React Testing Library, and JUnit, achieving 95% test coverage and cutting production issues by 30%.",
    ],
  },
];

const dataportfolio = [
     
        {
            your_img: "Semarc.logo.png",
          title: "SEMARC Application",
          description:
            "A centralized government search platform for Texas integrating data from 4 state agencies. Improved efficiency by 45% with real-time API integration and a scalable React + AWS stack.",
          points: [
            "Integrated data from 4 state agencies",
            "Real-time API integration",
            "Improved efficiency by 45%",
            "Built with React, Redux, and AWS"
          ],
          techStack: "React, Redux, Spring Boot, MongoDB, AWS",
          link: "https://www.dfps.texas.gov/About_DFPS/Reports_and_Presentations/Agencywide/documents/2024/2024-09-19_SB1849_Senate_Interim_Hearing_9.19_FINAL.pdf" // optional if you have it
        },
      ];
      
   

const contactConfig = {
  YOUR_EMAIL: "sharathreddyr138@gmail.com",
  YOUR_FONE: "(940)594-9461",
  description:
    "I’m currently exploring new opportunities and am open to connecting with professionals in the industry. If you’d like to collaborate, discuss potential roles, or share insights, feel free to reach out! ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  Services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  educationData,
};
