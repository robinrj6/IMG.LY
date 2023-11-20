export const loadScript = (
  src: string,
  attributes?: string | Record<string, string | number | boolean>,
) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';

  if (attributes) {
    if (typeof attributes === 'string') {
      attributes.split(' ').forEach((attribute: string) => {
        if (attribute.includes('=')) {
          const [key, value] = attribute.split('=');
          script.setAttribute(key, value);
        } else {
          script.setAttribute(attribute, '');
        }
      });
    } else if (typeof attributes === 'object') {
      Object.entries(attributes).forEach(([key, value]) => {
        script.setAttribute(key, value.toString());
      });
    }
  }

  script.src = src;

  const sibling = document.getElementsByTagName('script')[0];
  if (sibling?.parentNode) {
    sibling.parentNode.insertBefore(script, sibling);
  } else {
    document.getElementsByTagName('head')[0].appendChild(script);
  }
};
