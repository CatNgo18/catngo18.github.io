import Link from "next/link";
import { ProjectEntry } from "./ProjectEntry";

export interface Project {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
  skills: string[];
};

const projects: Project[] = [
  {
    title: 'FLEXConnect',
    company: 'Palo Alto Networks',
    startDate: 'August 2022',
    endDate: 'August 2023',
    responsibilities: [
      "Reimplemented functionality from Mentorship application, created informational space for ENGs, and added a personalized company event calendar.",
      "Collaborated with design team and updated UI to be responsive and mobile-friendly.",
      "Edited Docker files to ensure proper deployment of application.",
      " Resulted in over 200 connections, with about 20% of members making 1+ connections.",
    ],
    skills: ['React', 'JavaScript', 'MySQL', 'Docker', 'UI/UX', 'REST APIs'],
  },
  {
    title: 'Employee Highlights Automation',
    company: 'Palo Alto Networks',
    startDate: 'January 2023',
    endDate: 'January 2023',
    responsibilities: [
      "Automated FLEXWork employee highlights generation for 13,000+ employees.",
      "Utilized REST APIs to pull and synthesize employee data.",
      "Provided on-call support for bugs and troubleshooting.",
    ],
    skills: ['React', 'JavaScript', 'REST APIs'],
  },
  {
    title: 'CompTool Internal Mobility Eligibility Validation Tool',
    company: 'Palo Alto Networks',
    startDate: 'June 2021',
    endDate: 'August 2022',
    responsibilities: [
      "Collaborated with Internal Mobility hiring team to identify critical use cases and create MVP.",
      "Reduced average time spent reviewing internal mobility eligibility by about 20%.",
    ],
    skills: ['React', 'JavaScript', 'MySQL', 'UI/UX'],
  }
];

function Projects() {
  return (
    <div id='projects section'>
      <h2>
        Projects
      </h2>
      <div className="flex flex-col items-center">
        {projects.map((project: Project, index: number) => 
          <ProjectEntry {...project} key={`project-${index}`}/>
        )}
        <Link href="/projects">View Full Project Archive</Link>
      </div>
    </div>
  )
}
 
export default Projects