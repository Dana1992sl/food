import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import StoreContextProvider from './Context/Contex.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
  <App />

  </StoreContextProvider>
    
  </BrowserRouter>,
)
