import React from 'react';

import { render } from 'react-dom';

import './styles/index.scss';

import { Cookies } from './features/Cookies';
import { Footer } from './features/Footer';
import { Header } from './features/Header';
import { COOKIESID, FOOTERID, HEADERID } from './utils/constants';

const initComponents = () => {
  if (document) {
    const footerDomNode = document.getElementById(FOOTERID);
    if (footerDomNode) {
      render(<Footer />, footerDomNode);
    }

    const headerDomNode = document.getElementById(HEADERID);
    if (headerDomNode) {
      render(<Header />, headerDomNode);
    }

    const cookiesDomNode = document.getElementById(COOKIESID);
    if (cookiesDomNode) {
      render(<Cookies />, cookiesDomNode);
    }
  }
};

// load the components directly if the ids can be found and the DOM is already loaded
if (
  document?.getElementById(FOOTERID) ||
  document?.getElementById(HEADERID) ||
  document?.getElementById(COOKIESID)
) {
  initComponents();
} else if (window) {
  // else wait for the DOM to be loaded and then render components
  if (window) {
    window.addEventListener('DOMContentLoaded', () => {
      initComponents();
    });
  }
}
