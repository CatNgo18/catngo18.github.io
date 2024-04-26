import { SkillSum } from "./SkillSum";

interface Prop {
    parent: string;
    skills: string[];
}

const countSkills = (skills: string[]) => {
    let countedSkills: {[index: string]: number} = {};

    for (var skill of skills) {
        if (skill in countedSkills) {
            countedSkills[skill]++;
        } else {
            countedSkills[skill] = 1
        }
    };
    
    return countedSkills;
};

const skillSumColors = ['bg-accent', 'bg-primary', 'bg-text', 'bg-secondary'];

export const SkillSums: React.FunctionComponent<Prop> = props => {
    const countedSkills = countSkills(props.skills);

    return (
        <div className="grid grid-cols-4 gap-5 max-w-fit mx-auto my-5">
            {Object.entries(countedSkills)
            .sort((a,b) => a[0].localeCompare(b[0])) // Sort alphabetically
            .sort((a,b) => b[1] - a[1]) // Sort by skill tag count
            .slice(0, 4) // Top 4 skills
            .map((skill: [string, number], index: number) => 
                    <SkillSum
                        className={`${skillSumColors[index]}`}
                        key={`${props.parent.replace(' ', '-')}-skill-${index}`}
                        skill={skill}
                    />
                )
            }
    </div>
    );
};