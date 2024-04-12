import Link from "next/link";
import { ExperienceEntry } from "./ExperienceEntry";

export interface Experience {
  startDate: string;
  endDate?: string;
  jobTitle: string;
  additionalJobTitles?: string[];
  responsibilities: string[];
  skills: string[];
}

const experiences: Experience[]  = [
  {
    startDate: 'June 2021',
    endDate: 'December 2023',
    jobTitle: 'Full Stack Software Engineer',
    additionalJobTitles: ['Software Engineering Intern'],
    responsibilities: [
      "Developed and deployed several web-based and mobile applications using React and Node.js with a focus on enhancing employee experience for all of PANW\'s 13,000+ employees.",
      "Collaborated cross-functionally with several teams across the company (ex. people, hiring, mentorship) to develop 7 specialized productivity applications and application enhancements.",
      "Partnered with InfoSec to identify critical application security issues and develop fixes.",
      "Operational lead for CompTool Internal Mobility Eligibility Validation and FLEXConnect, ensuring all bugs fixed by SLA.",
      "Coordinated development efforts with team through daily Agile scrum meetings, sprint planning, and CI/CD.",
      "Generated analytics dashboards using Google Analytics and Looker Studio to analyze and summarize usage statistics of 2 applications.",
    ],
    skills: ['React', 'JavaScript', 'MySQL', 'CI/CD', 'Agile/Scrum']
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
        <Link href="/resume">View Full Resume</Link>
      </div>
    </div>
  )
}
 
export default Experience