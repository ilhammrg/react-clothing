import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                items
                    // filter items array
                    .filter( (item, index) => index < 4 )
                    // loop each item to create div
                    .map( ({ id, ...otherProps }) => <CollectionItem key={id} {...otherProps} /> )
                }
            </div>
        </div>
    )
}

export default CollectionPreview;