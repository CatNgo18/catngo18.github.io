'use client'

import { Bullets } from "@/components/Bullets";
import { Skills } from "@/components/Skills";
import { Project } from "..";
import { Github } from "@styled-icons/bootstrap";
import { LinkExternal } from "@styled-icons/boxicons-regular";
import Image from "next/image";

interface ProjectEntryProps {
    project: Project;
    photoPlacement: 'left' | 'right' | 'none';
}

export const ProjectEntry: React.FunctionComponent<ProjectEntryProps> = ({project, photoPlacement}) => {
    const ImageSection = () => {
        if (project.photo) return (
            <Image className="object-cover object-left-top" src={project.photo} alt={`${project.title} picture`}/>
        )
    }

    return (
        <div className="w-[90vw] md:w-[60vw] rounded-3xl bg-background-medium m-2 overflow-hidden">
            {/* Info Section */}
            <div>
                <ImageSection />
                <div className="text-left p-5 pb-1">
                    <h3>{project.title}</h3>
                    {project.companyUrl ?
                        <h5>
                            <span
                                onClick={() => window.open(project.companyUrl)}
                                className="underline cursor-pointer"
                            >
                                {project.company}
                            </span>
                            {` | ${project.startDate} - ${project.endDate ?? 'Current'}`}
                        </h5>
                        :
                        <h5>
                            {`${project.company} | ${project.startDate} - ${project.endDate ?? 'Current'}`}
                        </h5>
                    }
                    <br/>
                    <h4>Achievements:</h4>
                    <Bullets parent={project.title} bullets={project.achievements || []} />
                    <br/>
                    <h4>Responsibilities:</h4>
                    <Bullets parent={project.title} bullets={project.responsibilities} />
                    <br/>
                    <Skills parent={project.title} skills={project.skills} />
                </div>
            </div>
            {/* Links */}
            <div className="flex">
                {project.github &&
                    <div
                        onClick={() => window.open(project.github)}
                        className="cursor-pointer"
                    >
                        <Github />
                    </div>
                }
                {project.link &&
                    <div 
                        onClick={() => window.open(project.link)}
                        className="cursor-pointer"
                    >
                        <LinkExternal />
                    </div>
                }
            </div>
        </div>
    )
};