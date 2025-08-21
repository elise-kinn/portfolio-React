import BtnColor from './buttons/BtnColor'

const Profile = () => {
    return (
        <section id="profile">
            <div>
                <article>
                    <h1>Elise LIAUTAUD</h1>
                    <p>Développeuse Web Front-End & Designer UI/UX</p>
                    <p>Je crée des expériences web élégantes, intuitives et performantes avec une attention particulière aux détails.</p>
                    <BtnColor text='Voir mes projets' variant="green" to='/profile'/>
                </article>
                <div>
                    <img src="../public/img/profile-pic.jpg" alt="profile picture" />
                </div>
                
            </div>
        </section>
    )
}

export default Profile