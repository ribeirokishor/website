import { jobs } from "../../config.json";
import './style.scss';

export default function Experience (props) {
    return (
        <section id={props.id} className="section section-experience">
            <div className="section-title">
                <span>Where I've Worked</span>
            </div>
            <div className="section-content">
                {
                    jobs.map((job, index) => {
                        const { responsibilities } = job;
                        return (
                            <div key={index} className="job-wrapper">
                                <div className="job-left-wrapper">
                                    <div className="company"><a href="https://www.infosys.com/" target="_blank" rel="noreferrer">{job.company_name}</a></div>
                                    <div className="job-period">{job.job_period}</div>
                                </div>
                                <div className="job-right-wrapper">
                                    <div className="role"><span className="sub-heading">Role: </span>{job.role}</div>
                                    <div className="responsibilites">
                                        <div className="sub-heading">Responsibilites</div>
                                        <ul>
                                            {responsibilities.map((responsibility, index) => {
                                                return (<li key={index}>{responsibility}</li>)
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>)
}