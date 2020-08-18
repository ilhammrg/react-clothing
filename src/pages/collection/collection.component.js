import React from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
    const { title, items} = collection;
    return (
        <div className='collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, collectionProps) => {
    return {
        collection: selectCollection(collectionProps.match.params.collectionID)(state)
    };
};

export default connect(mapStateToProps)(CollectionPage);