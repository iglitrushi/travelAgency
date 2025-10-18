import './Summer.css'
import ksamil from '../src/assets/ksamil.png'
import rio from '../src/assets/rio de janeiro.png'
import sandiego from '../src/assets/san diego.png'
import greekbeaches from '../src/assets/greekbeach.png'
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