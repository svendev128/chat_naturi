import MyRoute from './Route/MyRoutes';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <MyRoute />
      </Provider>
    </div>  
  );
}

export default App;
