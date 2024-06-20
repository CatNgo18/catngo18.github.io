
interface Prop {
    className: string;
    skill: [string, number];
}

export const SkillSum: React.FunctionComponent<Prop> = props => {
    return (
        <div className={`${props.className} px-3 py-2 rounded-xl text-background font-roboto-slab font-bold leading-snug`}>
            <p className='text-3xl'>{props.skill[1]}</p>
            <p className='max-md:text-[3vw]'>{props.skill[0]}</p>
        </div>
    )
};