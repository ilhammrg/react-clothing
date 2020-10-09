import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as InstagramImage } from './instagram.svg';
import { ReactComponent as FacebookImage } from './facebook.svg';
import { ReactComponent as TwitterImage } from './twitter.svg';
import { ReactComponent as YoutubeImage } from './play.svg';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #252525;

  @media screen and (min-width: 768px) {
    height: 18rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 30px;
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(4, 400px);
  }
`;

export const CopyrightText = styled.span`
  color: #666;
  font-family: 'Inter', sans-serif;
`;

export const Subtitle = styled.span`
  font-weight: 400;
  color: #666;
  margin-bottom: 10px;
  font-size: 1.6rem;

  &#social-media-title {
    margin: 30px 0 10px 0;
  }

  @media screen and (min-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    margin: 0;

    &#social-media-title {
      grid-column: 4 / 5;
      grid-row: 1 / 2;
      margin: 0;
  }
  }
`;

export const SocialMediaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  margin: 0 auto 0 0;

  @media screen and (min-width: 768px) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }
`;

export const SocialMediaLink = styled.a`
  margin-right: 10px;
  padding: 5px;
  
  @media screen and (min-width: 1024px) {
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const socialMediaLogoStyles = css`
  width: 1.5rem;
  height: 1.5rem;

  path {
    fill: #ccc;
  }
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

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 2 / 5;
  }
`;

export const NavigationLink = styled(Link)`
  color: #ccc;
  font-weight: 300;
  padding: 5px 0;
  font-family: 'Inter', sans-serif;

  @media screen and (min-width: 1024px) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media screen and (min-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 2 / 4;
  }
`;

export const Description = styled.p`
  font-family: 'Inter', sans-serif;
  color: #666;
  margin: 1rem 0;
`;

export const BrandName = styled.span`
  font-family: 'Fredericka the Great', cursive;
  color: white;
  font-size: 2rem;
  margin: 30px 0 0 0;

  @media screen and (min-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    margin: 0;
  }
`;