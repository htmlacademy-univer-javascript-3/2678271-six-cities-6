import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorite from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../pages/private-route/private-route';
import {Offer} from '../../types/offer';

type MainProps = {
  rentalOfferNumber: number;
  offers: Offer[];
}

function App({rentalOfferNumber, offers}: MainProps) {
  const favoriteOffer = offers.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              rentalOffersNumber={rentalOfferNumber}
              offers={offers}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorite offers={favoriteOffer}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
