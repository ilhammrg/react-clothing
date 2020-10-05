import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, CollectionImage, CollectionItemFooter } from './collection-item.styles';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <CollectionImage 
        className='image' 
        style={
            {backgroundImage: `url(${imageUrl})`}
        }
      />
      <CollectionItemFooter>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </CollectionItemFooter>
      <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);