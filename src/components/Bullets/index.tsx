import { ReactElement } from "react";

interface Prop {
    parent: string;
    bullets: Array<ReactElement>;
}

export const Bullets: React.FunctionComponent<Prop> = props => {
    return (
        <ul className="list-disc ml-5 text-left">
            {props.bullets.map((desc: ReactElement, index: number) => 
                    <li key={`${props.parent.replace(' ', '-')}-bullet-${index}`}>{desc}</li>
                )
            }
        </ul>
    );
}