'use client'

import { FiletypePdf } from "@styled-icons/bootstrap";
import { useState } from "react";
import PANW from '../../../../public/palo-alto-networks-svgrepo-com.svg';
import MedTech from '../../../../public/medtech.png';
import { Bullets } from "@/components/Bullets";
import { Skills } from "@/components/Skills";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "../../../app/MTailwind";
import Image from 'next/image';
import { LinkExternal } from "@styled-icons/boxicons-regular";

export interface Experience {
  startDate: string;
  endDate: string;
  jobTitle: string[];
  additionalJobTitles?: string[][];
  achievements: string[];
  responsibilities: string[];
  skills: string[];
  company: string;
  companyUrl: string;
  logo: any;
}

const experiences: Experience[]  = [
  {
    startDate: 'June 2021',
    endDate: 'December 2023',
    jobTitle: ['Full Stack Software Engineer', 'June 2022 - December 2023'],
    additionalJobTitles: [['Software Engineering Intern', 'June 2021 - June 2022']],
    achievements: [
      "<p>Developed and deployed <span>7</span> web-based and mobile applications using <span>React</span>, <span>MySQL</span>, and <span>Node.js</span> with a focus on enhancing employee experience for all <span>13,000+</span> employees.</p>",
    ],
    responsibilities: [
      "<p>Collaborated <span>cross-functionally</span> with several teams across the company (ex. people, hiring, mentorship) to develop specialized productivity applications and application enhancements.</p>",
      "<p>Partnered with InfoSec to <span>identify critical application security issues</span> and develop fixes.</p>",
      "<p>Operational lead for CompTool Internal Mobility Eligibility Validation and FLEXConnect, ensuring all bugs fixed by SLA.</p>",
      "<p>Coordinated development efforts with team through daily <span>Agile scrum</span> meetings, sprint planning, and <span>CI/CD</span>.</p>",
      "<p>Generated <span>analytics</span> dashboards using <span>Google Analytics</span> and <span>Looker Studio</span> to analyze and summarize usage statistics of applications.</p>",
    ],
    skills: ['React', 'JavaScript', 'MySQL', 'CI/CD', 'Agile/Scrum'],
    company: "Palo Alto Networks",
    companyUrl: "https://www.paloaltonetworks.com/",
    logo: PANW,
  },
  {
    startDate: 'July 2024',
    endDate: 'Current',
    jobTitle: ['Freelance Automation Software Engineer', 'July 2024 - Current'],
    achievements: [
      "<p>Developed and built applications to parse <span>1000's</span> of medical documents in a <span>few seconds</span>.</p>",
    ],
    responsibilities: [
      "<p>Developed <span>Python</span> scripts to parse, sort, and merge documents.</p>",
      "<p>Authored instructional README's and <span>documentation</span> so that non-technical staff would be able to understand and use the application.</p>",
      "<p>Provided on-call <span>customer support</span> and resolved issues in a timely manner.</p>",
    ],
    skills: ['Python', 'Documentation', 'Customer Service'],
    company: "MedTech Billing Services",
    companyUrl: "https://medtechbilling.com/",
    logo: MedTech,
  },
]

function Experience() {
  const [open, setOpen] = useState(experiences.length);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div id='experience-section'>
      <h2>
        Experience
      </h2>
      <div className="flex flex-col items-center">
        <div className="my-1">
          {experiences.map((experience: Experience, index: number) => 
                <Accordion open={open === (index + 1)} key={index} className="text-left mt-4 bg-secondary/25 rounded-3xl">
                  <AccordionHeader onClick={() => handleOpen(index+1)} className="border-b-0 w-full p-6">
                    <div className="flex items-center text-lg">
                      <Image src={experience.logo} alt={`${experience.company} logo`} className="size-12 mr-4"/>
                      <h3><a href={experience.companyUrl}>{experience.company}</a></h3>
                      <h5 className="text-sm ml-2">({experience.startDate} - {experience.endDate})</h5>
                    </div>
                  </AccordionHeader>
                  <AccordionBody className='px-3 py-0'>
                      {experience.additionalJobTitles?.map((jobTitle: string[], index: number) => 
                          <h5 className="text-base" key={index}>{jobTitle[0]} ({jobTitle[1]})</h5>
                      )}
                      <h5 className="text-base">{experience.jobTitle[0]} ({experience.jobTitle[1]})</h5>
                      <div className="pt-2">
                      <h4>Achievements:</h4>
                      <Bullets parent={experience.jobTitle[0]} bullets={experience.achievements}/>
                      <h4>Responsibilities:</h4>
                      <Bullets parent={experience.jobTitle[0]} bullets={experience.responsibilities}/>
                      </div>
                    <Skills parent={experience.jobTitle[0]} skills={experience.skills}/>
                  </AccordionBody>
              </Accordion>
            )}
        </div>
        <a href="Cattien_Ngo_Resume.pdf" className="rounded-full bg-primary button p-4 flex flex-row gap-2 drop-shadow">
            <p className="font-roboto-slab font-bold text-background">View Resume</p>
            <FiletypePdf size={24} className="text-background"/>
        </a>
      </div>
    </div>
  )
}
 
export default Experience