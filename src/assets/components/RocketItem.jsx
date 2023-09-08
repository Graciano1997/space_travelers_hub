import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from '../style/Rocket.module.css';
import { bookingRockets } from '../redux/rockets/rocketsSlice';

function RocketItem({
  id, name, description, imageRocket, reserved,
}) {
  const dispatch = useDispatch();
  const handlerReserve = () => {
    dispatch(bookingRockets(id));
  };
  const info = (reserved) ? 'Cancel Reservation' : 'Reserve Rocket';
  return (
    <div className={style.rocketItem}>
      <div className={style.rocketImageContainer}><img src={imageRocket[0]} alt="rocket" /></div>
      <div className={style.rocketBody}>
        <h3>{name}</h3>
        {reserved && <div>Reserved</div>}
        <p>{description}</p>
        <button type="button" aria-label="reserve / calncel  rocket" onClick={handlerReserve}>{info}</button>
      </div>
    </div>
  );
}
RocketItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: (PropTypes.bool),
  imageRocket: PropTypes.arrayOf(PropTypes.string).isRequired,
};

RocketItem.defaultProps = {
  reserved: undefined,
};

export default RocketItem;
