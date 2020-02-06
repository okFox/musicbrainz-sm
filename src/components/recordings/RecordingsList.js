import React from 'react';
import { RecordingsItem } from './RecordingsItem';


const recordingfetch = {
  'recording-offset': 0,
  'recording-count': 11,
  'recordings': [
    {
      'disambiguation': '',
      'video': false,
      'length': 220000,
      'title': 'On the Way',
      'id': '099aa2f8-6dbc-4e86-8900-17011cb56eb1'
    },
    {
      'length': 286000,
      'video': false,
      'disambiguation': '',
      'title': 'Waterfalls',
      'id': '1d2d44b8-a04a-4c5a-993b-2a311dc13880'
    },
    {
      'disambiguation': '',
      'video': false,
      'length': 213733,
      'title': 'Front Parlour',
      'id': '28590928-dc3c-4223-9074-27cd8900f909'
    }
  ]
};

export const RecordingsList = () => {
  const recordings = recordingfetch.recordings.map((recording) => (
    <li key={recording.id}><RecordingsItem  title={recording.title} id={recording.id} /></li>
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
