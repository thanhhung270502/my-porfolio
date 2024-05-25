import clsx from 'clsx';
import styles from './home.module.scss';

function Home() {
    return (
        <div>
            <div className={clsx(styles.introduction)}>
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
            <div className={clsx(styles.aboutMe)}>
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
                                <div className={clsx(styles.description)}>
                                    I'm Thanh Hung, a Web Developer. I have more 8 months of experience with front-end
                                    and back-end. Besides, I have always been passionate about solving problems,
                                    optimizing performance, and bringing the best user experience.
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
