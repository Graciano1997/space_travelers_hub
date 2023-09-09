import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import RocketItem from './RocketItem';
import style from '../assets/style/Info.module.css';

function Rockets() {
  const { rocketsArray, isLoading, hasError } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketsArray.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rocketsArray]);

  if (isLoading) {
    return (
      <div className={style.isLoading}>
        <h2>Loading 🚀🚀👨‍🚀👩🏿‍🚀...</h2>
      </div>
    );
  }
  if (hasError) {
    return (
      <div className={style.hasError}>
        <h2>Network Issues 🛜</h2>
      </div>
    );
  }

  if (rocketsArray && rocketsArray.length > 0) {
    return (
      <div>
        {
          rocketsArray.map((rocket) => (
            <RocketItem
              key={rocket.id}
              id={rocket.id}
              name={rocket.rocket_name}
              description={rocket.description}
              imageRocket={rocket.flickr_images}
              type={rocket.rocket_type}
              reserved={rocket.reserved}
            />
          ))
        }
      </div>
    );
  }
}

export default Rockets;
