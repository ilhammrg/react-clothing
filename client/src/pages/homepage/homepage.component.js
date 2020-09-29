import React from 'react';

import { HomepageContainer } from './homepage.styles';

import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

const Homepage = () => {
    return (
        <HomepageContainer>
            <DirectoryMenu />
        </HomepageContainer>
    );
};

export default Homepage;