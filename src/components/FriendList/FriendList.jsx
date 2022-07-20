import PropTypes from 'prop-types';

import FriendListItem from "./FriendListItem";

import styles from './friendlist.module.css';

const FriendList = ({ friends }) => {
    const elements = friends.map(item => (
        <FriendListItem key={item.id} {...item}/>
));

    return (
        <ul className={styles.friendlist}>
            {elements}
        </ul>
    )
};

FriendList.defaultProps = {
    friends: [],
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};

export default FriendList;