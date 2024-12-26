export const gridData = [
    {
      id: 1,
      title: "A bit about me",
      description: "I am Pulkit Sinha, a final year undergrad in Information Technology from IIIT Bhubaneswar. I am reallyyyy interested in the field of Software Development, especially Web. I'm an ardent space enthusiast and I love learning about various other topics as much as I can in general as well. Oh, and I also write poems!",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "I love gaining new experiences, anytime, anywhere.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "Still adding on to it....",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/assets/grid.svg",
      spareImg: "/assets/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently trying to kickstart my career as a Software Engineer.",
      description: "I hope my profile interests you.",
      className: "md:col-span-3 md:row-span-2 lg:col-span-3 lg:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/assets/b5.svg",
      spareImg: "/assets/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  export const techStack = [
    {
      id: 1,
      name: "React.js",
      img: "/assets/re.svg",
    },
    {
      id: 2,
      name: "Next.js",
      img: "/assets/next.svg",
    },
    {
      id: 3,
      name: "Node.js",
      img: "/assets/nodejs.svg",
    },
    {
      id: 4,
      name: "Express.js",
      img: "/assets/expressjs.svg",
    },
    {
      id: 5,
      name: "FastAPI",
      img: "/assets/fast.svg",
    },
    {
      id: 6,
      name: "MongoDB",
      img: "/assets/mongodb.svg",
    },
    {
      id: 7,
      name: "ASP.NET",
      img: "/assets/asp.svg",
    },
    {
      id: 8,
      name: "My SQL",
      img: "/assets/mysql.svg",
    },
    {
      id: 9,
      name: "Mongoose",
      img: "/assets/mongoose.svg",
    },
    {
      id: 10,
      name: "Tailwind CSS",
      img: "/assets/tail.svg",
    },
    {
      id: 11,
      name: "Redux",
      img: "/assets/redux.svg",
    },
    {
      id: 12,
      name: "Javascript",
      img: "/assets/js.svg",
    },
    {
      id: 13,
      name: "C++",
      img: "/assets/cpp.svg",
    },
    {
      id: 14,
      name: "Python",
      img: "/assets/python.svg",
    },
    {
      id: 15,
      name: "HTML",
      img: "/assets/html.svg",
    },
    {
      id: 16,
      name: "CSS",
      img: "/assets/css.svg",
    },
    {
      id: 17,
      name: "Typescript",
      img: "/assets/ts.svg",
    },
    {
      id: 18,
      name: "C",
      img: "/assets/cLang.svg",
    },
    {
      id: 19,
      name: "C#",
      img: "/assets/csharp.svg",
    },
    {
      id: 20,
      name: "AWS",
      img: "/assets/aws.svg",
    },
    {
      id: 21,
      name: "Git",
      img: "/assets/git.svg",
    }
  ]
  
  export const projects = [
    {
      id: 1,
      title: "DevsDungeon",
      des: "A secure platform for developers to ask and answer questions, use tags, and form a community, featuring debounced global and local search with AI tools for assistance. It also includes gamified features like reputation system and badges to make the users want to contribute more to the community.",
      img: "/assets/DevsDungeon.svg",
      iconLists: ["/assets/next.svg", "/assets/tail.svg", "/assets/ts.svg", "/assets/c.svg", "/assets/git.svg","/assets/mongodb.svg", "/assets/mongoose.svg"],
      link: "https://devs-dungeon.vercel.app/",
      linkGithub: "https://github.com/sparks-fly13/devsDungeon.git",
      htmlId: "devs-dungeon"
    },
    {
      id: 2,
      title: "CropStop",
      des: "A a one-stop solution for all your agricultural needs. Our platform is designed to provide farmers with the tools and information they need to succeed in today's rapidly changing agricultural landscape.",
      img: "/assets/Cropstop.svg",
      iconLists: ["/assets/js.svg", "/assets/css.svg", "/assets/re.svg", "/assets/nodejs.svg", "/assets/flask.svg", "/assets/tensorflow.svg"],
      link: "https://cropstopapp.netlify.app/",
      linkGithub: "https://github.com/sparks-fly13/CropStopWebApp.git",
      htmlId: "crop-stop"
    },
    {
      id: 3,
      title: "Youtech",
      des: "A platform for YouTubers to approve/reject edited videos and automate uploads with real-time notifications. Offers centralized video uploads, approval workflows, and secure, automated publishing, even in low-connectivity areas.",
      img: "/assets/youtech.svg",
      iconLists: ["/assets/re.svg", "/assets/nodejs.svg", "/assets/expressjs.svg", "/assets/mongodb.svg", "/assets/mongoose.svg", "/assets/aws.svg", "/assets/jwt.svg"],
      link: "",
      linkGithub: "https://github.com/sparks-fly13/youtech.git",
      htmlId: "youtech"
    },
    {
      id: 4,
      title: "UnityThreads",
      des: "The frontend of an e-fashion web application created. It comprises of an admin page and user pages with multi-page routing using React-router and context routing using Redux store.",
      img: "/assets/UnityThreads.svg",
      iconLists: ["/assets/re.svg", "/assets/css.svg", "/assets/tail.svg", "/assets/js.svg", "/assets/redux.svg"],
      link: "https://wallmart-livid.vercel.app/",
      linkGithub: "https://github.com/sparks-fly13/wallmart.git",
      htmlId: "unity-threads"
    },
    {
      id: 5,
      title: "DiagnoSys",
      des: "An E-diagnostic web application that lets the user book appointments, view reports, and get prescriptions online. It also includes Razerpay API for payment model and an admin panel for the hospital staff.",  
      img: "/assets/diagnosys.svg",
      iconLists: ["/assets/js.svg", "/assets/css.svg", "/assets/ejs.svg", "/assets/html.svg", "/assets/flask.svg"],
      link: "",
      linkGithub: "https://drive.google.com/drive/folders/1kSaEZ-HQ_69LdheuTp_4q8AujoTkpnr3?usp=sharing",
      htmlId: "diagnosys"
    },
    {
      id: 6,
      title: "Car Management App",
      des: "A managment app created via React.js and Redux toolkit. It includes features like adding, deleting, and updating cars, and also includes a search bar to search for cars.",
      img: "/assets/car-manag.svg",
      iconLists: ["/assets/re.svg", "/assets/redux.svg", "/assets/css.svg", "/assets/js.svg"],
      link: "https://gleaming-choux-83561f.netlify.app/",
      linkGithub: "https://github.com/sparks-fly13/car-managment-app.git",
      htmlId: "car-manag"
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/assets/git.svg",
      link: "https://github.com/sparks-fly13/"
    },
    {
      id: 2,
      img: "/assets/twit.svg",
      link: "https://x.com/akame13__"
    },
    {
      id: 3,
      img: "/assets/link.svg",
      link: "https://www.linkedin.com/in/pulkitsinha007/"
    },
  ];