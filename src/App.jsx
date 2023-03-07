import DeviceListPage from './pages/DeviceListPage';
import {Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

import './index.css';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <main>  
          <Routes>
            <Route path="/" element={<DeviceListPage />}/>
          </Routes>
        </main>
      </Provider>
    </div>
  );
}

export default App;
