import React from 'react';
import './HBanner.scss';

function HBanner({head,desc}) {
  return (
    <div className="HBanner">
        <div className="container1">
            <h1 className="Hheading">{head}</h1>
            <p className="description">{desc}</p>
        </div>
    </div>
  )
}

export default HBanner