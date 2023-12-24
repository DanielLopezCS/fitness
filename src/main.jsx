import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx';
import Container from 'react-bootstrap/Container';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
    <Navbar/>
    <App />
    </Container>
  </React.StrictMode>,
)
