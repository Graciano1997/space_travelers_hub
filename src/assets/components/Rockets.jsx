import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import RocketItem from './RocketItem';

function Rockets() {
  const { rocketsArray } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

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
            />
          ))
        }
      </div>
    );
  }
}

export default Rockets;
