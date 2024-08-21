import Link from "next/link";
import { ProjectEntry } from "./ProjectEntry";
import { SkillSums } from "@/components/SkillSums";
import SortAndMergePhoto from '../../../../public/SortAndMergeProject.png';

export interface Project {
  title: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements?: string[];
  responsibilities: string[];
  skills: string[];
  link?: string;
  github?: string;
  photo?: any;
};

const projects: Project[] = [
  {
    title: 'Sort and Merge Medical Documents',
    company: 'MedTech Billing Services',
    companyUrl: "https://medtechbilling.com/",
    startDate: 'July 2024',
    description: 'A series of command line script applications that reads different types of medical documents, then sorts and merges them into a .docx file for better legibility and printability.',
    achievements: [
      "Processed <span>7000+</span> files in about <span>5</span> seconds, saving at least 60 hours of work for each set of files."
    ],
    responsibilities: [
      "Gathered requirements for applications, taking common use cases into account.",
      "Designed, developed, and tested scripts.",
      "Authored documentation and instructions so that non-technical users would be able to use the program.",
      "Provided on-call technical support and bug-fixing.",
    ],
    skills: ['Python'],
    photo: SortAndMergePhoto,
  },
  {
    title: 'Digi-Do',
    company: 'Personal Project',
    startDate: 'July 2024',
    description: 'A to-do list and project manager with virtual pet simulator elements to encourage diligence and consistency.',
    responsibilities: [
      "Designed and developed web app as part of a coding challenge, utilizing all required technologies and learning those I haven't had prior experience with.",
      "Implemented a mock server with a REST API.",
      "Designed and developed functional tests covering user flow."
    ],
    skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'React', 'Redux', 'Vite.js', 'Vitest', 'Mirage.js', 'REST APIs'],
    github: 'https://github.com/CatNgo18/digi-do',
  },
  {
    title: 'Birthday Bot',
    company: 'Personal Project',
    startDate: 'May 2024',
    description: 'A Discord bot that notifies members of a server when it\'s another user\'s birthday.',
    responsibilities: [
      "Designed, developed, and tested Discord bot.",
    ],
    skills: ['JavaScript', 'REST APIs', 'MongoDB'],
    github: 'https://github.com/CatNgo18/birthday-bot',
  },
  {
    title: 'First Discord Bot',
    company: 'Personal Project',
    startDate: 'May 2024',
    description: 'A Discord bot with moderation capabilities and a leveling system, rewarding active members.',
    responsibilities: [
      "Learned how to develop a Discord bot using the Discord API."
    ],
    skills: ['JavaScript', 'REST APIs', 'MongoDB'],
    github: 'https://github.com/CatNgo18/first-discord-bot',
  },
  {
    title: 'Portfolio Website',
    company: 'Personal Project',
    startDate: 'March 2024',
    description: 'A website showcasing my experience as a web developer.',
    responsibilities: [
      "Designed wireframes and protoypes in Figma.",
      "Developed and deployed single page web application."
    ],
    skills: ['Figma', 'TypeScript', 'JavaScript', 'Next.js', 'React', 'CSS', 'HTML', 'Tailwind CSS', 'Material Tailwind', 'Github Pages', 'CI/CD'],
    github: 'https://github.com/CatNgo18/catngo18.github.io',
  },
  {
    title: 'Global Hiring Committee Tracker',
    company: 'Palo Alto Networks',
    companyUrl: "https://www.paloaltonetworks.com/",
    startDate: 'October 2023',
    endDate: 'December 2023',
    description: 'A web app that tracks job applications and helps the hiring team and hiring committees make decisions during the hiring process.',
    responsibilities: [
      "Developed job application tracker and decision-making user flow.",
      "Fixed bugs and issues by a service-level agreement.",
      "Ensured technical feasibility of wireframes, suggesting alternatives when necessary."
    ],
    skills: ['JavaScript', 'Node.js', 'React', 'MySQL', 'HTML', 'CSS', 'Ant Design', 'CI/CD', 'Agile', 'Scrum', 'UI/UX', 'REST APIs'],
  },
  {
    title: 'FLEXConnect',
    company: 'Palo Alto Networks',
    companyUrl: "https://www.paloaltonetworks.com/",
    startDate: 'August 2022',
    endDate: 'August 2023',
    description: 'A social web platform for Palo Alto Networks employees to discover employee networking groups, connect with other employees, find mentors/mentees, and stay informed on company events.',
    achievements: [
      "Facilitated <span>200+</span> connections, with about <span>20%</span> of members making 1+ connections."
    ],
    responsibilities: [
      "Implemented Mentorship functionality, developed connection UI redesign, created informational space for Employee Network Groups, and added a personalized company event calendar.",
      "Collaborated with design team and updated UI to be <span>responsive</span> and <span>mobile-friendly</span>.",
      "Edited <span>Docker</span> files to ensure proper deployment of application.",
    ],
    skills: ['JavaScript', 'Node.js', 'MySQL', 'HTML', 'CSS', 'Ant Design', 'React', 'CI/CD', 'Agile', 'Scrum', 'Docker', 'UI/UX', 'REST APIs'],
  },
  {
    title: 'Connected',
    company: 'Palo Alto Networks',
    companyUrl: "https://www.paloaltonetworks.com/",
    startDate: 'May 2023',
    endDate: 'July 2023',
    description: 'A web and mobile companion app for in-office employees to get information on Palo Alto Networks campuses.',
    responsibilities: [
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Ionic', 'Agile', 'Scrum', 'UI/UX'],
  },
  {
    title: 'BookMe Data Enhancement',
    company: 'Palo Alto Networks',
    companyUrl: "https://www.paloaltonetworks.com/",
    startDate: 'February 2023',
    endDate: 'April 2023',
    description: 'Added more information when scheduling a meeting using BookMe, a scheduling app.',
    responsibilities: [
      "Gathered requirements for what type of data is needed.",
      "Developed and implemented enhancements into existing application."
    ],
    skills: ['JavaScript', 'REST APIs', 'MySQL', 'React'],
    link: 'https://bookme.app.paloaltonetworks.com/'
  },
  {
    title: 'FLEXAssist',
    company: 'Palo Alto Networks',
    companyUrl: "https://www.paloaltonetworks.com/",
    startDate: 'January 2023',
    endDate: 'March 2023',
    description: 'A web companion app for managers to keep track of important action items relating to their team.',
    responsibilities: [
    ],
    skills: [],
  },
  {
    title: 'Employee Highlights Automation',
    company: 'Palo Alto Networks',
    companyUrl: "https://www.paloaltonetworks.com/",
    startDate: 'January 2023',
    endDate: 'January 2023',
    description: '',
    achievements: [
      "<span>Automated</span> FLEXWork employee highlights generation for <span>13,000+</span> employees.",
    ],
    responsibilities: [
      "Utilized <span>REST APIs</span> to pull and synthesize employee data.",
      "Provided <span>on-call</span> support for bugs and <span>troubleshooting</span>.",
    ],
    skills: ['React', 'JavaScript', 'REST APIs'],
  },
  {
    title: 'CompTool Internal Mobility Eligibility Validation Tool',
    company: 'Palo Alto Networks',
    companyUrl: "https://www.paloaltonetworks.com/",
    startDate: 'June 2021',
    endDate: 'August 2022',
    description: '',
    achievements: [
      "Reduced average time spent reviewing internal mobility eligibility by about <span>20%</span>."
    ],
    responsibilities: [
      "Collaborated with Internal Mobility hiring team to identify critical use cases and create <span>Minimum Viable Product (MVP)</span>.",
    ],
    skills: ['React', 'JavaScript', 'MySQL', 'UI/UX', 'Ant Design'],
  },
  {
    title: 'FabFlix',
    company: 'University of California, Irvine',
    companyUrl: "https://uci.edu/",
    startDate: 'May 2022',
    endDate: 'June 2022',
    description: '',
    responsibilities: [
    ],
    skills: [],
    github: 'https://github.com/CatNgo18/CS122B-BE2-Movies-Service-Starter',
  },
  {
    title: 'Parse Instagram',
    company: 'CodePath',
    companyUrl: 'https://www.codepath.org/',
    startDate: 'November 2019',
    endDate: 'November 2019',
    description: '',
    responsibilities: [],
    skills: [],
    github: 'https://github.com/CatNgo18/parseinstagram',
  },
  {
    title: 'SimpleTweet',
    company: 'CodePath',
    companyUrl: 'https://www.codepath.org/',
    startDate: 'November 2019',
    endDate: 'November 2019',
    description: '',
    responsibilities: [],
    skills: [],
    github: 'https://github.com/CatNgo18/SimpleTweet',
  },
  {
    title: 'Flixster',
    company: 'CodePath',
    companyUrl: 'https://www.codepath.org/',
    startDate: 'October 2019',
    endDate: 'October 2019',
    description: '',
    responsibilities: [],
    skills: [],
    github: 'https://github.com/CatNgo18/Flixster',
  },
  {
    title: 'SimpleToDo',
    company: 'CodePath',
    companyUrl: 'https://www.codepath.org/',
    startDate: 'October 2019',
    endDate: 'October 2019',
    description: '',
    responsibilities: [],
    skills: [],
    github: 'https://github.com/CatNgo18/SimpleToDo',
  },
  {
    title: 'MyFridge',
    company: 'Computer Science Summer Institute @ Google',
    startDate: 'July 2018',
    endDate: 'July 2018',
    description: '',
    responsibilities: [],
    skills: [],
  },
];

const projectHighlights = projects.filter((project) => 'achievements' in project).slice(0,4);
let projectImages = projects.reduce((prev, current) => current.photo ? prev + 1 : prev, 0);

function Projects() {
  return (
    <div id='projects-section'>
      <h2>
        Projects
      </h2>
      <h5 className="text-xl mt-2">Most Used Skills</h5>
      <SkillSums parent={'projects'} skills={projects.map((project: Project) => project.skills).flat()}/>
      <h5 className="text-xl mt-2">Project Highlights</h5>
      <div className="flex flex-col items-center">
        {projectHighlights.map((project: Project, index: number) => {
          if (!!project.photo) {
            const photoPlacement = projectImages % 2 === 1 ? 'left' : 'right';
            --projectImages;
            return (
              <ProjectEntry project={project} photoPlacement={photoPlacement} key={`project-${index}`}/>
            )
          } else {
            return <ProjectEntry project={project} photoPlacement={'none'} key={`project-${index}`}/>
          }
        }
        )}
        {/* <Link href="/projects">View Full Project Archive</Link> */}
      </div>
    </div>
  )
}
 
export default Projects