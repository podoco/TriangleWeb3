import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Button } from './components/shared/Button'
import Input from './components/shared/input'
import MainPage from './pages/mainPage/MainPage'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
