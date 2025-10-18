import './Cities.css'

import barcelona from '../src/assets/barcelona.png'
import paris from '../../my-project/src/paris.png'
import prague from '../../my-project/src/prague.png'

const Cities = () => {
  return (
    <div className='Cities'>
        <div className="city" data-city="barcelona">
            <img src={barcelona} alt="" />
        </div>
        <div className="city" data-city="paris">
            <img src={paris} alt="" />
        </div>
        <div className="city" data-city="prague">
            <img src={prague} alt="" />
        </div>
    </div>
  )
}

export default Cities