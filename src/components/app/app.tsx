import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorite from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../pages/private-route/private-route';
import { useAppSelector } from '../../hooks/index';
import LoadingScreen from '../../pages/loading-screen/loading-screen';


function App() {
  const offers = useAppSelector((state) => state.offers);
  const favoriteOffer = offers.filter((offer) => offer.isFavorite);

  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  if (isOffersLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main />
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
