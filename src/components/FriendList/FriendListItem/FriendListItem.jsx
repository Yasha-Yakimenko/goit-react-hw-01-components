import PropTypes from 'prop-types';

import styles from './friendlistitem.module.css';

const FriendListItem = (props) => {
    const { avatar, name, isOnline } = props;
    
    return (
        <li className={styles.item}>
            <span className={isOnline?styles.statusOnline:styles.statusOffline}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;