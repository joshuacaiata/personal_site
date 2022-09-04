import classes from './InfoCard.module.css';
import josh from '../images/josh.jpeg'
import { AiOutlineGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"; 
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
                    I'm a Computer Science student at the University of Waterloo, 
                    and a Business Administration student at Wlifrid Laurier University.
                    <br></br>
                    <br></br>
                    I love problem-solving, and creating useful, beautiful tools 
                    for people to use in their everyday lives.
                </div>
                <div className={classes.icons}>
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