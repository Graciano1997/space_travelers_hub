import { useSelector } from 'react-redux';
import style from '../style/Profile.module.css';

function Profile() {
  const { rocketsArray } = useSelector((state) => state.rockets);
  const reservedRockets = rocketsArray.filter((rocket) => rocket.reserved);

  const { missions } = useSelector((state) => state.missions);
  const reservedmissions = missions.filter((mission) => mission.reserved);

  return (
    <div className={style.profileContainer}>
      <div className={style.profileMissions}>
        <h1>My Missions</h1>
        <div className={style.missionContainer}>
          {(reservedmissions.length === 0) && (
            <div>
              <h3>You don&apos;t have any reserved Misssions 🚀😉😊</h3>
            </div>
          )}

          {reservedmissions.map((mission, index) => (
            <div key={{ index }}>
              <h3>
                {' '}
                {`${mission.mission_name}🚀`}
              </h3>
            </div>
          ))}

        </div>
      </div>
      <div className={style.profileRockets}>
        <h1>My Rockets</h1>
        <div className={style.rocketsContainer}>
          {(reservedRockets.length === 0) && (
            <div>
              <h3>You don&apos;t have any reserved Rockets! 🚀😉😊</h3>
            </div>
          )}

          {reservedRockets.map((rocket, index) => (
            <div key={{ index }}>
              <h3 title="rocketItem">
                {' '}
                {`${rocket.rocket_name}🚀`}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Profile;
