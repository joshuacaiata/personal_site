import classes from './Project.module.css'
import styles from './Project-A.module.css';

function ProjectB(props) {
    return (
        <div className={classes.project}>
            <img 
                className={classes.projimg} 
                src={props.obj.image} 
                alt={props.obj.alt}/>
            <div className={classes.info}>
                <div className={classes.name}>
                    {props.obj.name}
                </div>
                <div className={classes.skills}>
                    {props.obj.skills}
                </div>
                <div className={classes.details}>
                    {props.obj.details}
                </div>
            </div>
            <div className={classes.buttons}>
                <a href={props.obj.link} download={props.obj.download} className={styles.projbutton}>
                    <button>
                        See Preview
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ProjectB;