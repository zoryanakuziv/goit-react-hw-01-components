import React from "react";
import PropTypes from "prop-types";

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
    <div>
      <div>
        <img src={avatar} alt={name} />
        <h2>{name}</h2>
        <p>@{tag}</p>
        <p>{location}</p>
        <ul>
          <li>
            <span>Followers </span>
            <span>{followers}</span>
          </li>
          <li>
            <span>Views </span>
            <span>{views}</span>
          </li>
          <li>
            <span>Likes </span>
            <span>{likes}</span>
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
