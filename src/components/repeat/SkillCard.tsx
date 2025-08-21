type SkillCardProp = {
    text: string;
    icon: React.ReactNode;
};

const SkillCard = ( {text, icon}: SkillCardProp ) => {
    return (
        <article>
            {icon}
            <p>{text}</p>
        </article>
    )
}

export default SkillCard