import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Router from './src/router/Router';

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Router />
    </NavigationContainer>
  );
}
