import './style.scss';

function Header(props) {
    return (
        <section id={props.id} className="header-section">
            <div className="header-inner-section">
                <h1 className="salutation">Hi, my name is</h1>
                <h4 className="name">Ribeiro Kishor Rajendran</h4>
                <h2 className="role">Front End Developer</h2>
                <p className="short-bio">I am living in London, UK specializing in building websites and always hungry to learn new tools and technologies.</p>
                <div className="get-in-touch">
                    <a className="button" href="mailto:ribeirokishor12@gmail.com" target="_blank" rel="noreferrer">GET IN TOUCH</a>
                </div>
            </div>
        </section>
    )
}

export default Header;