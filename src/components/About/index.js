import ProfilePic from '../../images/ProfilePic.png';
import './style.scss';

export default function About(props) {
    return (
        <section id={props.id} className="section section-about">
            <div className="section-title">
                <span>About Me</span>
            </div>
            <div className="section-content">
                <div className="about-left-container">

                    <p>
                        Hello! I'm Ribeiro, a Front End Developer from London, UK.
                    </p>
                    <p>
                        After graduating from Anna University, I joined Infosys Limited where I work on a wide variety of interesting projects on a daily basis.
                    </p>
                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>
                    <div className="skill-set">
                        <ul>
                            <li>Javascript (ES6+)</li>
                            <li>HTML & (S)CSS</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>WordPress</li>
                            <li>Drupal</li>
                            <li>Node JS</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
                <div className="about-right-container">
                    <img src={ProfilePic} alt="Ribeiro" />
                </div>
            </div>

        </section>
    );
}