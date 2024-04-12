import { Bullets } from "@/components/Bullets";
import { Skills } from "@/components/Skills";
import { Project } from "..";


export const ProjectEntry: React.FunctionComponent<Project> = props => {
    return (
        <div className="text-left w-3/5">
            <h3>{props.title}</h3>
            <h5>{`${props.company} | ${props.startDate}${props.endDate && `- ${props.endDate}`}`}</h5>
            <Bullets parent={props.title} bullets={props.responsibilities}/>
            <Skills parent={props.title} skills={props.skills}/>
        </div>
    );
};