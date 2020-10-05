import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';

const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const Shop = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route 
          exact path={`${match.path}`} 
          component={CollectionOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionID`} 
          component={CollectionPageContainer} 
        />
      </Suspense>
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