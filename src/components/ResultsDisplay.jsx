// eslint-disable-next-line react/prop-types
export default function ResultsDisplay({ usersGuess, randomNumber, isEqual }) {
  if (randomNumber === null) return null;

  return (
    <p className='text-xl mt-4'>
      {isEqual
        ? `YOU WIN! You guessed ${usersGuess}, and the number was ${randomNumber}`
        : `You lost! Your number was ${usersGuess}, but the correct number was ${randomNumber}`}
    </p>
  );
}
