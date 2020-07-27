import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div className='shop-page'>
                {
                    // Looping through collections state to create collection preview component
                    this.state.collections
                        .map( ({ id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} /> )
                }
            </div>
        )
    }
}

export default Shop;