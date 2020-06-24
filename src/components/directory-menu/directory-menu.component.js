import React from 'react';
import SECTIONS_DATA from './sections.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory-menu.style.scss';

class DirectoryMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    // looping through sections state to create menu item component
                    this.state.sections
                        .map( ({ id, ...otherProps }) => <MenuItem key={id} {...otherProps} /> )
                }
            </div>
        )
    }
}

export default DirectoryMenu;