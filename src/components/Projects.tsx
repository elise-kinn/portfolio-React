import BtnColor from "./buttons/BtnColor"
import Card from "./repeat/Card"

const ProjectsComponent = () => {
    return (
        <section id="projects">
            <div>
                <h2>Mes projets récents</h2>
                <p>Découvrez une sélection de mes travaux récents qui démontrent mes <br /> compétences en développement web et design d'interface.</p>
                <div>
                    <Card 
                        img="/public/img/projectJohnDoe.PNG" 
                        alt="project visual" 
                        title="John Doe" 
                        description="Intégration complète d'un portfolio de plusieurs pages, avec interface intéractive et animations vivantes" 
                        link="/" 
                        linkGit="https://github.com/elise-kinn/John-Doe" 
                        skills={["HTML","CSS", "Responsive", "Keyframes" ]}
                    />
                    
                    <Card 
                        img="/public/img/projectPortfolio.png" 
                        alt="project visual" 
                        title="Portfolio" 
                        description="Conception et intégration d'un portfolio d'une page, avec un design frais, une interface intéractive et un slider d'image" 
                        link="/" 
                        linkGit="https://github.com/elise-kinn/HTML-CSS-Portfolio" 
                        skills={["HTML","CSS", "UX/UI Design", "JavaScript" ]}
                    />
                </div>
                <BtnColor text="Voir tous mes projets" to="/projects" variant="blue"/>
            </div>
        </section>
    )
}

export default ProjectsComponent