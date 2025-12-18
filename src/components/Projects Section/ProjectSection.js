import classes from './ProjectSection.module.css';
import Project from './Project.js';
import projects from './ProjectList.js';
import ProjectA from './Project-A.js';
import ProjectB from './Project-B';
import ProjectC from './Project-C';

function ProjectSection() {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Projects
            </div>
            <div className={classes.row}>
                <Project obj={projects[0]} />
                <ProjectC obj={projects[1]} />
            </div>
            <div className={classes.row}>
                <Project obj={projects[2]} />
                <ProjectC obj={projects[3]} />
            </div>
            <div className={classes.row}>
                <Project obj={projects[4]} />
                <ProjectA obj={projects[5]} />
            </div>
            <div className={classes.row}>
                <Project obj={projects[6]} />
                <Project obj={projects[7]} />
            </div>
            <div className={classes.row}>
                <ProjectB obj={projects[8]} />
                <ProjectA obj={projects[9]} />
            </div>
            <div className={classes.row}>
                <ProjectA obj={projects[10]} />
                <ProjectA obj={projects[11]} />
            </div>
            <div className={classes.copyright}>
                © Joshua Caiata 2025
            </div>
        </div>
    )
}

export default ProjectSection;