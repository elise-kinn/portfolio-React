import BtnColor from "./buttons/BtnColor"

const ContactComponent = () => {
    return(
        <section id="contact">
            <h2>Contactez-moi</h2>
            <p>Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter, je <br />vous répondrai dans les plus brefs délais.</p>
            <form action="#">
                <label htmlFor="input-name">Nom</label>
                <label htmlFor="input-mail">Email</label>

                <input type="text" id="input-name" placeholder="Nom" />
                <input type="text" id="input-mail" placeholder="Email" />

                <label htmlFor="textarea-message">Message</label>
                <textarea name="" id="textarea-message" placeholder="Tapez votre message ici..."></textarea>

                
                <label htmlFor="input-checkbox"><input type="checkbox" id="input-checkbox" required /> J'accepte que mes données soient traitées conformément à la politique de confidentialité. Elles ne seront utilisées que pour répondre à ma demande.</label>

                <BtnColor text="Envoyer le message" to="/" variant="green"/>
            </form>
        </section>
    )
}

export default ContactComponent