import Link from "next/link";
import { ProjectEntry } from "./ProjectEntry";
import { SkillSums } from "@/components/SkillSums";
import { ReactElement } from "react";

export interface Project {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  responsibilities: Array<ReactElement>;
  skills: string[];
};

const projects: Project[] = [
  {
    title: 'FLEXConnect',
    company: 'Palo Alto Networks',
    startDate: 'August 2022',
    endDate: 'August 2023',
    responsibilities: [
      <p>Implemented Mentorship functionality, created informational space for Employee Network Groups, and added a personalized company event calendar.</p>,
      <p>Collaborated with design team and updated UI to be <span>responsive</span> and <span>mobile-friendly</span>.</p>,
      <p>Edited <span>Docker</span> files to ensure proper deployment of application.</p>,
      <p>Resulted in <span>200+</span> connections, with about <span>20%</span> of members making 1+ connections.</p>,
    ],
    skills: ['React', 'JavaScript', 'MySQL', 'Docker', 'UI/UX', 'REST APIs'],
  },
  {
    title: 'Employee Highlights Automation',
    company: 'Palo Alto Networks',
    startDate: 'January 2023',
    endDate: 'January 2023',
    responsibilities: [
      <p><span>Automated</span> FLEXWork employee highlights generation for <span>13,000+</span> employees.</p>,
      <p>Utilized <span>REST APIs</span> to pull and synthesize employee data.</p>,
      <p>Provided <span>on-call</span> support for bugs and <span>troubleshooting</span>.</p>,
    ],
    skills: ['React', 'JavaScript', 'REST APIs'],
  },
  {
    title: 'CompTool Internal Mobility Eligibility Validation Tool',
    company: 'Palo Alto Networks',
    startDate: 'June 2021',
    endDate: 'August 2022',
    responsibilities: [
      <p>Collaborated with Internal Mobility hiring team to identify critical use cases and create <span>Minimum Viable Product (MVP)</span>.</p>,
      <p>Reduced average time spent reviewing internal mobility eligibility by about <span>20%</span>.</p>,
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
      <SkillSums parent={'projects'} skills={projects.map((project: Project) => project.skills).flat()}/>
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