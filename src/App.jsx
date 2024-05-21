import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Gallery from './Gallery';
import Headers from './Components/Headers';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Dreamvizz</title>
        <meta name="description" content="Dreamvizz is a Visualization firm for your needs" />
        <meta name="keywords" content="visualization, dreamvizz, architecture, design" />
        <meta name="author" content="dreamvizz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
