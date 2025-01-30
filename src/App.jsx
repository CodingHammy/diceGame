import './App.css';
import GuessForm from './components/GuessForm';
import ResultsDisplay from './components/ResultsDisplay';
import useGame from './states/useGame';

function App() {
  const { usersGuess, randomNumber, isEqual, playGame } = useGame();
  return (
    <div className='bg-red-500 font-bold flex items-center flex-col'>
      <h2>guess the number 1-10</h2>
      <GuessForm onSubmit={playGame} />
      <ResultsDisplay
        usersGuess={usersGuess}
        randomNumber={randomNumber}
        isEqual={isEqual}
      />
    </div>
  );
}

export default App;
