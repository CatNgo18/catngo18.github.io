import parse from 'html-react-parser';

interface Prop {
    parent: string;
    bullets: string[];
}

export const Bullets: React.FunctionComponent<Prop> = props => {
    return (
        <ul className="list-disc ml-5 text-left text-text text-base">
            {props.bullets.map((desc: string, index: number) => 
                    <li key={`${props.parent.replace(' ', '-')}-bullet-${index}`}>
                        <p>
                            {parse(desc)}
                        </p>
                    </li>
                )
            }
        </ul>
    );
}