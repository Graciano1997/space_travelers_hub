import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';
import { bookingRockets } from '../redux/rockets/rocketsSlice';
import style from '../assets/style/Rocket.module.css';

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
        <p>
          {reserved && (
          <Badge bg="primary" className={style.badge}>
            Reserved
          </Badge>
          )}
          {description}
        </p>
        <Button as="button" variant={(reserved) ? 'outline-secondary' : 'primary'} onClick={handlerReserve} className={style.btnReserve}>
          {info}
        </Button>
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
