
import NavBar from "./NavBar";
import Company from "./Company";
import Titles from "./Titles";
import About from "./About";
import Cities from "./Cities";
import Winter from "./Winter";
import Contact from "./Contact";
import Footer from "./Footer";
import VideoPlayes from "./VideoPlayes";

const App = () => {
  return (
    <div>
      <NavBar />
      <Company />
      <div className="container">
        <Titles subTitles="Our PROGRAM" title="What We Offer" />
        <About />
        <Titles subTitles="Summer Holidays" title="Explore beautiful beaches" />
        <Cities />
        <Titles subTitles="Winter Holidays" title="Explore cities while snowing" />
        <Winter />
        <Titles subTitles="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>

     
      <VideoPlayes />
    </div>
  );
};

export default App;
