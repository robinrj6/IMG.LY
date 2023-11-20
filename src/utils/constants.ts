export const HEADERID = 'imgly-website-components-header';
export const FOOTERID = 'imgly-website-components-footer';
export const COOKIESID = 'imgly-website-components-cookies';

export const AnalyticsIDs: Record<string, string> = {
  pesdk: 'PESDKDocs',
  vesdk: 'VESDKDocs',
  cesdk: 'CESDKDocs',
  pricing: 'Pricing',
  contactSales: 'ContactSales',
  freeTrial: 'FreeTrial',
  faq: 'FAQ',
  instagram: 'Instagram',
  linkedIn: 'LinkedIn',
  twitter: 'Twitter',
  github: 'GitHub',
  showcases: 'Showcases',
};

const IMGLY = {
  name: 'IMG.LY',
  url: 'https://img.ly/',
};

const Support = { name: 'Support', url: 'https://img.ly/support' };

const ContactSupport = {
  name: 'Visit our Support Desk',
  url: 'https://img.ly/support',
};

const Pricing = {
  name: 'Pricing',
  url: 'https://img.ly/pricing',
  analyticsID: AnalyticsIDs.pricing,
};

const Blog = { name: 'Blog', url: 'https://img.ly/blog/' };

const ContactSales = {
  name: 'Contact Sales',
  url: 'https://img.ly/forms/contact-sales',
  analyticsID: AnalyticsIDs.contactSales,
};

const FreeTrial = {
  name: 'Free Trial',
  url: 'https://img.ly/forms/free-trial',
  analyticsID: AnalyticsIDs.freeTrial,
};

const Showcases = {
  name: 'Showcases',
  url: 'https://img.ly/showcases/cesdk',
  analyticsID: AnalyticsIDs.showcases,
};

const Careers = { name: 'Careers', url: 'https://img.ly/company/careers' };

const TOS = { name: 'Terms', url: 'https://img.ly/tos' };

const PrivacyPolicy = {
  name: 'Privacy Policy',
  url: 'https://img.ly/privacy-policy',
};

// Products

const PESDK = {
  name: 'PhotoEditor SDK',
  url: 'https://img.ly/products/photo-sdk',
};
const VESDK = {
  name: 'VideoEditor SDK',
  url: 'https://img.ly/products/video-sdk',
};
const CESDK = {
  name: 'CreativeEditor SDK',
  url: 'https://img.ly/products/creative-sdk',
};

// Use Cases

const ApparelUseCase = {
  name: 'Apparel',
  url: 'https://img.ly/use-cases/apparel',
};

const PostcardUseCase = {
  name: 'Postcard Editor',
  url: 'https://img.ly/use-cases/postcard',
};

const PosterUseCase = {
  name: 'Poster Editor',
  url: 'https://img.ly/use-cases/poster',
};

const GreetingCardUseCase = {
  name: 'Greeting Card Editor',
  url: 'https://img.ly/use-cases/greeting-card',
};

// const CollageUseCase = {
//   name: 'Collage Editor',
//   url: 'https://img.ly/use-cases/collage',
// };

const PhotoBookUseCase = {
  name: 'Photobook Editor',
  url: 'https://img.ly/use-cases/photo-book',
};

const VariableDataPrintingUseCase = {
  name: 'Variable Data Printing',
  url: 'https://img.ly/use-cases/variable-data-printing',
};

const CreativeAutomationUseCase = {
  name: 'Creative Automation',
  url: 'https://img.ly/use-cases/creative-automation',
};

const PrintPersonalizationUseCase = {
  name: 'Print Personalization',
  url: 'https://img.ly/use-cases/print-personalization',
};

// Industries

const PrintIndustry = {
  name: 'Print',
  url: 'https://img.ly/industries/print',
};

const MarketingTechIndustry = {
  name: 'Marketing Tech',
  url: 'https://img.ly/industries/marketing-tech',
};

const DAMIndustry = {
  name: 'DAM',
  url: 'https://img.ly/industries/digital-asset-management',
};

// Showcases

const ApparelUIShowcase = {
  name: 'Apparel UI',
  url: 'https://img.ly/showcases/cesdk/apparel-ui/web',
};

const PostcardUIShowcase = {
  name: 'Postcard UI',
  url: 'https://img.ly/showcases/cesdk/post-greeting-cards/web',
};

const LayoutUIShowcase = {
  name: 'Layout UI',
  url: 'https://img.ly/showcases/cesdk/layouts/web',
};

