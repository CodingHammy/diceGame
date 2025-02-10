import { useState } from 'react';
import checkGuess from '../logic/GameLogic';

export default function useGame() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [isEqual, setIsEqual] = useState(false);
  const [usersGuess, setUsersGuess] = useState(null);

  const playGame = guess => {
    const generateNumber = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(generateNumber);
    setUsersGuess(guess);
    setIsEqual(checkGuess(guess, generateNumber));
  };

  return { usersGuess, randomNumber, isEqual, playGame };
}
