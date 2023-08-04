import React from 'react';

import './app.css';
import { PlaygroundEditor } from './components';

function AppContainer(): React.ReactElement {
  return (
    <div className={'app-container'}>
      <PlaygroundEditor />
    </div>
  );
}

export default AppContainer;
