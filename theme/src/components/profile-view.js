/** @jsx jsx */
import React from 'react';
import { Styled, jsx, Flex } from "theme-ui"

const ProfileView = ({ name, github, twitter, image_url }) => {
  return (
  <Flex sx={{
    flexDirection: 'column',
    width: '100%',
    minHeight: '200px'
  }}>
    <Styled.img src={image_url} alt="Profile Image"></Styled.img>
    <Flex>
      
    </Flex>
  </Flex>)
}

export default ProfileView;