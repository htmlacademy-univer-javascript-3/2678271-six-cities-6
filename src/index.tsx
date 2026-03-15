import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const rentalOffersNumber = 5;
root.render(
  <React.StrictMode>
    <App
      rentalOffersNumber={rentalOffersNumber}
      offers={offers}
    />
  </React.StrictMode>
);
