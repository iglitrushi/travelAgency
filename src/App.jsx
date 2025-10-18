import { useState } from 'react';
import Winter from "./Winter";
import Cities from "./Cities";
import Company from "./Company";
import NavBar from "./NavBar";
import Titles from "./Titles";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";
import VideoPlayes from "./VideoPlayes";



const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <NavBar/>
      <Company/>
      <div className="container">
          <Titles subTitles='Our PROGRAM' title='What We Offer'/>
          <About/>
          <Titles subTitles='Summer Holidays' title='Explore beautiful beaches '/>
          <Cities/>
          <Titles subTitles='Winter Holidays' title='Explore cities while snowing '/>
          <Winter/>
          <Titles subTitles='Contact Us' title='Get in Touch '/>
          <Contact/>
          <Footer/>
      </div>
      <VideoPlayes playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App

