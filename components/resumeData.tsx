import React from "react";

const ResumeData = {
  home: {
    name: "Norris Luong",
    occupation: "Full Stack Web Developer",
    description:
      "Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer",
    bio: "Hi I'm a full stack developer from Sydney Australia. ",
    profilePic: "/images/profileNL.jpg",
  },
  contact: {
    city: "Sydney Australia",
    state: "New South Wales",
    zip: "2170",
    phone: "0478162776",
    email: "Norris.Luong@hotmail.com",
    resume:
      "https://drive.google.com/file/d/1rt1OWCsBeUJPtyZi7GYXoK5DOacnWGWa/view?usp=sharing",
  },

  education: [
    {
      name: "Western Sydney University",
      heading: "Bachelor of Computer Science",
      date: "2017 to 2020",
      text: "",
    },
    {
      name: "University of Technology Sydney",
      heading: "Bachelor Of Civil and Environmental Engineering",
      date: "2013 to 2016",
      text: "",
    },
  ],
  work: [
    {
      heading: "",
      name: "",
      date: "",
      text: "",
    },
    {
      heading: "",
      name: "",
      date: "",
      text: "",
    },
  ],
  resumeStuff: {
    techStatement: "Here is a list of my favorite software langages and tools",

    techSkills: [
      {
        title: "Python",
        text: "Python was the programming language that got me into programming. It's versatilitym and ease of use makes it still my go to language.",
        image: "/images/skill_logos/python.svg",
      },
      {
        title: "Django",
        text: "Django is my go to backend framework I use for developing API's. Utilising The Django REST framework an API can be built three lines of code.",
        image: "/images/skill_logos/django.svg",
      },
      {
        title: "React",
        text: "React is my go to for anything front end development related. It  ",
        image: "/images/skill_logos/react-2.svg",
      },
    ],
  },
};

export default ResumeData;
