import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// Components
import { DirectoryMenuContainer } from './directory-menu.styles';
import MenuItem from '../menu-item/menu-item.component';

const DirectoryMenu = ({ sections }) => {
    return (
        <DirectoryMenuContainer>
            {
                // looping through sections state to create menu item component
                sections
                    .map( ({ id, ...otherProps }) => <MenuItem key={id} {...otherProps} /> )
            }
        </DirectoryMenuContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);