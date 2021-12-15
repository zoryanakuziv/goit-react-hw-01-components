import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

export const Profile = ({
  user: {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img className={s.avatar} src={avatar} alt={name} />
        <h2 className={s.name}>{name}</h2>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
        <ul className={s.statsList}>
          <li className={s.statsItem}>
            <span className={s.statsLabel}>Followers</span>
            <span className={s.statsQuantity}>{followers}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.statsLabel}>Views</span>
            <span className={s.statsQuantity}>{views}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.statsLabel}>Likes</span>
            <span className={s.statsQuantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
  }),
};
