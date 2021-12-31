import React from 'react';
import { render } from 'react-dom';

import { Listings } from './sections/Listings';

render(
  <React.StrictMode>
    <Listings title='Tinyhouse Listings' />
  </React.StrictMode>,
  document.getElementById('root')
);
