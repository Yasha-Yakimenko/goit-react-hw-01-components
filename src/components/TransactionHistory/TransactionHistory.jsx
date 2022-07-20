import PropTypes from 'prop-types';

import styles from './transactionhistory.module.css';

const TransactionHistory = ({ items }) => {
    const elements = items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.list} >
                <td className={styles.item}>{type}</td>
                <td className={styles.item}>{amount}</td>
                <td className={styles.item}>{currency}</td>
        </tr>
    ));

    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                <th className={styles.title}>Type</th>
                <th className={styles.title}>Amount</th>
                <th className={styles.title}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {elements}
            </tbody>
        </table>
    )
};

TransactionHistory.defaultProps = {
    items: []
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};

export default TransactionHistory;