import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  PageHeaderContainer,
  ShopImage,
  Title,
  ShopLink,
  SignInLink,
  Description,
} from './page-header.styles';
import CartHeader from '../cart-header/cart-header.component';
import CustomButton from '../custom-button/custom-button.component';

const PageHeader = ({ currentUser, history }) => {
  return (
    <PageHeaderContainer>
      {currentUser ? (
        <>
          <Title>{`Hi, ${currentUser.displayName}!`}</Title>
          <Description>
            <span>Explore our finest and latest <ShopLink to='/shop'>outfits</ShopLink></span>
          </Description>
        </>
      ) : (
        <>
          <Title>Welcome!</Title>
          <Description>
            <span>You're not signed in, </span>
            <SignInLink to="/signin">sign in now</SignInLink>
          </Description>
        </>
      )}
      <CustomButton onClick={() => history.push('/checkout')}>
        Checkout
      </CustomButton>
      <CartHeader />
      <ShopImage title="Find outfits" />
    </PageHeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(PageHeader));
