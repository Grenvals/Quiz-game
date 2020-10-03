import React from 'react';

import { InfoScreen } from './components/common/InfoScreen/InfoScreen';

import modalIcon from './assets/img/modal/hand.svg';

import './scss/global.scss';
import './scss/main.scss';
import './App.scss';

const App: React.FC = () => {
  const onButtonClick = () => {
    console.log('click');
  };
  return (
    <div className="app">
      <div className="app__wrap">
        <InfoScreen
          title="Who wants to be a millionaire?"
          subtitle="Score"
          imageUrl={modalIcon}
          onButtonClick={onButtonClick}
          bgColor="pink"
        />
      </div>
    </div>
  );
};

export default App;
