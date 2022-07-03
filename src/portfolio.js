/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Parth Doshi",
  title: "Hi all, I'm Parth",
  subTitle: emoji(
    "A experienced Software Developer and passionate Data Engineer having an experience of building Software applications with Python / Java using framworks like Flask, Django, Spring and various libraries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1REyMyRTuCISWGd4fc8r8juaJL6SCs1FS/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/parth287",
  linkedin: "https://www.linkedin.com/in/parth287/",
  gmail: "pdoshi287@gmail.com",
  // gitlab: "https://gitlab.com/users/sign_in/",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills & Abilities",
  subTitle: "Software Developer and Data Engineer with demonstrated history of working in Data Integration and Software Development",
  skills: [
    emoji(
      "⚡ Develop highly optimized solutions for web applications and data pipelines"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      logo: "FaPython"
    },
    {
      skillName: "Java",
      logo: "FaJava"
    },
    {
      skillName: "Php",
      logo: "FaPhp"
    },
    // {
    //   skillName: "Scala",
    //   logo: "DiScala"
    // },
    {
      skillName: "PostgreSQL",
      logo: "SiPostgresql"
    },
    {
      skillName: "DynamoDB",
      logo: "SiAmazondynamodb"
    },
    {
      skillName: "Redis",
      logo: "SiRedis"
    },
    {
      skillName: "Django",
      logo: "DiDjango"
    },
    {
      skillName: "RabbitMQ",
      logo: "SiRabbitmq"
    },
    {
      skillName: "Kafka",
      logo: "SiApachekafka"
    },
    {
      skillName: "Spark",
      logo: "DiSpark"
    },
    {
      skillName: "Airflow",
      logo: "SiApacheairflow"
    },
    // {
    //   skillName: "Tableau",
    //   logo: "SiTableau"
    // },
    {
      skillName: "Power Bi",
      logo: "SiPowerbi"
    },
    // {
    //   skillName: "AWS",
    //   logo: "FaAws"
    // },
    {
      skillName: "Docker",
      logo: "FaDocker"
    },
    {
      skillName: "Git",
      logo: "FaGit"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "George Mason University",
      logo: require("./assets/images/mason.png"),
      subHeader: "Master of Science in Data Analytics",
      duration: "August 2022 - December 2023",
      desc: "",
      descBullets: [
        "Related Courses: Need for Big Data Analytics, Applied Statistics and Vizualization for Analytics and Analytics and Decision Analytics"
      ]
    },
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/mu.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "July 2016 - July 2020",
      // desc: "",
      descBullets: ["Related courses: Distributed Systems, Machine Learning, Data Warehousing ....."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java",
      progressPercentage: "85%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "77%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Route Mobile Limited",
      companylogo: require("./assets/images/rml.jpeg"),
      date: "Jan 2022 – July 2022",
      desc: "Created features for Communication Channels like Whatsapp and Viber",
      descBullets: [
        "Strategized the optimisation of the Viber Communication channel decreased the latency by 33%. ",
        "Created a dashboard to monitor the ongoing, completed and scheduled campaigns for the end user.",
        "Integrated payment gateways like Razorpay, PayU, Setu and Xenddit in the current products."
      ]
    },
    {
      role: "Associate Software Engineer - Data Integration",
      company: "Zycus Infotech",
      companylogo: require("./assets/images/zycus.jpeg"),
      date: "December 2020 – January 2022",
      desc: "Create ETL pipelines using Python, Javascript and Snaplogic to integrate the ERP systems data in Zycus.",
      descBullets: [
        "Implemented 5 end to end projects and created 20+ ETL pipelines for data integration and transformation for Fortune 500 clients.",
        "Identified integration approach and provided solutions or workarounds to clients in order to meet their needs specializing for the procure to pay products of Zycus.",
      ]
    },
    {
      role: "Full Software Developer",
      company: "Corporate Coders",
      companylogo: require("./assets/images/cc.png"),
      date: "July 2020 – November 2020",
      desc: "Created 2 end to end components of a E-commerce website .",
      descBullets: [
        "Developed Web apps and implemented various features related to it using python in backend. Adhered to test-driven development & ensured 100% test coverage of the modules.",
        "Migrated the databases of Django apps from SQLite to SQL and vice versa and ensured data integrity."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/cube.jpeg"),
      projectName: "Cube Analytics",
      projectDesc: "Analytics based tool to monitor e-commerce websites.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://projects.somil.in/CubeAnalytics/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/kaggle1.png"),
      projectName: "House Prices - Advanced Regression Techniques",
      projectDesc: "Implemented Random Forest Regressor to predict house prices and got an accuracy of 0.13814.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques/overview"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publications And Certifications"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Business Analytics for MSME E-Commerce Websites",
      subtitle:
        "This paper is published about the solution to doing business analytics for Medium Small Micro Enterprises.",
      image: require("./assets/images/jetir.png"),
      footerLink: [
        {
          name: "View the Publication",
          url: "https://www.jetir.org/papers/JETIR2005007.pdf"
        }
      ]
    },
    {
      title: "SnapLogic Integrator Training",
      subtitle:
        "Completed certification of SnapLogic Intergrator Training from SnapLogic.",
      image: require("./assets/images/snaplogic.png"),
      footerLink: [
        {
          name: "View Credential",
          url: "https://verify.skilljar.com/c/q732su8dffy4"
        }
      ]
    },

    {
      title: "Python Data Structures",
      subtitle: "Completed Certifcation from Uiversity of Michigan for Python Data Structures.",
      image: require("./assets/images/uom.png"),
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.coursera.org/account/accomplishments/verify/LZ6ZHF8LGTL4?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a job opportunity or just want to say hi? My Inbox is open for all.",
  number: "+91-8451079288",
  email_address: "pdoshi287@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
