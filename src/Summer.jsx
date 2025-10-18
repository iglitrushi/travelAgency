import './Summer.css'
import ksamil from './assets/ksamil.png'
import rio from './assets/rio de janeiro.png'
import sandiego from './assets/san diego.png'
import greekbeaches from './assets/greekbeach.png'
const Summer = () => {
  return (
    <div className='summer' id='Summer'>
        <div className="gallery">
            <img src={ksamil} alt="" />
            <img src={rio} alt="" />
            <img src={sandiego} alt="" />
            <img src={greekbeaches} alt="" />
        </div>
        <button className='btn dark-btn'>See more here</button>
    </div>
  )
}

export default Summer