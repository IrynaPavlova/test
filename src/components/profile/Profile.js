import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

const Profile = ({ user }) => {
  const {
    avatar,
    alt,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={`${styles.profile} ${styles.container}`}>
      <div className="description">
        <img className={styles.avatar} src={avatar} alt={alt} />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  user: PropTypes.shape({
    alt: 'user avatar',
  }),
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export default Profile;
