import Main from '../../pages/main/main';

type MainProps = {
  rentalOffersNumber: number;
}

function App({rentalOffersNumber}: MainProps) {
  return (
    <Main rentalOffersNumber={rentalOffersNumber}></Main>
  );
}

export default App;
