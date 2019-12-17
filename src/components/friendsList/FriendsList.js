import React from 'react';
import FriendsListItem from './FriendsListItem';
import PropTypes from 'prop-types';
import styles from './friends.module.css';

const FriendsList = ({friends}) => (
<ul className="friend-list">
    {friends.map(elem => 
    <FriendsListItem key={elem.id}
    avatar = {elem.avatar}
    name = {elem.name}
    isOnline = {elem.isOnline}
    />
    )}
</ul>
)

FriendsList.propTypes = {
friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
})
)
}

export default FriendsList
