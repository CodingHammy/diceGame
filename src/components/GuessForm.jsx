import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function GuessForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value ? parseInt(e.target.value) : '');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue >= 1 && inputValue <= 10) {
      onSubmit(inputValue);
    } else {
      alert('Please enter Number Between 1 and 10');
    }
  };

  return (
    <form className='flex items-center flex-col gap-2'>
      <input
        type='number'
        className='bg-amber-300 mt-2 text-center'
        placeholder='guess number'
        value={inputValue}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className='rounded-2xl bg-green-300 m-2 p-1'
      >
        commit number and roll
      </button>
    </form>
  );
}
