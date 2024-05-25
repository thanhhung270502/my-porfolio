import clsx from 'clsx';
import styles from './home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <div>
            <div id="home" className={clsx(styles.introduction)}>
                <div className={clsx(styles.avatar)}>
                    <img src="/images/avatar_1.png" alt="" className={clsx('img-fluid')} />
                </div>
                <div className={clsx(styles.name)}>I'm Thanh Hung Ly,</div>
                <div className={clsx(styles.major)}>Web Developer</div>
                <div className={clsx(styles.title)}>I am a Web Developer with more 8 months of experience</div>
                <a className={clsx(styles.resume)} href="./">
                    My resume
                </a>
            </div>
            <div id="aboutme" className={clsx(styles.aboutMe)}>
                <div className={clsx('container')}>
                    <div className={clsx(styles.flexCol)}>
                        <div className={clsx(styles.title)}>About ME</div>
                        <div className={clsx('d-flex', 'align-items-start')}>
                            <div className={clsx('col-3')}>
                                <div className={clsx(styles.avatar)}>
                                    <img src="/images/avatar.jpg" alt="" className={clsx('img-fluid')} />
                                </div>
                            </div>
                            <div className={clsx('col-9')}>
                                <div className="px-5">
                                    <div className={clsx(styles.description)}>
                                        I'm Thanh Hung, a Web Developer. I have more 8 months of experience with
                                        front-end and back-end. Besides, I have always been passionate about solving
                                        problems, optimizing performance, and bringing the best user experience.
                                    </div>
                                    <div className={clsx(styles.subTitle)}>Technical Skills</div>
                                    <div className={clsx(styles.skills)}>
                                        <div className={clsx('col-2', 'px-3', styles.skill)}>
                                            <img src="/images/react.png" alt="" className={clsx('img-fluid')} />
                                        </div>
                                        <div className={clsx('col-2', 'px-3', styles.skill)}>
                                            <img src="/images/nodejs.png" alt="" className={clsx('img-fluid')} />
                                        </div>
                                        <div className={clsx('col-2', 'px-3', styles.skill)}>
                                            <img src="/images/rails.png" alt="" className={clsx('img-fluid')} />
                                        </div>
                                        <div className={clsx('col-2', 'px-3', styles.skill)}>
                                            <img src="/images/docker.png" alt="" className={clsx('img-fluid')} />
                                        </div>
                                        <div className={clsx('col-2', 'px-3', styles.skill)}>
                                            <img src="/images/c.png" alt="" className={clsx('img-fluid')} />
                                        </div>
                                        <div className={clsx('col-2', 'px-3', styles.skill)}>
                                            <img src="/images/python.png" alt="" className={clsx('img-fluid')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.stats)}>
                <div className={clsx(styles.block, styles.blockLeft)}>
                    <div className={clsx(styles.number)}>8+</div>
                    <div className={clsx('textBold')}>MONTHS OF EXPERIENCE</div>
                </div>
                <div className={clsx(styles.block, styles.blockRight)}>
                    <div className={clsx(styles.number)}>10+</div>
                    <div className={clsx('textBold')}>PROJECTS COMPLETED</div>
                </div>
            </div>
            <div id="projects" className={clsx(styles.projects)}>
                <div className="container">
                    <div className={clsx(styles.title)}>My Projects</div>
                    <div className={clsx(styles.blocks)}>
                        <a className={clsx(styles.block)} href="https://nhlcoding-fe.vercel.app/">
                            <img src="/images/hnlcoding.png" alt="" className={clsx('img-fluid')} />
                        </a>
                        <a className={clsx(styles.block)} href=".">
                            <img src="/images/1.png" alt="" className={clsx('img-fluid')} />
                        </a>
                        <a className={clsx(styles.block)} href=".">
                            <img src="/images/2.png" alt="" className={clsx('img-fluid')} />
                        </a>
                        <a className={clsx(styles.block)} href=".">
                            <img src="/images/3.png" alt="" className={clsx('img-fluid')} />
                        </a>
                        <a className={clsx(styles.block)} href=".">
                            <img src="/images/4.png" alt="" className={clsx('img-fluid')} />
                        </a>
                    </div>
                </div>
            </div>
            <div id="contact" className={clsx(styles.contact)}>
                <div className={clsx('container')}>
                    <div className={clsx(styles.title)}>Contact ME</div>
                    <div className="d-flex align-items-start">
                        <div className={clsx('col-5')}>
                            <div className={clsx(styles.large)}>Let's talk</div>
                            <div className={clsx(styles.text)}>
                                i'm currently available to take on new projects, so feel free to send me an email or
                                take a phone call about anything that you want to work on. You can contact anytime.
                            </div>
                            <div className={clsx(styles.block)}>
                                <div className={clsx(styles.icon)}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className={clsx(styles.info)}>thanhhung270502@gmail.com</div>
                            </div>
                            <div className={clsx(styles.block)}>
                                <div className={clsx(styles.icon)}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className={clsx(styles.info)}>0854393829</div>
                            </div>
                            <a className={clsx(styles.block)} href="https://github.com/thanhhung270502">
                                <div className={clsx(styles.icon)}>
                                    <FontAwesomeIcon icon={faGithub} />
                                </div>
                                <div className={clsx(styles.info)}>github.com/thanhhung270502</div>
                            </a>
                            <a
                                className={clsx(styles.block)}
                                href="https://www.linkedin.com/in/ly-thanh-hung-618279215/"
                            >
                                <div className={clsx(styles.icon)}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </div>
                                <div className={clsx(styles.info)}>linkedin.com/in/ly-thanh-hung-618279215/</div>
                            </a>
                        </div>
                        <div className="col-7 px-3">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className={clsx('form-control', styles.formControl)}
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    className={clsx('form-control', styles.formControl)}
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">
                                    Write your message here
                                </label>
                                <textarea
                                    className={clsx('form-control', styles.formControl)}
                                    id="exampleFormControlTextarea1"
                                    rows="5"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div className={clsx(styles.btnSubmit)}>Submit now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
