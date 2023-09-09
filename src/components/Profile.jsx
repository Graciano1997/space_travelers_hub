import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import style from '../assets/style/Profile.module.css';

function Profile() {
  const { rocketsArray } = useSelector((state) => state.rockets);

  const { missions } = useSelector((state) => state.missions);

  return (
    <div className={style.profileContainer}>
      <div className={style.profileMissions}>
        <h1>My Missions</h1>
        <ListGroup className={style.missionContainer}>
          {(missions.filter((mission) => mission.reserved).length === 0) && (
            <ListGroup.Item><Alert variant="info">You don&apos;t have any reserved Misssions 👨‍🚀👩🏿‍🚀 </Alert></ListGroup.Item>
          )}

          {
            missions.filter((mission) => mission.reserved)
              .map((mission) => (
                <ListGroup.Item key={mission.mission_id}>
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

          {(rocketsArray.filter((rocket) => rocket.reserved).length === 0) && (
            <ListGroup.Item><Alert variant="info">You don&apos;t have any reserved Rockets! 🚀😉😊</Alert></ListGroup.Item>
          )}

          {rocketsArray.filter((rocket) => rocket.reserved)
            .map((rocket) => (
              <ListGroup.Item key={rocket.id} title="rocketItem">
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
