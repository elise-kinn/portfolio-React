import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { MdDesignServices } from "react-icons/md";
import { IoGitBranchOutline } from "react-icons/io5";

const ArrayIcon = [
    {
        text:"HTML 5", 
        icon: <FaHtml5 />
    },
    {
        text:"CSS 3", 
        icon: <FaCss3Alt />
    },
    {
        text:"JavaScript", 
        icon: <FaNodeJs />
    },
    {
        text:"Responsive", 
        icon: <DiResponsive />
    },
    {
        text:"UI/UX Design", 
        icon: <MdDesignServices />
    },
    {
        text:"Git", 
        icon: <IoGitBranchOutline />
    },
]

import BtnFleche from "./buttons/BtnFleche";
import SkillCard from "./repeat/SkillCard";

const AboutComponent = () => {
    return (
        <section id="about">
            <h2>À propos de moi</h2>
            <div>
                <article>
                    <h3>Mon parcours</h3>
                    <p>
                        Mon équivalent BAC+2 en Développement Web en poche,  je combine des compétences techniques solides avec une sensibilité esthétique pour créer des sites web et 
                        applications qui sont à la fois fonctionnels et visuellement attrayants.
                    </p>
                    <p>
                        Après 3 mois en tant qu'auto-didacte et 9 mois au sein de la formation Développement Web - Web Mobile (La Plateforme), j'ai développé une expertise dans la 
                        création d'interfaces utilisateur intuitives et accessibles, en privilégiant toujours l'expérience utilisateur.
                    </p>
                    <p>
                        Je suis passionnée par les technologies web modernes et je m'efforce constamment d'améliorer mes compétences pour rester à la pointe des dernières tendances
                        et meilleures pratiques.
                    </p>
                    <BtnFleche text="En savoir plus sur mon parcours" to="/about"/>
                </article>

                <div>
                    <h3>Mes compétences</h3>
                    <div>
                        {ArrayIcon.map((el, index) => (
                            <SkillCard key={index} text={el.text} icon={el.icon}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent