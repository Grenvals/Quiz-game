import React from 'react';

import { Quiz } from './components/containers/Quiz/Quiz';

import './scss/global.scss';
import './scss/main.scss';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__wrap">
        <Quiz />
      </div>
    </div>
  );
};

export default App;
