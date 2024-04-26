interface Prop {
    parent: string;
    skills: string[];
}

export const Skills: React.FunctionComponent<Prop> = props => {
    return (
        <div className="flex flex-row gap-3 m-3 overflow-x-auto">
            {props.skills.map((skill: string, index: number) => 
                    <div
                        className="grow-0 shrink-0 bg-secondary/50 text-text/75 font-medium px-4 py-1 rounded-3xl"
                        key={`${props.parent.replace(' ', '-')}-skill-${index}`}
                    >
                        {skill}
                    </div>
                )
            }
    </div>
    );
};