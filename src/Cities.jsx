import './Cities.css'

import barcelona from './assets/barcelona.png'
import paris from './assets/paris.png';
import prague from './assets/prague.png'

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