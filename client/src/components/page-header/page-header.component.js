import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { PageHeaderContainer, ShopImage, Title, SignInLink, Description } from './page-header.styles';

const PageHeader = ({ currentUser }) => {
  return (
    <PageHeaderContainer>
      {
        currentUser ? 
          <>
            <Title>{`Hi, ${currentUser.displayName}!`}</Title> 
            <Description>
              <span>Are you ready to find our finest outfits?</span>
            </Description>
          </>
          : 
          <>
            <Title>Welcome!</Title>
            <Description>
              <span>You're not signed in, </span>
              <SignInLink to='/signin'>sign in now</SignInLink>
            </Description>
          </>
      }  
      <ShopImage title='Find outfits' />
    </PageHeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(PageHeader);