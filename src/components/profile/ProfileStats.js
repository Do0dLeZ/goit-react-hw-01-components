import React from 'react';
import propTypes from 'prop-types';

// styles imports
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  width: 100%;
`;

const ListItem = styled.li`
  font-family: 'Noteworthy';

  width: 100px;
  flex-grow: 1;
  border: 1px solid rgba(0, 0, 0, 0.075);
  padding: 10px;

  &:last-child {
    border-bottom-right-radius: 10px;
  }

  &:first-child {
    border-bottom-left-radius: 10px;
  }

  background-color: rgb(119, 136, 153);
`;

const Text = styled.span`
  display: block;
  text-align: center;
`;

const Title = styled(Text)`
  margin-bottom: 5px;
`;

const Value = styled(Text)`
  font-weight: bold;
`;

const ProfileStats = ({ followers, views, likes }) => (
  <List>
    <ListItem>
      <Title>Followers</Title>
      <Value>{followers}</Value>
    </ListItem>
    <ListItem>
      <Title>Views</Title>
      <Value>{views}</Value>
    </ListItem>
    <ListItem>
      <Title>Likes</Title>
      <Value>{likes}</Value>
    </ListItem>
  </List>
);

ProfileStats.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};

ProfileStats.propTypes = {
  followers: propTypes.number,
  views: propTypes.number,
  likes: propTypes.number,
};

export default ProfileStats;
