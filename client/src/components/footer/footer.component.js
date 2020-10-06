import React from 'react';

import {
  FooterContainer,
  CopyrightText,
  SocialMediaContainer,
  SocialMediaLink,
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo
} from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>&copy; 2020 Urban Clothing Co.</CopyrightText>
      <SocialMediaContainer>
        <SocialMediaLink href='#instagram' title='Instagram'>
          <InstagramLogo title='Instagram' />
        </SocialMediaLink>
        <SocialMediaLink href='#facebook' title='Facebook'>
          <FacebookLogo title='Facebook' />
        </SocialMediaLink>
        <SocialMediaLink href='#twitter' title='Twitter'>
          <TwitterLogo title='Twitter' />
        </SocialMediaLink>
        <SocialMediaLink href='#youtube' title='Youtube'>
          <YoutubeLogo title='Youtube' />
        </SocialMediaLink>
      </SocialMediaContainer>
    </FooterContainer>
  );
}

export default Footer;