import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/MissionsSlice';
import Mission from './Mission';
import styles from '../assets/style/missions.module.css';
import style from '../assets/style/Info.module.css';

function Missions() {
  const dispatch = useDispatch();
  const { missions, error, loading } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (loading) {
    return (
      <div className={style.isLoading}>
        <h2>Loading👨‍🚀👩🏿‍🚀...</h2>
      </div>
    );
  }

  const missionsAvailable = missions;

  return (
    <table className={styles['mission-table']}>
      <thead>
        <tr>
          <th className={styles['mission-name']}>Mission</th>
          <th className={styles['mission-description']}>Description</th>
          <th className={styles['mission-status']}>Status</th>
          <th className={styles['mission-button']}>{' '}</th>
        </tr>
      </thead>
      <tbody>
        {missionsAvailable.map((mission) => (
          <Mission
            mission={mission}
            key={mission.mission_id}
            styles={styles}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Missions;
