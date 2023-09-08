import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/style/missions.module.css';

const Mission = ({
  mission,
  join,
  leave,
  mobile,
}) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    if (mission.reserved) {
      leave(mission);
    } else {
      join(mission);
    }
    setButtonClicked(true);
  };

  const missionStatusClass = mission.reserved
    ? 'mission-reserved'
    : 'mission-not-reserved';

  const buttonClass = mission.reserved
    ? `leave ${buttonClicked ? 'leave-clicked' : ''}`
    : `join ${buttonClicked ? 'join-clicked' : ''}`;

  if (mobile) {
    return (
      <div className="mission">
        <h4 className="mission-name">
          <span>{mission.mission_name}</span>
        </h4>
        <p className="mission-description">
          <span>{mission.description}</span>
        </p>
        <p className="mission-status">
          <span className={`${missionStatusClass} ${buttonClicked ? 'mission-status-clicked' : ''}`}>
            {mission.reserved ? 'Active member' : 'Not a member'}
          </span>
        </p>
        <div className="action-buttons">
          <button
            className={buttonClass}
            type="button"
            onClick={handleButtonClick}
          >
            {mission.reserved ? 'Leave Mission' : 'Join Mission'}
          </button>
        </div>
      </div>
    );
  }
  return (
    <tr>
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
  }).isRequired,
  join: PropTypes.func.isRequired,
  leave: PropTypes.func.isRequired,
  mobile: PropTypes.bool.isRequired,
};

export default Mission;
