import React from 'react';

import classNames from 'classnames';

import { Button } from '../../../components/Button';
import { HeaderDropdown } from '../../../components/HeaderDropdown';
import { List } from '../../../components/List';
import { ListItem } from '../../../components/ListItem';
import { Links } from '../../../utils/constants';
import { DocsItem } from '../DocsItem';

import classes from './style.module.scss';

interface Props {
  open?: boolean;
  small?: boolean;
  buttonClassName?: string;
}

export const Docs: React.FC<Props> = ({ open, small, buttonClassName }) => {
  return (
    <ListItem>
      <HeaderDropdown
        buttonClassName={buttonClassName}
        contentClassName={classNames(classes.content, {
          [classes.content__is_small]: small,
        })}
        aria-label="A menu with different entry points into each SDK documentation"
        title="Docs"
        open={open}
        small={small}
      >
        <List className={classes.container}>
          {Object.values(Links.GuidesDeveloperLinks).map(docs => {
            const items = docs.map(({ name, url }) => {
              if (!url) {
                return (
                  <div
                    key={name}
                    className={classNames(classes.heading, classes.tag, {
                      [classes.tag__is_pesdk]: name.includes('Photo'),
                      [classes.tag__is_vesdk]: name.includes('Video'),
                      [classes.tag__is_cesdk]: name.includes('Creative'),
                    })}
                  >
                    {name}
                  </div>
                );
              }
              return <DocsItem key={name} name={name} url={url} />;
            });

            return (
              <div key={docs[0].name} className={classes.column}>
                {items}
              </div>
            );
          })}
          <div className={classes.support}>
            <div className={classes.support__text}>
              Didn&apos;t find the answers you were looking for?
            </div>
            <ListItem>
              <Button render={<a />} href={Links.ContactSupport.url}>
                {Links.ContactSupport.name}
              </Button>
            </ListItem>
          </div>
        </List>
      </HeaderDropdown>
    </ListItem>
  );
};
