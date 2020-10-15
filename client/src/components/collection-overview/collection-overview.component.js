import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionOverviewContainer } from './collection-overview.styles';
import CollectionPreview from '../collection-preview/collection-preview.component';
import PageHeader from '../page-header/page-header.component';

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      <PageHeader />
      {
        // Looping through collections state to create collection preview component
        collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))
      }
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
