import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import ProfileDescription from './ProfileDescription.js';
import ProfileStats from './ProfileStats.js';

//------------------ Styles ----------------------

const ProfileContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-top: 20px;

  text-align: center;

  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  background-color: white;
`;

//------------------ Component --------------------

const Profile = ({ userInfo, stats }) => (
  <ProfileContainer className="Profile">
    <ProfileDescription
      name={userInfo.name}
      tag={userInfo.tag}
      location={userInfo.location}
      avatar={userInfo.avatar}
    />
    <ProfileStats
      followers={stats.followers}
      views={stats.views}
      likes={stats.likes}
    />
  </ProfileContainer>
);

//-------------------- Props ----------------------

Profile.propTypes = {
  userInfo: propTypes.shape({
    name: propTypes.string.isRequired,
    tag: propTypes.string,
    location: propTypes.string,
    avatar: propTypes.string,
  }).isRequired,
  stats: propTypes.shape({
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
  }),
};

export default Profile;
