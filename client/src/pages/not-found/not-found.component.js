import React from 'react';

import {
  NotFoundContainer,
  NotFoundText,
  NotFoundImage,
  NotFoundTitle,
  HomeLink,
} from './not-found.styles';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundTitle>Page Not Found</NotFoundTitle>
      <NotFoundImage />
      <NotFoundText>Oops...</NotFoundText>
      <NotFoundText>
        You have requested the page that doesn't exist
      </NotFoundText>
      <NotFoundText>Please return to <HomeLink to='/home'>Home</HomeLink></NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;
