import MainScreen from '../../pages/main-screen/main-screen';
import {AppScreenProps} from '../../props/app-screen-props/app-screen-props';

export function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen placesCount={placesCount}/>
  );
}
