import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import style from '../assets/style/Profile.module.css';

function Profile() {
  const { rocketsArray } = useSelector((state) => state.rockets);
  const reservedRockets = rocketsArray.filter((rocket) => rocket.reserved);

  const { missions } = useSelector((state) => state.missions);
  const reservedmissions = missions.filter((mission) => mission.reserved);

  return (
    <div className={style.profileContainer}>
      <div className={style.profileMissions}>
        <h1>My Missions</h1>
        <ListGroup className={style.missionContainer}>
          {(reservedmissions.length === 0) && (
            <ListGroup.Item><Alert variant="info">You don&apos;t have any reserved Misssions 👨‍🚀👩🏿‍🚀 </Alert></ListGroup.Item>
          )}

          {
            reservedmissions.map((mission, index) => (
              <ListGroup.Item key={{ index }}>
                {' '}
                {`${mission.mission_name}👩🏿‍🚀`}
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>

      <div className={style.profileRockets}>
        <h1>My Rockets</h1>
        <ListGroup className={style.rocketsContainer}>

          {(reservedRockets.length === 0) && (
            <ListGroup.Item><Alert variant="info">You don&apos;t have any reserved Rockets! 🚀😉😊</Alert></ListGroup.Item>
          )}

          {reservedRockets.map((rocket, index) => (
            <ListGroup.Item key={{ index }} title="rocketItem">
              {' '}
              {`${rocket.rocket_name}🚀`}
            </ListGroup.Item>
          ))}

        </ListGroup>
      </div>
    </div>
  );
}

export default Profile;
