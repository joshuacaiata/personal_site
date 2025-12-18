import classes from './InfoCard.module.css';
import josh from '../images/josh.jpeg'
import { AiOutlineGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"; 
import { SiGooglescholar } from "react-icons/si";
import { IconContext } from 'react-icons';

function InfoCard() {
    return(
        <div className={classes.card}>
            <div className={classes.info}>
                <div className={classes.hello}>
                    Hey, I'm Josh!
                </div>
                <img className={classes.otherme} src={josh} alt='Me in Big Sur!'/>
                <div className={classes.details}>
                    I'm a master's student in Computer Science at the University of Waterloo, 
                    where I research multi-agent systems and decision-making. 
                    My work draws on ideas from artificial intelligence, economics, 
                    and machine learning, and focuses on empirically evaluating and designing 
                    decision-making systems.
                </div>
                <div className={classes.icons}>
                    <a href="https://scholar.google.com/citations?user=4M_mqJMAAAAJ&hl=en">
                        <div className={classes.icon}>
                            <IconContext.Provider value={{ size: "2em", className: "global-class-name" }}>
                                <div>
                                    <SiGooglescholar />
                                </div>
                            </IconContext.Provider>
                        </div>
                    </a>
                    <a href="https://github.com/joshuacaiata">
                        <div className={classes.icon}>
                            <IconContext.Provider value={{ size: "2em", className: "global-class-name" }}>
                                <div>
                                    <AiOutlineGithub />
                                </div>
                            </IconContext.Provider>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/joshuacaiata/">
                        <div className={classes.icon}>
                            <IconContext.Provider value={{ size: "2em", className: "global-class-name" }}>
                                <div>
                                    <AiFillLinkedin />
                                </div>
                            </IconContext.Provider>
                        </div>
                    </a>
                    <a href="mailto: jcaiata@uwaterloo.ca">
                        <div className={classes.icon}>
                            <IconContext.Provider value={{ size: "2em", className: "global-class-name" }}>
                                <div>
                                    <AiFillMail />
                                </div>
                            </IconContext.Provider>
                        </div>
                    </a>
                </div>
            </div>
            <img className={classes.mainme} src={josh} alt='Me in Big Sur!'/>
        </div>
    )
}

export default InfoCard;

/*

*/