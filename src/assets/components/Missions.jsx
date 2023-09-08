import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/MissionsSlice';
import Mission from './Mission';
import styles from '../style/missions.module.css';
// import style from '../style/Info.module.css';

function Missions() {
  const dispatch = useDispatch();
  const { missions, error } = useSelector((state) => state.missions);

  // const error = useSelector((state) => state.missions.error);
  // const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  // const joinHandler = (mission) => {
  //   // dispatch(joinMission(mission));
  //   dispatch(joinMission(mission));
  // };

  // const leaveHandler = (mission) => {
  //   dispatch(leaveMission(mission));
  // };

  // const renderMissions = () => {
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  // if (loading) {
  //   return (
  //     <div className={style.isLoading}>
  //       <h2>Loading👨‍🚀👩🏿‍🚀...</h2>
  //     </div>
  //   );
  // }

  const missionsAvailable = missions.slice(0, 5);

  return (
    <table className={styles['mission-table']}>
      <thead>
        <tr>
          <th className={styles['mission-name']}>Mission</th>
          <th className={styles['mission-description']}>Description</th>
          <th className={styles['mission-status']}>Status</th>
          <th className={styles['mission-button']}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {missionsAvailable.map((mission) => (
          <Mission
            mission={mission}
            // join={joinHandler(mission.mission_id)}
            // leave={leaveHandler(mission.mission_id)}
            key={mission.mission_id}
              // mobile={false}
            styles={styles}
          />
        ))}
      </tbody>
    </table>
  );
}

// return (
//   <div className={`w-100 p-4 ${styles.header}`}>
//     <div className={styles.missions}>
//       <h2>Missions</h2>
//     </div>
//     {renderMissions()}
//   </div>
// );
// }

export default Missions;
