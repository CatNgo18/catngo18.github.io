'use client'

import { FiletypePdf } from "@styled-icons/bootstrap";
import { ExperienceEntry } from "./ExperienceEntry";

export interface Experience {
  startDate: string;
  endDate?: string;
  jobTitle: string;
  additionalJobTitles?: string[];
  responsibilities: string[];
  skills: string[];
  company: string;
}

const experiences: Experience[]  = [
  {
    startDate: 'June 2021',
    endDate: 'December 2023',
    jobTitle: 'Full Stack Software Engineer',
    additionalJobTitles: ['Software Engineering Intern'],
    responsibilities: [
      "<p>Developed and deployed several web-based and mobile applications using <span>React</span>, <span>MySQL</span>, and <span>Node.js</span> with a focus on enhancing employee experience for all <span>13,000+</span> employees.</p>",
      "<p>Collaborated <span>cross-functionally</span> with several teams across the company (ex. people, hiring, mentorship) to develop <span>7</span> specialized productivity applications and application enhancements.</p>",
      "<p>Partnered with InfoSec to <span>identify critical application security issues</span> and develop fixes.</p>",
      "<p>Operational lead for CompTool Internal Mobility Eligibility Validation and FLEXConnect, ensuring all bugs fixed by SLA.</p>",
      "<p>Coordinated development efforts with team through daily <span>Agile scrum</span> meetings, sprint planning, and <span>CI/CD</span>.</p>",
      "<p>Generated <span>analytics</span> dashboards using <span>Google Analytics</span> and <span>Looker Studio</span> to analyze and summarize usage statistics of 2 applications.</p>",
    ],
    skills: ['React', 'JavaScript', 'MySQL', 'CI/CD', 'Agile/Scrum'],
    company: "Palo Alto Networks",
  }
]

function Experience() {
  return (
    <div id='experience-section'>
      <h2>
        Experience
      </h2>
      <div className="flex flex-col items-center">
        {experiences.map((experience: Experience, index: number) => 
          <ExperienceEntry {...experience} key={`experience-${index}`}/>
        )}
        <a href="Resume.pdf" className="rounded-full bg-primary button p-4 flex flex-row gap-2 mt-4 drop-shadow">
            <p className="font-roboto-slab font-bold text-background">View Resume</p>
            <FiletypePdf size={24} className="text-background"/>
        </a>
      </div>
    </div>
  )
}
 
export default Experience