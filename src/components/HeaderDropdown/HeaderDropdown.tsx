import React, { useCallback, useContext, useEffect } from 'react';

import {
  Disclosure,
  DisclosureContent,
  useDisclosureStore,
} from '@ariakit/react';
import classNames from 'classnames';

import { ReactComponent as Chevron } from '../../assets/images/navigation-dropdown-chevron.svg';
import { HeaderMenuContext } from '../../context/HeaderMenuContext';
import { ButtonTheme } from '../Button';

import classes from './style.module.scss';

interface Props {
  title: string;
  'aria-label'?: string;
  // this is a debug value to keep the dropdown open in Storybook
  open?: boolean;
  small?: boolean;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

export const HeaderDropdown: React.FC<Props> = ({
  title,
  'aria-label': ariaLabel,
  open,
  small,
  className,
  buttonClassName,
  contentClassName,
  children,
}) => {
  const { smallScreen } = useContext(HeaderMenuContext);
  const disclosure = useDisclosureStore();
  const disclosureOpen = disclosure.useState('open');

  const handleMouseLeave = useCallback(
    event => {
      // only close this dropdown if another one opened and don't close self
      if (event.detail?.title !== title) {
        disclosure.hide();
      }
    },
    [disclosure, title],
  );

  const handlePointerMove = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!disclosureOpen) {
      // close all other open dopdowns if they are still open
      window.dispatchEvent(
        new CustomEvent('imgly-header-disclosure-close', {
          detail: { title },
        }),
      );
      disclosure.show();
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!disclosureOpen) {
      // close all other open dopdowns if they are still open
      window.dispatchEvent(
        new CustomEvent('imgly-header-disclosure-close', {
          detail: { title },
        }),
      );
      disclosure.show();
    } else {
      disclosure.hide();
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener('imgly-header-disclosure-close', handleMouseLeave, {
      signal: controller.signal,
    });

    if (open) {
      disclosure.show();
    } else if (!open && typeof open === 'boolean') {
      disclosure.hide();
    }

    return () => {
      controller.abort();
    };
  }, [open, disclosure, handleMouseLeave]);

  return (
    <div
      className={className}
      onMouseLeave={smallScreen ? undefined : handleMouseLeave}
    >
      <Disclosure
        className={classNames(
          buttonClassName,
          classes.button,
          classes[`button__is_${ButtonTheme.Text}`],
          {
            [classes.button__open]: disclosureOpen,
            [classes.button__is_small]: small,
          },
        )}
        aria-label={ariaLabel}
        store={disclosure}
        // note: used Pointer event to resolve issue with Touch and Mouse events overlapping
        onPointerMove={smallScreen ? undefined : handlePointerMove}
        onClick={handleClick}
      >
        <span className={classes.button__content}>{title}</span>
        <Chevron
          className={classNames(classes.icon, {
            [classes.icon__is_small]: small,
          })}
        />
      </Disclosure>
      <DisclosureContent
        store={disclosure}
        className={classNames(contentClassName, classes.content)}
      >
        <div className={classes.container}>{children}</div>
      </DisclosureContent>
    </div>
  );
};
