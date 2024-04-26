import { Bullets } from "@/components/Bullets";
import { Experience } from "..";
import { Skills } from "@/components/Skills";


export const ExperienceEntry: React.FunctionComponent<Experience> = props => {
    return (
        <div className="text-left w-3/5">
            <h3 className="text-accent font-bold">{`${props.startDate}${props.endDate && `- ${props.endDate}`}`}</h3>
            <div className="flex flex-row">
                <div className="flex-none w-px bg-accent mx-3"/>
                <div className="shrink">
                    <h4>{props.jobTitle}</h4>
                    {props.additionalJobTitles?.length && 
                        props.additionalJobTitles.map((title: string, index: number) => 
                            <h5 key={`${props.jobTitle.replace(' ', '-')}-${index}`}>{title}</h5>
                        )
                    }
                    <Bullets parent={props.jobTitle} bullets={props.responsibilities}/>
                    <Skills parent={props.jobTitle} skills={props.skills}/>
                </div>
            </div>
        </div>
    );
};