import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import DeviceListPage from './pages/DeviceListPage'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          {/* <header></header> */}
          <main>
            <DeviceListPage />

          </main>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
