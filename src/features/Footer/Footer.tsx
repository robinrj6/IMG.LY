import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import { ReactComponent as GitHub } from '../../assets/images/github.svg';
import { ReactComponent as ImglyWhite } from '../../assets/images/IMG_LY_white.svg';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/images/twitter.svg';
import { List } from '../../components/List';
import { ListItem } from '../../components/ListItem';
import { CONFIG } from '../../config';
import { AnalyticsIDs, FOOTERID, Links } from '../../utils/constants';

import { FooterCategory } from './FooterCategory';
import { FooterLink } from './FooterLink';
import classes from './style.module.scss';

const FooterSocialLinks = [
  {
    name: 'Instagram',
    analyticsID: AnalyticsIDs.instagram,
    url: 'https://www.instagram.com/img.ly/',
    LogoComponent: Instagram,
    logoAriaLabel: 'Visit our Instagram page',
  },
  {
    name: 'LinkedIn',
    analyticsID: AnalyticsIDs.linkedIn,
    url: 'https://www.linkedin.com/company/img.ly',
    LogoComponent: LinkedIn,
    logoAriaLabel: 'Visit our LinkedIn page',
  },
  {
    name: 'Twitter',
    analyticsID: AnalyticsIDs.twitter,
    url: 'https://twitter.com/photoeditorsdk',
    LogoComponent: Twitter,
    logoAriaLabel: 'Visit our Twitter page',
  },
  {
    name: 'GitHub',
    analyticsID: AnalyticsIDs.github,
    url: 'https://github.com/imgly',
    LogoComponent: GitHub,
    logoAriaLabel: 'Visit our GitHub page',
  },
];

interface Props {
  hiring?: boolean;
}

export const Footer: React.FC<Props> = ({
  hiring = CONFIG.hiring,
  ...props
}) => {
  const [showHiring, setShowHiring] = useState(hiring);

  useEffect(() => {
    const footerElement = document.getElementById(FOOTERID);
    if (footerElement && footerElement.getAttribute('data-hiring') === 'true') {
      setShowHiring(true);
    }
  }, [setShowHiring]);

  return (
    <div
      {...props}
      className={classNames(classes.footer, 'imgly__on_dark_background')}
    >
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classNames(classes.column, classes.column__is_first)}>
            <List className={classes.company}>
              <ListItem>
                <FooterLink
                  href={Links.IMGLY.url}
                  aria-current="page"
                  className={classes.company__logo}
                  aria-label="Go to the main IMGLY page"
                >
                  <ImglyWhite
                    aria-label="Go to the main IMGLY page"
                    className={classes.icon}
                  />
                </FooterLink>
              </ListItem>
              {Links.CompanyItems.map(({ name, url }) => (
                <ListItem key={name}>
                  <FooterLink
                    href={url}
                    className={classNames({
                      [classes.careers]: name === 'Careers' && showHiring,
                    })}
                  >
                    {name}
                  </FooterLink>
                </ListItem>
              ))}
            </List>
            <List className={classes.legal}>
              {Links.LegalItems.map(({ name, url }) => (
                <ListItem key={name}>
                  <FooterLink href={url}>{name}</FooterLink>
                </ListItem>
              ))}
            </List>
            <List className={classes.socials}>
              {FooterSocialLinks.map(
                ({ name, analyticsID, url, LogoComponent, logoAriaLabel }) => (
                  <ListItem key={name}>
                    <FooterLink
                      href={url}
                      target="_blank"
                      className={classes.socials__item}
                      rel="noreferrer"
                      data-analytics={`${analyticsID}, {"props": {"source": "/footer"}}`}
                    >
                      <LogoComponent
                        className={classes.icon}
                        aria-label={logoAriaLabel}
                      />
                    </FooterLink>
                  </ListItem>
                ),
              )}
              <div className={classes.socials__copyright}>
                ©&nbsp;2014&nbsp;-&nbsp;2023
              </div>
            </List>
          </div>
          <div className={classes.column}>
            <FooterLink
              href={Links.IMGLY.url}
              aria-current="page"
              className={classes.logo__is_mobile}
              aria-label="Go to the main Imgly page"
            >
              <ImglyWhite
                className={classes.icon}
                aria-label="Go to the main Imgly page"
              />
            </FooterLink>
            <FooterCategory label="Products" links={Links.ProductItems} />
            <FooterCategory label="Industries" links={Links.IndustryItems} />
          </div>
          <div className={classes.column}>
            <FooterCategory label="Use Cases" links={Links.UseCaseItems} />
            <FooterCategory label="Showcases" links={Links.ShowcaseItems} />
          </div>
          <div className={classes.column}>
            <FooterCategory
              label="Developers"
              links={Links.GuidesDeveloperLinks.cesdk}
            />
            <FooterCategory label="Resources" links={Links.ResourceItems} />
          </div>
        </div>
      </div>
    </div>
  );
};
