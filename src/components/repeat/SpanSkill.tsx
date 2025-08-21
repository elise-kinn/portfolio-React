type SpanSkillProp = {
    text: string
}

const SpanSkill = ({text}: SpanSkillProp) => {
    return (
        <span>
            {text}
        </span>
    )
}

export default SpanSkill