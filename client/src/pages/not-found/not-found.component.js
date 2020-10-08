import React from 'react';

import { 
  NotFoundContainer, 
  NotFoundText, 
  NotFoundImage,
  NotFoundTitle 
} from './not-found.styles';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404: Not Found</NotFoundTitle>
      <NotFoundImage />
      <NotFoundText>Oops...</NotFoundText>
      <NotFoundText>You have requested the page that doesn't exist</NotFoundText>
    </NotFoundContainer>
  );
}

export default NotFound;