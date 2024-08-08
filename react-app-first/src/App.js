import React from 'react'

import { Footer, Blog, Possiblity, Features,  Header , What} from './container'
import { Cta, Brand, Navbar } from './components'
import "./App.css"

const App = () => {
  return (
  <>
   <div className="App">
        <div className="gradient__bg">
            <Navbar/>
            <Header/>

        </div>
            <Brand/>
            <What/>
            <Features/>
            <Possiblity/>
            <Cta/>
            <Blog/>
            <Footer/>
   </div>
  </>
  )
}

export default App
