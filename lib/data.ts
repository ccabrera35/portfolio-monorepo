// import png of past projects
/*
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
*/

import wordlyImg from "@/public/wordly.png";
import devhuntImg from "@/public/devhunt.png";
import cityvibeImg from "@/public/cityvibe.png";
import furfriendsImg from "@/public/furfriends.png";
import slidingpuzzleImg from "@/public/sliding-puzzle.png";

export const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const;

export const projectsData = [
  {
    title: "FurFriends",
    description:
      "Pet owners can input details to ensure personalized care when pets are dropped off at their daycare, making their stay comfortable and stress-free.",
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Prisma"],
    imageUrl: furfriendsImg
  },
  {
    title: "CityVibe",
    description:
      "Discover concerts, festivals, and more in any city. Stay updated and never miss out on the excitement, whether you're a local or a traveler.",
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Prisma"],
    imageUrl: cityvibeImg
  },
  {
    title: "DevHunt",
    description:
      "Users can search, filter and sort on this job board built for those seeking remote developer jobs.",
    tags: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
    imageUrl: devhuntImg
  },
  {
    title: "Sliding Puzzle",
    description:
      "Players can challenge themselves with timed sessions and enjoy a new puzzle experience each time, as the picture is randomly generated for added excitement.",
    tags: ["React", "TypeScript", "Tailwind", "Framer"],
    imageUrl: slidingpuzzleImg
  },
  {
    title: "Wordly",
    description:
      "A Wordle clone that challenges players to guess the hidden word within a limited number of attempts.",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: wordlyImg
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Redux",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion"
];
