import { Experience } from "..";


export const ExperienceEntry: React.FunctionComponent<Experience> = props => {
    return (
        <div>
            <h3>{`${props.startDate}${props.endDate && `- ${props.endDate}`}`}</h3>
            <div className="flex">
                <div className="w-px bg-primary"/>
                <div>
                    <h4>{props.jobTitle}</h4>
                    {props.additionalJobTitles?.length && 
                        props.additionalJobTitles.map((title: string, index: number) => 
                            <h5 key={`${props.jobTitle.replace(' ', '-')}-${index}`}>{title}</h5>
                        )
                    }
                    <ul>
                        {props.responsibilities.map((desc: string, index: number) => 
                                <li key={`${props.jobTitle.replace(' ', '-')}-responsibility-${index}`}>{desc}</li>
                            )
                        }
                    </ul>
                    <div>
                        {props.skills.map((skill: string, index: number) => 
                                <div key={`${props.jobTitle.replace(' ', '-')}-skill-${index}`}>{skill}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};