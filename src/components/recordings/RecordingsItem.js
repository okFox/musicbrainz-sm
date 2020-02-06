import React from 'react';
import PropTypes from 'prop-types';
// import { RecordingsList } from './RecordingsList';


export const RecordingsItem = ({ title }) => {
  return (

    <p>{title}</p>

  );
};
RecordingsItem.propTypes = {
  title: PropTypes.string.isRequired
};



