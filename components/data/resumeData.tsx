const ResumeData = {
  home: {
    name: "Norris Luong",
    occupation: "Full Stack Web Developer",
    description: "Hi I'm a full stack developer from Sydney Australia. ",
    bio: "Born, bred and raised in Sydney, Australia. I’ve always been an innately curious person who loves to learn, and really get underneath to understand the very fundamentals of how things function. This has led to me to have a huge passion for coding and engineering. I love to create things and have a strong entrepreneurial spirit, which tends to leave me with too many projects going on at the same time. I like to spend my free time hiking, weightlifting, cycling, and learning and experiencing new things. I am an avid traveller and dream of one day being able to work while travelling the world. ",
    profilePic: "/images/profileNL.jpg",
  },
  social: {
    github: "https://github.com/Gsirron",
    linkedin: "https://www.linkedin.com/in/norris-luong-33b146230/",
  },
  contact: {
    city: "Sydney Australia",
    state: "New South Wales",
    zip: "2170",
    phone: "0478162776",
    email: "Norris.Luong@hotmail.com",
    resume:
      "https://drive.google.com/file/d/1wyx9cxn-CKbVpWM9tNd9tYOXpnlatFeG/view?usp=sharing",
  },

  education: [
    {
      name: "Western Sydney University",
      heading: "Bachelor of Computer Science",
      date: "2017 to 2020",
      text: "I decided to study at Western Sydney University ( WSU) after discovering my passion for coding while working as an engineering intern. Here I took my Bachelors of Computer Science and received a thorough education in concepts, theories and science behind complex programming. The course work and interaction with academic staff and students helped me discover and reinforce my passion for programming further.",
    },
    {
      name: "University of Technology Sydney",
      heading: "Bachelor Of Civil and Environmental Engineering",
      date: "2013 to 2016",
      text: "I’ve always had a passion for creation and design and Engineering was an obvious choice. Studying Engineering at the University of Technology Sydney (UTS) was such a rewarding experience in which I learned concepts and skills such as project lifecycle, management, and law. To this day my experience studying Engineering has altered the way I view and perceive things, but during my internship I discovered another calling.",
    },
  ],
  work: [
    {
      heading: "Graduate Full Stack Developer",
      name: "Itechnique, Milsons Point, NSW",
      date: "March 2021 -  Nov 2021",
      text: "At Itechnique I worked as a full stack developer in which I collaborated with clients and other teams in providing modern software solutions. I utilised frameworks such as Django and ASP.NET to build modern REST API’s for clients and also worked extensively with React to develop frontend interfaces. I was also responsible for quality assurance of code developed by external teams, which required diagnosing, troubleshooting,bug  fixing and optimisations in which improved performance at times up to 180%.",
    },
    {
      heading: "Intern Civil Engineer ",
      name: "The Hills Shire Council, Norwest NSW",
      date: "Jan 2016 -  Dec 2016",
      text: "My engineering internship at the hills shire council was my first practical exposure to the civil engineering profession. My primary task I was assigned to at the council was to deal with the development implementation of the mandated rain gardens for new residential construction in North Kellyville. This involved extensive collection of data samples and analysis of the waterways in the North Kellyville area. I was also given responsibility for dealing with inquiries regarding the rain gardens implementation. This led me to redesign and clarify the available document which led to a reduction of related inquiries by 65%. Through the data analysis work here, I discovered my knack and love for programming in which I decided to pursue.",
    },
  ],
  resumeStuff: {
    techStatement: "Here is a list of my favorite software langages and tools",

    techSkills: [
      {
        title: "Python",
        text: "Python was the programming language that got me into programming. It's versatility and ease of use makes it still my go to language.",
        image: "/images/skill_logos/python.svg",
      },
      {
        title: "Django",
        text: "Django is my go to backend framework I use for developing API's. Utilising The Django REST framework an model driven API can be built in a minimal amount of code.",
        image: "/images/skill_logos/django.svg",
      },
      {
        title: "React",
        text: "I use React for anything front end development related. It's flexible approach to things and its extensive libary makes developing was its main appeal to me.",
        image: "/images/skill_logos/react-2.svg",
      },
      {
        title: "Next.js",
        text: "I like to use Next.js in all my React projects. It's hybrid functionality with server side rendering, static site generation and minimal out of the box config, has made it my framework of choice in developing any full stack prototype.",
        image: "/images/skill_logos/nextjs-2.svg",
      },
      {
        title: "Typescript",
        text: "I started using Typescript while learning React. I did find it quite annyoing at the start, but it has grown on me since and will to use it. ",
        image: "/images/skill_logos/typescript.svg",
      },
      {
        title: ".NET Core",
        text: "ASP.NET core is the second backend framework I use mainly for Microsoft backend servers and deployments.",
        image: "/images/skill_logos/dot-net-core-7.svg",
      },
      {
        title: "Chakra UI",
        text: "I use Chakra UI with my react projects for styling and building UI components. Comes with inbuilt light/dark mode and mobile first design. It allows me to design and get a functional UI up quickly. ",
        image: "/images/skill_logos/chakraui-svgrepo-com.svg",
      },
    ],
  },
};

export default ResumeData;
