import './Titles.css'
import PropTypes from 'prop-types';


const Titles = ({subTitles, title}) => {
  return (
    <div className='title'>
        <p>{subTitles}</p>
        <h2>{title}</h2>
    </div>
  )
}
Titles.propTypes = {
  title: PropTypes.string.isRequired,
  subTitles: PropTypes.string.isRequired,
};

export default Titles
