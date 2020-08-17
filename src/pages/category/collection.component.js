import React from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    console.log(collection);
    return (
        <div className='collection'>
            <h2>COLLECTION PAGE</h2>
        </div>
    );
};

const mapStateToProps = (state, collectionProps) => {
    return {
        collection: selectCollection(collectionProps.match.params.collectionID)(state)
    };
};

export default connect(mapStateToProps)(CollectionPage);