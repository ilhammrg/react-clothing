import styled, { css } from 'styled-components';

import { ReactComponent as InstagramImage } from './instagram.svg';
import { ReactComponent as FacebookImage } from './facebook.svg';
import { ReactComponent as TwitterImage } from './twitter.svg';
import { ReactComponent as YoutubeImage } from './play.svg';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 6rem;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: 'Inter', sans-serif;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 2.5rem;
    padding: 0 25px;
  }

  @media screen and (min-width: 1600px) {
    width: 1600px;
  }
`;

export const CopyrightText = styled.span`
  color: #212121;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
`;

export const SocialMediaLink = styled.a`
  margin: 0 10px;
  
  @media screen and (min-width: 1024px) {
    padding: 5px;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background-color: #efefef;
    }
  }
`;

const socialMediaLogoStyles = css`
  width: 1.5rem;
  height: 1.5rem;
`;

export const InstagramLogo = styled(InstagramImage)`
  ${socialMediaLogoStyles}
`;

export const FacebookLogo = styled(FacebookImage)`
  ${socialMediaLogoStyles}
`;

export const TwitterLogo = styled(TwitterImage)`
  ${socialMediaLogoStyles}
`;

export const YoutubeLogo = styled(YoutubeImage)`
  ${socialMediaLogoStyles}
`;