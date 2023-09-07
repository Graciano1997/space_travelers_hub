import PropTypes from 'prop-types';

import style from '../style/Rocket.module.css';

const RocketItem = ({
  id, name, description, imageRocket,
}) => (
  <div className={style.rocketItem}>
    <div className={style.rocketImageContainer}><img src={imageRocket[0]} alt="rocket" /></div>
    <div className={style.rocketBody}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{id}</p>
      <button type="button" aria-label="reserve / calncel  rocket">Reserve Rocket</button>
    </div>
  </div>
);

RocketItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
  imageRocket: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RocketItem;
