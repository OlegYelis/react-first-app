import React, { useState } from 'react';
import { Actions, ControlsWrapper, Controls } from './CostForm.styled';

export const CostForm = () => {
  const [inputName, setInputName] = useState('');
  const [inputSum, setInputSum] = useState('');
  const [inputDate, setInputDate] = useState('');

  const nameChangeHandler = evt => {
    setInputName(evt.target.value);
  };

  const sumChangeHandler = evt => {
    setInputSum(evt.target.value);
  };

  const dateChangeHandler = evt => {
    setInputDate(evt.target.value);
  };

  const submitHandler = evt => {
    evt.preventDefault();

    const costData = {
      name: inputName,
      sum: inputSum,
      date: new Date(inputDate),
    };

    console.log(costData);
    setInputName('');
    setInputSum('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <ControlsWrapper>
        <Controls>
          <label>Name</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </Controls>
        <Controls>
          <label>Sum</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputSum}
            onChange={sumChangeHandler}
          />
        </Controls>
        <Controls>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </Controls>

        <Actions>
          <button type="submit">Add costs</button>
        </Actions>
      </ControlsWrapper>
    </form>
  );
};
