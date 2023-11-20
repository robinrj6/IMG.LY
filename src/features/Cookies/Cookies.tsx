import React, { useEffect, useMemo, useState } from 'react';

import { CookieContext } from '../../context/CookieContext';

export const Cookies: React.FC = ({ children }) => {
  const [trackAnalytics, setTrackAnalytics] = useState(false);
  const [trackFunctionality, setTrackFunctionality] = useState(false);
  const [trackAdvertisement, setTrackAdvertisement] = useState(false);

  useEffect(() => {
    // scripts are loaded here based on consent level
  }, []);

  const cookieContextValue = useMemo(
    () => ({
      trackFunctionality,
      trackAnalytics,
      trackAdvertisement,
    }),
    [trackFunctionality, trackAnalytics, trackAdvertisement],
  );

  return (
    <CookieContext.Provider value={cookieContextValue}>
      {children}
    </CookieContext.Provider>
  );
};
