import React from 'react';

import { HomepageContainer } from './homepage.styles';

import PageHeader from '../../components/page-header/page-header.component';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

const Homepage = () => {
  return (
    <HomepageContainer>
      <PageHeader />
      <DirectoryMenu />
    </HomepageContainer>
  );
};

export default Homepage;