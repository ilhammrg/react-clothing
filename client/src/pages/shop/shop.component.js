import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import { ShopContainer } from './shop.styles';
import Spinner from '../../components/spinner/spinner.component';
import NotFound from '../not-found/not-found.component';

const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const Shop = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <ShopContainer>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route 
            exact path={`${match.path}`} 
            component={CollectionOverviewContainer}
          />
          <Route 
            exact path={`${match.path}/:collectionID`} 
            component={CollectionPageContainer} 
          />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ShopContainer>
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