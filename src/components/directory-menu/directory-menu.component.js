import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// Components
import './directory-menu.style.scss';
import MenuItem from '../menu-item/menu-item.component';

const DirectoryMenu = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {
                // looping through sections state to create menu item component
                sections
                    .map( ({ id, ...otherProps }) => <MenuItem key={id} {...otherProps} /> )
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);