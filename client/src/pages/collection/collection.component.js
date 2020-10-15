import React from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionContainer,
  CollectionTitle,
  CollectionItems,
} from './collection.styles';
import CollectionItem from '../../components/collection-item/collection-item.component';
import PageHeader from '../../components/page-header/page-header.component';
import NotFound from '../not-found/not-found.component';

const CollectionPage = ({ collection }) => {
  if (collection) {
    const { title, items } = collection;
    return (
      <CollectionContainer>
        <PageHeader />
        <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
        <CollectionItems>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </CollectionItems>
      </CollectionContainer>
    );
  }

  return <NotFound />;
};

const mapStateToProps = (state, collectionProps) => {
  return {
    collection: selectCollection(collectionProps.match.params.collectionID)(
      state
    ),
  };
};

export default connect(mapStateToProps)(CollectionPage);
