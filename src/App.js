import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserContainer from './components/UserContainer';
import ItemContainer from './components/ItemCounter';
import ItemShow from './components/ItemShow';
import IceCream from './components/IceCream';

function App() {
  return (
    <Provider store={store}>
      {/* <UserContainer /> */}
      <ItemContainer />
      <ItemShow />
      <IceCream />
    </Provider>
  );
}

export default App;
