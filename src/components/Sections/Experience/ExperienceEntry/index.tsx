import { Experience } from "..";


export const ExperienceEntry: React.FunctionComponent<Experience> = props => {
    return (
        <div className="text-left w-3/4">
            <h3 className="text-accent font-bold">{`${props.startDate}${props.endDate && `- ${props.endDate}`}`}</h3>
            <div className="flex flex-row">
                <div className="flex-none w-px bg-accent mx-3"/>
                <div>
                    <h4>{props.jobTitle}</h4>
                    {props.additionalJobTitles?.length && 
                        props.additionalJobTitles.map((title: string, index: number) => 
                            <h5 key={`${props.jobTitle.replace(' ', '-')}-${index}`}>{title}</h5>
                        )
                    }
                    <ul className="list-disc ml-5">
                        {props.responsibilities.map((desc: string, index: number) => 
                                <li key={`${props.jobTitle.replace(' ', '-')}-responsibility-${index}`}>{desc}</li>
                            )
                        }
                    </ul>
                    <div className="flex flex-row gap-3 m-3">
                        {props.skills.map((skill: string, index: number) => 
                                <div
                                    className="bg-secondary/50 text-text/75 font-medium px-4 py-1 rounded-3xl"
                                    key={`${props.jobTitle.replace(' ', '-')}-skill-${index}`}
                                >
                                    {skill}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};