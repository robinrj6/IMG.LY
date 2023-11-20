import './App.css';
import { useRef } from 'react';

import {
  Header,
  Footer,
  Cookies,
  useHeaderEvents,
} from '@imgly-labs/imgly-website-components';

const App = () => {
  const wrapperRef = useRef(null);
  const { handleKeyDown, handleBlur } = useHeaderEvents(wrapperRef);

  return (
    <>
      <header ref={wrapperRef} onKeyDown={handleKeyDown} onBlur={handleBlur}>
        <Header data-testid="imgly-website-components-header" />
      </header>
      <footer>
        <Footer data-testid="imgly-website-components-footer" />
      </footer>
      <Cookies />
    </>
  );
};

export default App;
