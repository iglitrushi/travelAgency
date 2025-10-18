import './Summer.css'
import ksamil from '../../my-project/src/ksamil.png'
import rio from '../../my-project/src/rio de janeiro.png'
import sandiego from '../../my-project/src/san diego.png'
import greekbeaches from '../../my-project/src/greekbeach.png'
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