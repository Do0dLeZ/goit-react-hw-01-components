import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

import FriendListItem from './FriendListItem';

//------------------ Styles ----------------------

const Container = styled.div`
  width: 250px;
  margin: auto;
  margin-bottom: 25px;
`;

const List = styled.ul``;

//------------------ Component --------------------

const FriendsList = ({ friends }) => (
  <Container>
    <List>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </List>
  </Container>
);

//-------------------- Props ----------------------

FriendsList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      avatar: propTypes.string,
    }),
  ).isRequired,
};

export default FriendsList;
