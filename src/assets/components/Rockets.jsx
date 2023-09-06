import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';

function Rocket() {
  const { rocketsArray } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  if (rocketsArray.length !== 0) {
    
  }

  return (
    <div>
      {if rocketsArray.forEach((rocket) => {
        <div>{rocket.id}</div>;
      })}
    </div>
  );
}

export default Rocket;
