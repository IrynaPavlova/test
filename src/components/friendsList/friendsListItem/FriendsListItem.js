import React from 'react';
import PropTypes from 'prop-types';
import styles from '../friends.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.isOn : styles.isOff}>{isOnline}</span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
