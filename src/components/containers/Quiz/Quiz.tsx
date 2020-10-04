import React, { useState } from 'react';

import { ActiveQuestion } from '../../common/ActiveQuestion/ActiveQuestion';
import { InfoScreen } from '../../common/InfoScreen/InfoScreen';
import { StatusBar } from '../../common/StatusBar/StatusBar';

import modalIcon from '../../../assets/img/modal/hand.svg';

import './Quiz.scss';

const Quiz: React.FC = () => {
  // const totalReward = 0;
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [totalReward, setTotalReward] = useState(0);
  const [answerCurrentState, setAnswerCurrentState] = useState<any>(null); // id: 'success'
  const questionsList = [
    {
      id: '1',
      title: 'Everything in React is a ______',
      answersList: [
        { id: 'A', name: 'Module' },
        { id: 'B', name: 'Component' },
        { id: 'C', name: 'Package' },
        { id: 'D', name: 'Class' },
      ],
      rightAnswer: 'B',
      reward: 500,
    },
    {
      id: '2',
      title: 'In which directory React Components are saved?',
      answersList: [
        { id: 'A', name: 'Inside js/components/' },
        { id: 'B', name: 'Inside vendor/components/' },
        { id: 'C', name: 'Inside external/components/' },
        { id: 'D', name: ' Inside vendor/' },
      ],
      rightAnswer: 'A',
      reward: 1000,
    },
    {
      id: '3',
      title: 'What is Babel?',
      answersList: [
        { id: 'A', name: 'A transpiler' },
        { id: 'B', name: 'An interpreter' },
        { id: 'C', name: 'A Compiler' },
        { id: 'D', name: 'Both Compiler and Transpilar' },
      ],
      rightAnswer: 'D',
      reward: 2000,
    },
    {
      id: '4',
      title: 'How many elements does a react component return?',
      answersList: [
        { id: 'A', name: '2 Elements' },
        { id: 'B', name: '1 Element' },
        { id: 'C', name: 'Multiple Elements' },
        { id: 'D', name: 'None of These' },
      ],
      rightAnswer: 'C',
      reward: 4000,
    },
    {
      id: '5',
      title: 'What is React?',
      answersList: [
        { id: 'A', name: 'Server side Framework' },
        { id: 'B', name: 'User-interface framework' },
        { id: 'C', name: 'A Library for building interaction interfaces' },
        { id: 'D', name: 'None of These' },
      ],
      rightAnswer: 'C',
      reward: 8000,
    },
    {
      id: '6',
      title: 'In React what is used to pass data to a component from outside?',
      answersList: [
        { id: 'A', name: 'setState' },
        { id: 'B', name: 'render with arguments' },
        { id: 'C', name: 'props' },
        { id: 'D', name: 'PropTypes' },
      ],
      rightAnswer: 'C',
      reward: 16000,
    },
    {
      id: '7',
      title: 'Props are _____ into other components',
      answersList: [
        { id: 'A', name: 'Methods' },
        { id: 'B', name: 'Injected' },
        { id: 'C', name: 'Both 1 & 2' },
        { id: 'D', name: 'All of the above' },
      ],
      rightAnswer: 'C',
      reward: 32000,
    },
    {
      id: '8',
      title: 'What is React.js in MVC?',
      answersList: [
        { id: 'A', name: 'Middleware' },
        { id: 'B', name: 'Controller' },
        { id: 'C', name: 'Model' },
        { id: 'D', name: 'Router' },
      ],
      rightAnswer: 'B',
      reward: 64000,
    },
    {
      id: '9',
      title: 'React.js uses ___ to increase performance',
      answersList: [
        { id: 'A', name: 'Original DOM' },
        { id: 'B', name: 'Virtual DOM' },
        { id: 'C', name: 'Both 1 & 2' },
        { id: 'D', name: 'None of above' },
      ],
      rightAnswer: 'B',
      reward: 125000,
    },
    {
      id: '10',
      title: 'Keys are given to a list of elements in react. These keys should be - ',
      answersList: [
        { id: 'A', name: 'Do not requires to be unique' },
        { id: 'B', name: 'Unique in the DOM' },
        { id: 'C', name: 'Unique among the siblings only' },
        { id: 'D', name: 'All of the above' },
      ],
      rightAnswer: 'C',
      reward: 250000,
    },
    {
      id: '11',
      title: 'Who Develop React.js?',
      answersList: [
        { id: 'A', name: 'Apple' },
        { id: 'B', name: 'Facebook' },
        { id: 'C', name: 'Twitter' },
        { id: 'D', name: 'Google' },
      ],
      rightAnswer: 'B',
      reward: 500000,
    },
    {
      id: '12',
      title: '..... helps react for keeping their data unidirectional.',
      answersList: [
        { id: 'A', name: 'JSX' },
        { id: 'B', name: 'Flux' },
        { id: 'C', name: 'Dom' },
        { id: 'D', name: 'Props' },
      ],
      rightAnswer: 'B',
      reward: 1000000,
    },
  ];

  const sidebarQuestionsList = questionsList.map((q) => {
    let status = 'default';
    if (activeQuestion + 1 === Number(q.id)) {
      status = 'active';
    } else if (activeQuestion < Number(q.id)) {
      status = 'inactive';
    }
    return { id: q.id, reward: q.reward, status };
  });
  const isQuizFinished = () => {
    return activeQuestion + 1 === questionsList.length;
  };

  const onStartHandler = () => {
    setIsStart(true);
  };
  const onResetHandler = () => {
    setIsStart(false);
    setIsFinished(false);
    setTotalReward(0);
    setAnswerCurrentState(null);
    setActiveQuestion(0);
  };

  const onSelectAnswerHandler = (id: string) => {
    const question = questionsList[activeQuestion];
    if (answerCurrentState !== null) {
      return;
    }

    if (question.rightAnswer === id) {
      setTotalReward(totalReward + questionsList[activeQuestion].reward);
      setAnswerCurrentState({
        id,
        status: 'correct',
      });

      const timout = window.setTimeout(() => {
        if (isQuizFinished()) {
          console.log('finished');
          setIsFinished(true);
        } else {
          setActiveQuestion(activeQuestion + 1);
          setAnswerCurrentState(null);
        }
        window.clearTimeout(timout);
      }, 1000);
    } else {
      setAnswerCurrentState({
        id,
        status: 'wrong',
      });
      const timout = window.setTimeout(() => {
        setIsFinished(true);
        window.clearTimeout(timout);
      }, 1000);
    }
  };

  return (
    <>
      {isStart === true && isFinished === false && (
        <div className="quiz">
          <div className="quiz__question">
            <ActiveQuestion
              title={questionsList[activeQuestion].title}
              answersList={questionsList[activeQuestion].answersList}
              onSelect={onSelectAnswerHandler}
              answerCurrentState={answerCurrentState}
            />
          </div>
          <div className="quiz__sidebar">
            <StatusBar questionsList={sidebarQuestionsList} />
          </div>
        </div>
      )}
      {isStart === false && (
        <InfoScreen
          title="Who wants to be a millionaire?"
          buttonName="Start"
          imageUrl={modalIcon}
          onButtonClick={onStartHandler}
          bgColor="pink"
        />
      )}
      {isFinished === true && (
        <InfoScreen
          title={`$${totalReward} earned`}
          subtitle="Total score:"
          buttonName="Try again"
          imageUrl={modalIcon}
          onButtonClick={onResetHandler}
          bgColor="pink"
        />
      )}
    </>
  );
};

export { Quiz };
