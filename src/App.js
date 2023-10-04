import { Provider } from 'react-redux';
import './App.css';
import Routing from './routing/routing';
import Store from './redux/reducers/store';

function App() {
  return (
    <>
      <Provider store={<Store/>}/>
      <Routing />
      <Provider />

    </>
   
  );
}

export default App;
