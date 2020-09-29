import React from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import { CollectionContainer, CollectionTitle, CollectionItems } from './collection.styles';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionContainer>
            <CollectionTitle>HOME / SHOP / {title.toUpperCase()}</CollectionTitle>
            <CollectionItems>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </CollectionItems>
        </CollectionContainer>
    );
};

const mapStateToProps = (state, collectionProps) => {
    return {
        collection: selectCollection(collectionProps.match.params.collectionID)(state)
    };
};

export default connect(mapStateToProps)(CollectionPage);