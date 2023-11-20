import React from 'react';

import { SelectItem as AriakitSelectItem } from '@ariakit/react';
import classNames from 'classnames';

import { Option } from '../Select';

import classes from './style.module.scss';

interface SingleProps {
  option: Option;
  multi: boolean;
  value: string;
}
interface MultiProps {
  option: Option;
  multi: boolean;
  value: string[];
}
type Props = MultiProps | SingleProps;

export const SelectItem: React.FC<Props> = ({
  option,
  multi,
  value,
}): JSX.Element => {
  const theme = multi ? 'multi' : 'single';
  const isSelected =
    value instanceof Array
      ? value.includes(option.value)
      : value === option.value;

  return (
    <AriakitSelectItem
      key={option.value}
      focusOnHover={false}
      value={option.value}
      className={classNames(
        classes.selectItem,
        classes[`selectItem__${theme}`],
        {
          [classes.selectItem__checked]: isSelected,
        },
      )}
    >
      <div className={classes.selectItemLabelWrapper}>
        <span
          className={classNames(
            classes.selectItemCheckbox,
            classes[`selectItemCheckbox__${theme}`],
          )}
        ></span>
        <span>{option.label}</span>
      </div>
      {option.labelRight && <span>{option.labelRight}</span>}
    </AriakitSelectItem>
  );
};
