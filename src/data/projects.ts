import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Email AI",
    href: "/projects",
    tags: ["Nextjs", "Expressjs", "Shadcn UI", "Netlify", "Groq API", "Prisma"],
    image: {
      LIGHT: "/images/projects/emailAI-1.jpeg",
      DARK: "/images/projects/emailAI-1.jpeg",
    },
  },
  {
    index: 1,
    title: "AI Image Repository",
    href: "/projects",
    tags: ["Reactjs", "AntD", "Nodejs", "Laxica AI API"],
    image: {
      LIGHT: "/images/projects/AIImageRepo-1.jpg",
      DARK: "/images/projects/AIImageRepo-1.jpg",
    },
  },
  {
    index: 2,
    title: "Elevation AI",
    href: "/projects",
    tags: ["Nextjs", "Stream API", "Socket.io"],
    image: {
      LIGHT: "/images/projects/ElevationAI-2.jpeg",
      DARK: "/images/projects/ElevationAI-1.jpeg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Email AI",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/emailAI-1.jpeg",
      "/images/projects/emailAI-1.jpeg",
    ],
    description:
      "This tool automates your entire email flow using Google Sheets + AI. From writing to sending emails, everything is handled with just a few clicks",
    sourceCodeHref: "https://github.com/chirag396rathod/email-ai",
    liveWebsiteHref: "https://github.com/chirag396rathod/email-ai",
  },
  {
    name: "Elevation AI",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/ElevationAI-1.jpeg",
      "/images/projects/ElevationAI-2.jpeg",
    ],
    description:
      "Built a comprehensive AI-powered business platform that combines task management, capital tracking, and team collaboration, helping teams streamline operations and improve productivity.",
    sourceCodeHref: "#",
    liveWebsiteHref: "https://elevationai.com/",
  },
  {
    name: "AI Image Repository",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/AIImageRepo-1.jpg",
      "/images/projects/AIImageRepo-2.jpg",
      "/images/projects/AIImageRepo-3.jpg",
    ],
    description:
      "AI-Driven Image Prompt Website using the MERN stack. I leveraged AI and built a robust back-end, dynamic interface, and real-time community features to redefine creative exploration. See the GitHub for details!",
    sourceCodeHref: "https://github.com/chirag396rathod/AI-Image-Repository",
    liveWebsiteHref: "https://aiimagerepository.netlify.app",
  },
  {
    name: "Urban Management System App",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/P7/1.jpeg",
      "/images/projects/P7/2.jpeg",
      "/images/projects/P7/3.jpeg",
    ],
    description:
      "Embark on a journey towards improved urban living with the Urban Management System App, a comprehensive solution that empowers users to contribute towards enhancing their local communities. As a visionary project, this app seamlessly integrates technology and community engagement, effectively addressing urban challenges with efficiency and inclusivity.",
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "Zomato clone",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/P1/1.png",
      "/images/projects/P1/2.jpg",
      "/images/projects/P1/3.jpg",
    ],
    description:
      "Embark on a visual journey through the art of web design with our Zomato Clone Web Design project. This endeavor showcases my adeptness in front-end design, utilizing the dynamic trio of React, SCSS, and Styled Components to create an engaging and aesthetically pleasing user interface.",
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "Landing Screen",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/P3/1.jpg", "/images/projects/P3/2.jpg"],
    description:
      "A sleek, responsive marketing site for a Conversational AI platform, built purely with clean HTML, CSS, and vanilla JavaScript. Focus on modern CX design standards.",
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
];
