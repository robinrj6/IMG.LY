import { createContext } from 'react';

export const CookieContext = createContext<{
  trackFunctionality: boolean;
  trackAdvertisement: boolean;
  trackAnalytics: boolean;
}>({
  trackFunctionality: false,
  trackAdvertisement: false,
  trackAnalytics: false,
});
