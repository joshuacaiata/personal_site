import classes from './Project.module.css'

function Project(props) {
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
                <button className={classes.projbutton}>
                    Live Project
                </button>
                <button className={classes.projbutton}>
                    GitHub
                </button>
            </div>
        </div>
    )
}

export default Project;