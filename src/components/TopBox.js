import classes from './TopBox.module.css'
import InfoCard from './InfoCard';

function TopBox() {
    return(
        <div className={classes.top}>
            <InfoCard />
        </div>
    )
}

export default TopBox;