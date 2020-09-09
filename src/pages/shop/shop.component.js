import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

// import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

// Redux saga only
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class Shop extends React.Component {
    componentDidMount() {
        // const { fetchCollectionStartAsync } = this.props;
        // fetchCollectionStartAsync();

        // Redux fetch
        const { fetchCollectionStart } = this.props;
        fetchCollectionStart();
    };

    render() {
        const { match } = this.props;
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
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
        fetchCollectionStart: () => dispatch(fetchCollectionStart())
    };
};


export default compose(
    connect(null, mapDispatchToProps)
)(Shop);