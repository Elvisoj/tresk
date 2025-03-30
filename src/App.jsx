import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

import Header from './components/Header'
import Footer from './components/footer/Footer'
import BlogPage from './pages/BlogPage'
import ReadingSection from './pages/ReadingSection'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/posts/:postId' element={<ReadingSection />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' errorElement={<h2>Not found</h2>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
