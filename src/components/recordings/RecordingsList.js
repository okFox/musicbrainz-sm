import React from 'react';
import PropTypes from 'prop-types';
import RecordingsItem from './RecordingsItem';

const RecordingsList = ({ recordingsArray }) => {
  const recordings = recordingsArray.map((recording, i) => (
    <li key={i}><RecordingsItem  recordingTitle={recording.recordingTitle} /></li>
  ));

  return (
    <>
      <section>
        <h1>Recordings</h1>
        <ul>
          {recordings}
        </ul>
      </section>
    </>      
  );
};

RecordingsList.propTypes = {
  recordingsArray: PropTypes.array.isRequired
};

export default RecordingsList;
