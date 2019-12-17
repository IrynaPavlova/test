import React from 'react';
import PropTypes from 'prop-types';
import styles from './friends.module.css';

const FriendsListItem = ({avatar, name, isOnline}) => (  
<li className="item"> 
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="" width="48" />
  <p className="name">{name}</p>
</li>
);

FriendsListItem.propTypes ={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendsListItem