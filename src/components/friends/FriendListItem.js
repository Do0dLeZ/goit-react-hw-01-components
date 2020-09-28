import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

//----------------- Styles -------------------

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 5px;
  box-shadow: 2px 2px 6px;

  margin-bottom: 10px;
  padding: 20px;

  background-color: white;
`;

const IsOnline = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const Avatar = styled.img`
  border-radius: 5px;
`;

const Name = styled.p`
  font-family: 'Noteworthy';
`;

const FriendListItem = ({ name, avatar, isOnline }) => (
  <Item>
    <IsOnline color={isOnline ? 'green' : 'red'}></IsOnline>
    <Avatar src={avatar} alt="" width="48" />
    <Name>{name}</Name>
  </Item>
);

FriendListItem.defaultProps = {
  avatar:
    'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg',
};

FriendListItem.propTypes = {
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
  avatar: propTypes.string,
};

export default FriendListItem;
