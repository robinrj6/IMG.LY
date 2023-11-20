import React, { useEffect, useRef } from 'react';

import classNames from 'classnames';

import { ReactComponent as OpenInNew } from '../../../assets/images/navigation-icon-trailing-1.svg';
import { ReactComponent as ArrowForward } from '../../../assets/images/navigation-icon-trailing.svg';
import { ButtonTheme, Button } from '../../../components/Button';
import { HeaderDropdown } from '../../../components/HeaderDropdown';
import { List } from '../../../components/List';
import { ListItem } from '../../../components/ListItem';
import { Product } from '../../../types';
import { Links } from '../../../utils/constants';
import { ProductsItem } from '../ProductsItem';

import classes from './style.module.scss';

interface Props {
  open?: boolean;
  small?: boolean;
  buttonClassName?: string;
}

export const Products: React.FC<Props> = ({ open, small, buttonClassName }) => {
  const cesdkItemRef = useRef<HTMLAnchorElement | null>(null);
  const cesdkContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    // note: don't attach handler to tablet or mobile devices
    if (window.innerWidth > 991) {
      const handleEnter = () => {
        if (cesdkContainerRef.current) {
          cesdkContainerRef.current.style.backgroundImage =
            'linear-gradient(94.29deg, rgba(173, 0, 255, 0.05), rgba(173, 0, 255, 0.05))';
        }
      };
      const handleLeave = () => {
        if (cesdkContainerRef.current) {
          cesdkContainerRef.current.style.backgroundImage =
            'linear-gradient(94.29deg, rgba(71, 26, 255, 0.06), rgba(71, 26, 255, 0.02))';
        }
      };

      if (cesdkItemRef.current) {
        cesdkItemRef.current.addEventListener('mouseenter', handleEnter, {
          signal: controller.signal,
        });
        cesdkItemRef.current?.addEventListener('mouseleave', handleLeave, {
          signal: controller.signal,
        });
      }
    }
    return () => {
      controller.abort();
    };
  }, [cesdkItemRef, cesdkContainerRef]);

  return (
    <ListItem>
      <HeaderDropdown
        buttonClassName={buttonClassName}
        contentClassName={classNames(classes.content, {
          [classes.content__is_small]: small,
        })}
        aria-label="A menu that links to all IMGLY products."
        title="Products"
        open={open}
        small={small}
      >
        <List className={classes.container}>
          <div ref={cesdkContainerRef} className={classes['container-cesdk']}>
            <ProductsItem
              ref={cesdkItemRef}
              className={classes['container-cesdk__item']}
              name={Links.CESDK.name}
              description="Empower Your Users with an Easy-to-Use Design Editor"
              url={Links.CESDK.url}
              product={Product.CESDK}
            >
              <img
                className={classes.image}
                alt=""
                src="https://img.ly/static/imgly-website-components/images/navigation-cesdk-content-viz.png"
                loading="lazy"
              />
            </ProductsItem>
            <div className={classes.kits}>
              <div className={classes.kits__h4}>Starter Kits</div>
              {Links.ShowcaseItems.map(({ name, url }) => (
                <ListItem key={name}>
                  <Button
                    className={classes.kits__item}
                    theme={ButtonTheme.Text}
                    render={<a />}
                    href={url}
                    small
                    trailingIcon={<ArrowForward />}
                  >
                    {name}
                  </Button>
                </ListItem>
              ))}
              <ListItem>
                <Button
                  className={classes.kits__button}
                  render={<a />}
                  href={Links.Showcases.url}
                  theme={ButtonTheme.Secondary}
                  small
                  trailingIcon={<OpenInNew className={classes.kits__icon} />}
                >
                  Explore All Demos
                </Button>
              </ListItem>
            </div>
          </div>
          <div className={classes.wrapper}>
            <ProductsItem
              name={Links.PESDK.name}
              description="PhotoEditor SDK for Web & Mobile"
              url={Links.PESDK.url}
              product={Product.PESDK}
            />
            <ProductsItem
              name={Links.VESDK.name}
              description="VideoEditor SDK for iOS, Android, and React Native"
              url={Links.VESDK.url}
              product={Product.VESDK}
            />
          </div>
        </List>
      </HeaderDropdown>
    </ListItem>
  );
};
