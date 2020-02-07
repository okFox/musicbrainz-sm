import React from 'react';
import PropTypes from 'prop-types';


const RecordingsItem = ({ recordingTitle }) => {
  return (
    <p>{recordingTitle}</p>

  );
};

RecordingsItem.propTypes = {
  recordingTitle: PropTypes.string.isRequired
};

export default RecordingsItem;
