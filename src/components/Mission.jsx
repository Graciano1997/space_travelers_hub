import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/MissionsSlice';
import style from '../assets/style/missions.module.css';

const Mission = ({
  mission,
}) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [reserved, setReserved] = useState(false);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (!reserved) {
      dispatch(joinMission(mission.mission_id));
      setReserved(true);
    } else {
      dispatch(leaveMission(mission.mission_id));
      setReserved(false);
    }
    setButtonClicked(true);
  };

  const missionStatusClass = mission.reserved
    ? 'mission-reserved'
    : 'mission-not-reserved';

  return (
    <tr>
      <td className="mission-name">{mission.mission_name}</td>
      <td className="mission-descriptionContainer">{mission.description}</td>
      <td className="mission-status">
        <Badge bg={mission.reserved ? 'primary' : 'secondary'}>
          <span className={`${missionStatusClass} ${buttonClicked ? 'mission-status-clicked' : ''}`}>
            {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
          </span>
        </Badge>

      </td>
      <td className="mission-button joinButton">
        <Button variant={mission.reserved ? 'outline-danger' : 'outline-secondary'} onClick={handleButtonClick} className={style.btnJoinMission}>
          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
        </Button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    mission_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
