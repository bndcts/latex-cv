import {} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Benedikt Schwankner",
  initials: "BS",
  location: "Munich, Germany, CET",
  about: "Building",
  summary: <>I like building stuff.</>,
  avatarUrl: "https://avatars.githubusercontent.com/u/94720610?v=4",
  personalWebsiteUrl: "https://bndkts.com",
  locationLink: "",
  contact: {
    email: "benedikt_1212@outlook.de",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/bndcts",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/benedikt-schwankner-1804b9192/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "TUM",
      degree: "Bachelor's Degree in Information Systems",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Tacto",
      link: "https://tacto.ai",
      badges: [],
      title: "Software Engineer",
      start: "2024",
      end: null,
      description: <></>,
    },
    {
      company: "Jetbrains",
      link: "https://www.jetbrains.com/",
      badges: [],
      title: "Software Engineer",
      start: "2024",
      end: "2024",
      description: <>Worked on TeamCity in Java and Kotlin</>,
    },
    {
      company: "Tacto",
      link: "https://www.tacto.ai/",
      badges: [],
      title: "Solution Engineer",
      start: "2024",
      end: "2024",
      description: <>Customer Implementation</>,
    },
    {
      company: "Reverion",
      link: "https://reverion.com/",
      badges: [],
      title: "Automation Engineer",
      start: "2023",
      end: "2023",
      description: <>Data Automation between Cloud and Edge</>,
    },
  ],
  skills: [],
  projects: [],
} as const;
