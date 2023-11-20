import React from 'react';

import {
  Select as AriakitSelect,
  SelectPopover,
  useSelectStore,
} from '@ariakit/react';
import classNames from 'classnames';

import { ReactComponent as Chevron } from '../../assets/images/select-chevron.svg';
import { Button, ButtonTheme } from '../Button';
import { SelectItem } from '../SelectItem';

import classes from './style.module.scss';

export interface Option {
  value: string;
  label: React.ReactNode;
  labelRight?: React.ReactNode;
}

interface SelectProps {
  label: React.ReactNode;
  options: Option[];
  disabled?: boolean;
  small?: boolean;
  className?: string;
  selectClassName?: string;
  popoverClassName?: string;
}

interface MultiSelectProps extends SelectProps {
  value: string[];
  onChange: (value: string[]) => void;
}
interface SingleSelectProps extends SelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<MultiSelectProps | SingleSelectProps> = ({
  label,
  options,
  value,
  disabled,
  small = true,
  className,
  selectClassName,
  popoverClassName,
  onChange,
}) => {
  const select = useSelectStore<typeof value>({
    value,
    // @ts-ignore
    setValue: onChange,
  });
  const selectValue = select.useState('value');
  const selectMounted = select.useState('mounted');

  const isMulti = Array.isArray(selectValue);
  const hasValue = selectValue.length > 0;

  return (
    <div className={className}>
      <AriakitSelect
        as={Button}
        theme={ButtonTheme.Secondary}
        small={small}
        trailingIcon={<Chevron />}
        store={select}
        className={classNames(selectClassName, classes.select, {
          [classes.button__active]: hasValue && isMulti,
        })}
        disabled={disabled}
      >
        {label}
        {isMulti && selectValue.length > 0
          ? ` (${selectValue.length.toString()})`
          : ''}
      </AriakitSelect>
      {selectMounted && (
        <SelectPopover
          store={select}
          className={classNames(popoverClassName, classes.popover)}
          gutter={8}
        >
          {options.map(option => (
            // @ts-ignore
            <SelectItem
              key={option.value}
              multi={isMulti}
              value={selectValue}
              option={option}
            />
          ))}
        </SelectPopover>
      )}
    </div>
  );
};
