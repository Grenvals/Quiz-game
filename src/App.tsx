import React from 'react';

import { QuizGame } from './components/containers/QuizGame/QuizGame';

import './scss/global.scss';
import './scss/main.scss';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__wrap">
        <QuizGame />
      </div>
    </div>
  );
};

export default App;
