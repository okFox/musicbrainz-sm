import React from 'react';
import samplelyrics from './samplelyrics.json';
import ReactJSON from 'react-json-view';





function Lyrics({ lyrics }) {


  return (
    <section>
      <ReactJSON src={samplelyrics} />  
    </section>
  );
}



export default Lyrics;
