'use client'

import { Bullets } from "@/components/Bullets";
import { Skills } from "@/components/Skills";
import { Project } from "..";
import { Github } from "@styled-icons/bootstrap";
import { LinkExternal } from "@styled-icons/boxicons-regular";


export const ProjectEntry: React.FunctionComponent<Project> = props => {
    return (
        <div className="text-left w-3/5 max-lg:w-10/12 rounded-3xl bg-secondary/25 p-5 pb-1 m-2">
            <div className="flex flex-row gap-2">
                <h3>{props.title}</h3>
                {props.link &&
                    <LinkExternal
                        size={24}
                        onClick={() => window.open(props.link)}
                        className='cursor-pointer'
                    />
                }
                {props.github &&
                    <Github
                        size={24}
                        onClick={() => window.open(props.github)}
                        className='cursor-pointer'
                    />
                }
            </div>
            <h5>{`${props.company} | ${props.startDate} - ${props.endDate ?? 'Current'}`}</h5>
            <Bullets parent={props.title} bullets={props.responsibilities}/>
            <Skills parent={props.title} skills={props.skills}/>
        </div>
    );
};