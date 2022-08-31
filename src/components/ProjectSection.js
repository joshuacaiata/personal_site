import classes from './ProjectSection.module.css';
import Project from './Project';
import projects from './ProjectList';
import ProjectA from './Project-A';

function ProjectSection() {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Projects
            </div>
            <div className={classes.row}>
                <Project obj={projects[0]} />
                <Project obj={projects[1]} />
            </div>
            <div className={classes.row}>
                <Project obj={projects[2]} />
                <ProjectA obj={projects[3]} />
            </div>
            <div className={classes.row}>
                <ProjectA obj={projects[4]} />
                <ProjectA obj={projects[5]} />
            </div>
        </div>
    )
}

export default ProjectSection;