// const MockupUIShowcase = {
//   name: 'Mockup UI',
//   url: 'https://img.ly/showcases/cesdk/mockup-editor/web?c_product=postcard',
// };

const PhotobookUIShowcase = {
  name: 'Photobook UI',
  url: 'https://img.ly/showcases/cesdk/photobook-ui/web',
};

// Shared

const PESDKDocs = [
  // first item is the title
  { name: 'PhotoEditor SDK', url: null },
  { name: 'Get Started', url: 'https://img.ly/docs/pesdk/' },
  { name: 'Guides', url: 'https://img.ly/docs/pesdk/guides/' },
  { name: 'Frameworks', url: 'https://img.ly/docs/pesdk/quickstarts/' },
  { name: 'API Reference', url: 'https://img.ly/docs/pesdk/apidocs/' },
];

const VESDKDocs = [
  { name: 'VideoEditor SDK', url: null },
  { name: 'Get Started', url: 'https://img.ly/docs/vesdk/' },
  { name: 'Guides', url: 'https://img.ly/docs/vesdk/guides/' },
  { name: 'Frameworks', url: 'https://img.ly/docs/vesdk/quickstarts/' },
  { name: 'API Reference', url: 'https://img.ly/docs/vesdk/apidocs/' },
];

const CESDKDocs = [
  { name: 'CreativeEditor SDK', url: null },
  { name: 'Get Started', url: 'https://img.ly/docs/cesdk/' },
  { name: 'Guides', url: 'https://img.ly/docs/cesdk/platforms/' },
  { name: 'Frameworks', url: 'https://img.ly/docs/cesdk/frameworks/' },
];

const GuidesDeveloperLinks: Record<
  string,
  { name: string; url: string | null }[]
> = {
  pesdk: PESDKDocs,
  vesdk: VESDKDocs,
  cesdk: CESDKDocs,
};

const ShowcaseItems = [
  ApparelUIShowcase,
  PostcardUIShowcase,
  LayoutUIShowcase,
  PhotobookUIShowcase,
];

// Footer

const CompanyItems = [
  { name: 'About Us', url: 'https://img.ly/company' },
  { name: 'Team', url: 'https://img.ly/company/team' },
  Careers,
  { name: 'Contact Us', url: 'https://img.ly/company/contact-us' },
];

const LegalItems = [
  TOS,
  { name: 'Imprint', url: 'https://img.ly/imprint' },
  PrivacyPolicy,
  { name: 'Acknowledgements', url: 'https://img.ly/acknowledgements' },
];

const ProductItems = [CESDK, PESDK, VESDK];

const IndustryItems = [PrintIndustry, MarketingTechIndustry, DAMIndustry];

const UseCaseItems = [
  VariableDataPrintingUseCase,
  CreativeAutomationUseCase,
  PrintPersonalizationUseCase,
  ApparelUseCase,
  GreetingCardUseCase,
  PostcardUseCase,
  PosterUseCase,
  PhotoBookUseCase,
];

const ResourceItems: { name: string; url: string; analyticsID?: string }[] = [
  Pricing,
  Support,
  { name: 'Sign-In', url: 'https://img.ly/login' },
  {
    name: 'FAQ’s',
    url: 'https://img.ly/pricing#faqs',
    analyticsID: AnalyticsIDs.faq,
  },
  Blog,
  {
    name: "What's New",
    url: 'https://img.ly/whats-new',
  },
  {
    name: 'Getty Images Library SDK',
    url: 'https://img.ly/partners/getty-images-sdk',
  },
  {
    name: 'Soundstripe Partnership',
    url: 'https://img.ly/partners/soundstripe',
  },
  { name: 'Customers', url: 'https://img.ly/customers' },
  {
    name: 'Aviary Alternative',
    url: 'https://img.ly/imgly-aviary-comparison',
  },
];

export const Links = {
  IMGLY,
  PESDK,
  VESDK,
  CESDK,
  ContactSupport,
  Pricing,
  Blog,
  ContactSales,
  FreeTrial,
  CompanyItems,
  ResourceItems,
  LegalItems,
  GuidesDeveloperLinks,
  Showcases,
  PrintIndustry,
  MarketingTechIndustry,
  DAMIndustry,
  VariableDataPrintingUseCase,
  CreativeAutomationUseCase,
  PrintPersonalizationUseCase,
  ProductItems,
  IndustryItems,
  UseCaseItems,
  ShowcaseItems,
  Careers,
  TOS,
  PrivacyPolicy,
};
