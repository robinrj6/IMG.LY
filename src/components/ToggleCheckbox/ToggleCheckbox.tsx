import React from 'react';

import { Checkbox } from '@ariakit/react';
import classNames from 'classnames';

import classes from './style.module.scss';

interface Props {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
}

export const ToggleCheckbox: React.FC<Props> = ({
  onChange,
  name,
  checked,
  disabled,
  className,
}) => {
  return (
    <label
      htmlFor={name}
      className={classNames(className, classes.checkbox, {
        [classes.checkbox__is_disabled]: disabled,
      })}
    >
      <Checkbox
        id={name}
        name={name}
        className={classes.input}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span
        className={classNames(classes.slider, {
          [classes.slider__is_disabled]: disabled,
        })}
      />
    </label>
  );
};
