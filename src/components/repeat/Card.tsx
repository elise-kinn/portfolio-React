import BtnFleche from "../buttons/BtnFleche"
import SpanSkill from "./SpanSkill"

type CardProp = {
    img: string, 
    alt: string,
    title: string, 
    description: string, 
    linkGit : string, 
    link: string, 
    skills: string[]
}

const Card = ({img, alt, skills, title, description, linkGit, link}: CardProp) => {
    return(
        <article>
            <img src={img} alt={alt} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                    {skills.map((el, i) => (
                        <SpanSkill key={i} text={el}/>
                    ))}
                </div> 
                <BtnFleche text="Voir le projet" to={link}/>
                <BtnFleche text="Voir le repo GitHub" to={linkGit}/>
            </div>
        </article>
    )
}

export default Card