import React from "react";
import PropTypes from "prop-types";

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
