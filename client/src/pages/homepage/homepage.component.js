import React from 'react';
import { Helmet } from 'react-helmet';

import { HomepageContainer } from './homepage.styles';

import PageHeader from '../../components/page-header/page-header.component';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

const Homepage = () => {
  return (
    <HomepageContainer>
      <Helmet>
        <title>Urban Clothing | Finest mens and womens apparel</title>
      </Helmet>
      <PageHeader />
      <DirectoryMenu />
    </HomepageContainer>
  );
};

export default Homepage;
