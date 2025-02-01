import { Provider } from 'react-redux';
import './App.css';
import Testfunc, { store } from './Testfunc';

function App() {
 
  return (
    <Provider store={store}>
      <div className="App">
      
      <Testfunc/>
     </div>
    </Provider>
  );
}

export default App;
