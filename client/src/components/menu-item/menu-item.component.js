import React from 'react';
import { withRouter } from 'react-router-dom';

import { 
  MenuItemContainer, 
  BackgroundImage, 
  ContentContainer, 
  ContentTitle, 
  ContentSubtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <MenuItemContainer 
      className={`${size}`} 
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      height={size ? '380px' : '240px'} 
    >
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})`}} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);