import React from 'react';

import { List } from '../../../components/List';
import { ListItem } from '../../../components/ListItem';
import { FooterLink } from '../FooterLink';

import classes from './style.module.scss';

interface Props {
  label: string;
  links: { name: string; url: string | null; analyticsID?: string }[];
}

export const FooterCategory: React.FC<Props> = ({ label, links }) => {
  return (
    <List className={classes.root}>
      <div className={classes.heading}>{label}</div>
      {links.map(({ name, url, analyticsID }) => {
        if (!name || !url) return null;
        return (
          <ListItem key={name} className={classes.wrapper}>
            <FooterLink
              href={url}
              className={classes.link}
              data-analytics={
                analyticsID ??
                `${analyticsID}, {"props": {"source": "/footer"}}`
              }
            >
              {name}
            </FooterLink>
          </ListItem>
        );
      })}
    </List>
  );
};
