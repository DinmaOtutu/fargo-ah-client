import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/avatar.scss';

const Avatar = ({ user }) => (
  <div>
    <div>
      <NavLink to="/">
        <div className="dropdown">
          <Image src={user.user.image ? user.user.image : user.user.avatar} avatar />
          <span>{user.user.username}</span>
          <div className="dropdown-content">
            <NavLink to={`/profiles/${user.user.username}`}>View Profile </NavLink>
            <NavLink to="/dashboard">View Dashboard </NavLink>
            <NavLink to="/logout">Logout </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  </div>
);

Avatar.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,

  }).isRequired,
};

export default Avatar;