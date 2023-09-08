import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/MissionsSlice';

const Mission = ({
  mission,
  // join,
  // leave,
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
    // if (mission.reserved) {
    //   leave(mission);
    // } else {
    //   join(mission);
    // }
    setButtonClicked(true);
  };

  const missionStatusClass = mission.reserved
    ? 'mission-reserved'
    : 'mission-not-reserved';

  const buttonClass = mission.reserved
    ? `leave ${buttonClicked ? 'leave-clicked' : ''}`
    : `join ${buttonClicked ? 'join-clicked' : ''}`;

  return (
    <tr onClick={handleButtonClick}>
      <td className="mission-name">{mission.mission_name}</td>
      <td className="mission-description">{mission.description}</td>
      <td className="mission-status">
        <span className={`${missionStatusClass} ${buttonClicked ? 'mission-status-clicked' : ''}`}>
          {mission.reserved ? 'Active member' : 'Not a member'}
        </span>
      </td>
      <td className="mission-button">
        <button
          className={buttonClass}
          type="button"
          onClick={handleButtonClick}
        >
          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
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
  // join: PropTypes.func.isRequired,
  // leave: PropTypes.func.isRequired,
};

export default Mission;
