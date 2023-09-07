// import { useSelector } from 'react-redux';
import style from '../style/Profile.module.css';

function Profile() {
  // const { rocketsArray } = useSelector((state) => state.rockets);
  return (
    <div className={style.profileContainer}>
      <div className={style.profileMissions}>
        <h1>My Missions</h1>
        <div className={style.missionContainer}>
          <p>
            Lorem, ipsum dolor sit a
            met consectetur adipisicing elit. Dolore distinctio doloribus, num?
          </p>
          <p>
            Lorem, ipsum dolor sit a
            met consectetur adipisicing elit. Dolore distinctio doloribus, num?
          </p>
          <p>
            Lorem, ipsum dolor sit a
            met consectetur adipisicing elit. Dolore distinctio doloribus, num?
          </p>
          <p>
            Lorem, ipsum dolor sit a
            met consectetur adipisicing elit. Dolore distinctio doloribus, num?
          </p>
        </div>
      </div>
      <div className={style.profileRockets}>
        <h1>My Rockets</h1>
        <div className={style.rocketsContainer}>
          <p>
            Lorem, ipsum dolor sit a
            met consectetur adipisicing elit. Dolore distinctio doloribus, num?
          </p>
          <p>
            Lorem, ipsum dolor sit a
            met consectetur adipisicing elit. Dolore distinctio doloribus, num?
          </p>
          <p>
            Lorem, ipsum dolor sit a
            met consectetur adipisicing elit. Dolore distinctio doloribus, num?
          </p>
          <p>
            Lorem, ipsum dolor sit a
            met consectetur adipisicing elit. Dolore distinctio doloribus, num?
          </p>
          <p>
            Lorem, ipsum dolor sit a
            met consectetur adipisicing elit. Dolore distinctio doloribus, num?
          </p>
          <p>
            Lorem, ipsum dolor sit a
            met consectetur adipisicing elit. Dolore distinctio doloribus, num?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
