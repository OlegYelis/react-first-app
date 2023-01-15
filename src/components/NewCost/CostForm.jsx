import React, { useState } from 'react';
import { Actions, ControlsWrapper, Controls } from './CostForm.styled';

export const CostForm = ({ onSaveCostData, onCancel }) => {
  const [inputDescription, setInputDescription] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const nameChangeHandler = evt => {
    setInputDescription(evt.target.value);
  };

  const sumChangeHandler = evt => {
    setInputAmount(evt.target.value);
  };

  const dateChangeHandler = evt => {
    setInputDate(evt.target.value);
  };

  const submitHandler = evt => {
    evt.preventDefault();

    const costData = {
      description: inputDescription,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    onSaveCostData(costData);
    setInputDescription('');
    setInputAmount('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <ControlsWrapper>
        <Controls>
          <label>Name</label>
          <input
            type="text"
            value={inputDescription}
            onChange={nameChangeHandler}
          />
        </Controls>
        <Controls>
          <label>Sum</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
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
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </Actions>
      </ControlsWrapper>
    </form>
  );
};
