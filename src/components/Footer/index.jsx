import React from "react";

import {
  Facebook,
  Instagram,
  Twitter,
  Tumblr,
  Youtube,
  Pinterest,
} from "../Icon";
import Logo from "../../assets/Logo.svg.png";
import {
  AllFooter,
  FooterContainer,
  LogoLink,
  Links,
  TextLink,
  Icons,
  IconWrapper,
  IconLink,
  Copyright,
} from "./styles";

import {
  marvel,
  privacy,
  terms,
  license,
  cookie,
  facebookLink,
  instagramLink,
  twitterLink,
  youtubeLink,
  tumblrLink,
  pinterestLink,
} from "../../constants/links";

const Footer = () => {
  return (
    <AllFooter>
      <FooterContainer>
        <LogoLink href={marvel} target="_blank" rel="noopener noreferrer">
          <img src={Logo} alt="logo" width="100%" />
        </LogoLink>
        <Links aria-label="Legal and policy links">
          <TextLink href={privacy} target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </TextLink>
          <TextLink href={terms} target="_blank" rel="noopener noreferrer">
            Terms of Use
          </TextLink>
          <TextLink href={license} target="_blank" rel="noopener noreferrer">
            License agreement
          </TextLink>
          <TextLink href={cookie} target="_blank" rel="noopener noreferrer">
            Cookie Policy
          </TextLink>
        </Links>
        <Icons>
          <p>Follow Marvel</p>
          <IconWrapper>
            <IconLink
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marvel on Facebook"
            >
              <Facebook />
            </IconLink>
            <IconLink
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marvel on Instagram"
            >
              <Instagram />
            </IconLink>
            <IconLink
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marvel on Twitter"
            >
              <Twitter />
            </IconLink>
            <IconLink
              href={tumblrLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marvel on Tumblr"
            >
              <Tumblr />
            </IconLink>
            <IconLink
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marvel on YouTube"
            >
              <Youtube />
            </IconLink>
            <IconLink
              href={pinterestLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marvel on Pinterest"
            >
              <Pinterest />
            </IconLink>
          </IconWrapper>
        </Icons>
      </FooterContainer>
      <Copyright>"Data provided by Marvel. © 2014 Marvel".</Copyright>
    </AllFooter>
  );
};

export default Footer;
