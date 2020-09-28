import React from 'react';
import propTypes from 'prop-types';

// styles imports
import styled from 'styled-components';

const Avatar = styled.img`
  vertical-align: middle;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-family: 'Druk Wide Bold';
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-family: 'Noteworthy';
  margin-bottom: 10px;
`;

const ProfileDescription = ({ name, tag, location, avatar }) => (
  <div>
    <Avatar src={avatar} alt={name} className="Avatar" width="150" />
    <Name>{name}</Name>
    <Desc>@{tag}</Desc>
    <Desc>{location}</Desc>
  </div>
);

ProfileDescription.defaultProps = {
  avatar:
    'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg',
};

ProfileDescription.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string,
};

export default ProfileDescription;
