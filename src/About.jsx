import './About.css'
import plane1 from './assets/plane1.png'; 



const About = () => {
  return (
    <div className='about' id='About'>
        <div className="about-left">
            <img src={plane1} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>ABOUT AGENCY</h3>
            <p>At our agency, we specialize in turning ideas into impactful results. We blend technology, creativity, and strategy to help businesses grow, adapt, 
                and thrive in a rapidly changing world. From web design to digital marketing, our team is passionate about delivering unique solutions that make a difference. 
                We build lasting partnerships, empowering brands to reach new heights and achieve their goals with precision and innovation.</p>
        </div>
    </div>
  )
}

export default About