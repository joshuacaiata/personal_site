import classes from './ProjectSection.module.css';
import Project from './Project.js';
import projects from './ProjectList.js';
import ProjectA from './Project-A.js';
import ProjectB from './Project-B';

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
                <ProjectA obj={projects[2]} />
                <ProjectB obj={projects[3]} />
            </div>
            <div className={classes.row}>
                <ProjectA obj={projects[4]} />
                <ProjectA obj={projects[5]} />
            </div>
            <div className={classes.lastrow}>
                <ProjectA obj={projects[6]} />
            </div>
            <div className={classes.copyright}>
                © Joshua Caiata 2022
            </div>
        </div>
    )
}

export default ProjectSection;