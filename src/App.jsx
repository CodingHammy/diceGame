import './App.css';
import GuessForm from './components/GuessForm';
import ResultsDisplay from './components/ResultsDisplay';
import checkGuess from './components/GameLogic';
import { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [isEqual, setIsEqual] = useState(false);
  const [usersGuess, setUsersGuess] = useState(null);

  const handleGame = guess => {
    const generateNumber = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(generateNumber);
    setUsersGuess(guess);
    setIsEqual(checkGuess(guess, generateNumber));
  };

  return (
    <div className='bg-red-500 font-bold flex items-center flex-col'>
      <h2>guess the number 1-10</h2>
      <GuessForm onSubmit={handleGame} />
      <ResultsDisplay
        usersGuess={usersGuess}
        randomNumber={randomNumber}
        isEqual={isEqual}
      />
    </div>
  );
}

export default App;
