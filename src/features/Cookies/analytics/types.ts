interface HubSpotConsentCategories {
  analytics: boolean;
  advertisement: boolean;
  functionality: boolean;
}

export interface HubSpotConsent {
  categories: HubSpotConsentCategories;
}
