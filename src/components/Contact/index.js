import './style.scss';

export default function Contact(props) {
    return (
        <section id={ props.id } className="section section-contact">
            <div className="section-title">
                <span>Get In Touch</span>
            </div>
            <div className="section-content">
                <div className="content-inner-wrapper">
                    <p>
                        I'm currently looking for opportunities in Front End Development anywhere in UK with visa sponshopship. 
                    </p>
                    <p>
                        If you find any portfolio suitable for your requirement, please get in touch by clicking the below button
                    </p>
                    <div className="get-in-touch">
                        <a className="button" href="mailto:ribeirokishor12@gmail.com" target="_blank" rel="noreferrer">GET IN TOUCH</a>
                    </div>
                </div>
            </div>
        </section>
    )
}