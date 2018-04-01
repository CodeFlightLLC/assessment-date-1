import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

import Toggle from './Toggle';
import AssignmentTile from './AssignmentTile';

const App = () => {
  return (
    <div>
      <Toggle isOn={true} />
      <AssignmentTile />
    </div>
  );
};

render(<App />, document.getElementById('root'));
