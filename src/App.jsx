import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import DeviceListPage from './pages/DeviceListPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GroupListPage from './pages/GroupListPage';
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          {/* <header></header> */}
          <main>
            <Routes>
              <Route path="/" element={<DeviceListPage />}/>
              <Route path="/grouplist" element={<GroupListPage />}/>
            </Routes>
          </main>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
