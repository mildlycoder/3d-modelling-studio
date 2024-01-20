import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from "./Contact"
import Gallery from './Gallery'
import Headers from './Components/Headers'
import {Helmet} from "react-helmet";
function App() {

  return (
    <>
    <Helmet>
        <title>DreamVizz</title>
        <meta name="DreamVizz" content="DreamVizz is a Visualization firm for your needs"/>
    </Helmet>
    <Headers />
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="gallery" element={ <Gallery/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </>
  )
}

export default App
