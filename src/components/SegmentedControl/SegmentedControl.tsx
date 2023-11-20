import React from 'react';

import { RadioGroup, Radio, useRadioStore } from '@ariakit/react';
import classNames from 'classnames';

import { ButtonTheme } from '../Button';

import classes from './style.module.scss';

interface Option {
  label: string;
  value: string | number;
  href?: string;
}

interface Props {
  options: Option[];
  name: string;
  label: string;
  value: string | number | null;
  disabled?: boolean;
  small?: boolean;
  hideLabel?: boolean;
  activeTheme?: ButtonTheme;
  onChange?: (value: string | number | null) => void;
  render?: React.ReactNode;
  className?: string;
}

export const SegmentedControl = ({
  options,
  value,
  name,
  label,
  disabled,
  small = true,
  hideLabel = false,
  activeTheme = ButtonTheme.Secondary,
  onChange,
  render,
  className = '',
}: Props) => {
  const radio = useRadioStore({ value, setValue: onChange });
  const radioValue = radio.useState('value');
  const getId = (option: Option) => name + option.value;

  return (
    <div className={classNames(classes.root, className)}>
      {label && !hideLabel && (
        <span className={classes.description}>{label}</span>
      )}
      <RadioGroup
        aria-label={label}
        className={classNames(classes.options, {
          [classes.options__is_small]: small,
          [classes.options__is_disabled]: disabled,
        })}
        store={radio}
      >
        {options.map(option => {
          let buttonTheme = ButtonTheme.Text;
          if (!disabled && radioValue === option.value) {
            buttonTheme = activeTheme || ButtonTheme.Secondary;
          }

          return (
            <label key={getId(option)} className={classes.label}>
              <Radio
                className={classes.radio}
                value={option.value}
                aria-label={option.label}
                // @ts-ignore
                render={render}
              />
              <div
                className={classNames(
                  classes.button,
                  classes[`button__is_${buttonTheme}`],
                  {
                    [classes.button__is_small]: small,
                    [classes.button__is_disabled]: disabled,
                  },
                )}
              >
                <span className={classes.button__content}>{option.label}</span>
              </div>
            </label>
          );
        })}
      </RadioGroup>
    </div>
  );
};
