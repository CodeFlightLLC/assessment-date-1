import React from 'react';

import './Toggle.scss';

export default ({ isOn }) => (
  <div className={` toggle ${isOn ? 'on' : 'off'}`}>
    <div className="nub" />
  </div>
);
