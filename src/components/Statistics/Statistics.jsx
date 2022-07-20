import PropTypes from 'prop-types';

import styles from './statistics.module.css';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const Statistics = (props) => {
    const { title, stats } = props;
    
    const elements = stats.map(({id, label, percentage }) => (
        <li key={id} className={styles.item} style={{backgroundColor: getRandomHexColor()}}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    ));

    return (
        <section className={styles.statistics}>
            {title && <h2 className="title">{title}</h2>}

            <ul className={styles.statList}>
                {elements}
            </ul>
        </section>
    )
};

Statistics.defaultProps = {
    stats: [],
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};

export default Statistics;