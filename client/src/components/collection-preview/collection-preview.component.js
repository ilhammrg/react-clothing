import React from 'react';

import { CollectionPreviewContainer, CollectionPreviewTitle, CollectionPreviewItems } from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle to={`shop/${encodeURI(title.toLowerCase())}`}>{title.toUpperCase()}</CollectionPreviewTitle>
      <CollectionPreviewItems>
        {
        items
          // filter items array
          .filter( (item, index) => index < 4 )
          // loop each item to create div
          .map( (item) => <CollectionItem key={item.id} item={item} /> )
        }
      </CollectionPreviewItems>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;