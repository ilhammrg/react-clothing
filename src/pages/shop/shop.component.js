import React from 'react';
import { Route } from 'react-router-dom';

import { firestore, convertSnapshotToObject } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { updateShopData } from '../../redux/shop/shop.actions';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

class Shop extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const newCollectionObject = convertSnapshotToObject(snapshot);
            await this.props.updateShopData(newCollectionObject);
        });
            
    };

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateShopData: collectionObject => dispatch(updateShopData(collectionObject))
    };
};

export default connect(null, mapDispatchToProps)(Shop);