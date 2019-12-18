import React from 'react';
import FriendsListItem from './friendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
import styles from './friends.module.css';

const FriendsList = ({ friends }) => (
  <ul className={`${styles.friendsList} ${styles.container}`}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendsListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
