import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const Shop = ({ fetchCollectionStart, match }) => {
    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart]);

    return (
        <div className='shop-page'>
            <Route 
                exact path={`${match.path}`} 
                component={CollectionOverviewContainer}
            />
            <Route 
                path={`${match.path}/:collectionID`} 
                component={CollectionPageContainer} 
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionStart: () => dispatch(fetchCollectionStart())
    };
};


export default compose(
    connect(null, mapDispatchToProps)
)(Shop);