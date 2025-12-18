import classes from './PublicationSection.module.css';
import publications from './PublicationList';

function PublicationSection() {
    return (
        <div className={classes.container}>
            <div className={classes.title}>Publications</div>

            {publications.map((p, idx) => (
                <div className={classes.entry} key={idx}>
                    <div className={classes.pubTitle}>{p.name}</div>
                    <div className={classes.authors}>{p.authors}</div>
                    <hr className={classes.hr} />
                    <div className={classes.abstract}>{p.abstract}</div>
                    <a
                        className={classes.button}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Link to Paper
                    </a>
                </div>
            ))}
        </div>
    )
}

export default PublicationSection;