import React from 'react';
import PropTypes from 'prop-types';
// import { RecordingsList } from './RecordingsList';


const RecordingsItem = ({ recordingTitle }) => {
  return (

    <p>{recordingTitle}</p>

  );
};
RecordingsItem.propTypes = {
  recordingTitle: PropTypes.string.isRequired
};

export default RecordingsItem;
