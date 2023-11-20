import React, { useEffect, useState } from 'react';

import { HeaderCareers } from '../../components/HeaderCareers';
import { HeaderContainer } from '../../components/HeaderContainer';
import { HeaderLogo } from '../../components/HeaderLogo';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderWrapper } from '../../components/HeaderWrapper';
import { CONFIG } from '../../config';
import { HEADERID } from '../../utils/constants';

import { HeaderChildren } from './HeaderChildren';
import { HeaderMenuChildren } from './HeaderMenuChildren';

interface Props {
  small?: boolean;
  hiring?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  small,
  hiring = CONFIG.hiring,
  className,
  ...props
}) => {
  const [showHiring, setShowHiring] = useState(hiring);

  useEffect(() => {
    const headerElement = document.getElementById(HEADERID);
    if (headerElement && headerElement.getAttribute('data-hiring') === 'true') {
      setShowHiring(true);
    }
  }, [setShowHiring]);

  return (
    <HeaderWrapper {...props} className={className}>
      <HeaderLogo small={small} />
      <HeaderContainer>
        <HeaderChildren small={small} />
      </HeaderContainer>
      {showHiring && <HeaderCareers />}
      <HeaderMenu small={small}>
        <HeaderMenuChildren />
      </HeaderMenu>
    </HeaderWrapper>
  );
};
