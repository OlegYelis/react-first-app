import React, { useState } from 'react';
import { Actions, ControlsWrapper, Controls } from './CostForm.styled';

export const CostForm = ({ onSaveCostData, onCancel }) => {
  const [inputDescription, setInputDescription] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const [isDescrValid, setIsDescrValid] = useState(true);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [isDataValid, setIsDataValid] = useState(true);

  const nameChangeHandler = evt => {
    setInputDescription(evt.target.value);
    setIsDescrValid(true);
  };

  const sumChangeHandler = evt => {
    setInputAmount(evt.target.value);
    setIsAmountValid(true);
  };

  const dateChangeHandler = evt => {
    setInputDate(evt.target.value);
    setIsDataValid(true);
  };

  const submitHandler = evt => {
    evt.preventDefault();

    if (
      inputDescription.trim().length === 0 ||
      inputAmount.trim().length === 0 ||
      inputDate.trim().length === 0
    ) {
      if (inputDescription.trim().length === 0) {
        setIsDescrValid(false);
      }
      if (inputAmount.trim().length === 0) {
        setIsAmountValid(false);
      }
      if (inputDate.trim().length === 0) {
        setIsDataValid(false);
      }
      return;
    }

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
        <Controls invalid={!isDescrValid}>
          <label>Name</label>
          <input
            type="text"
            value={inputDescription}
            onChange={nameChangeHandler}
          />
        </Controls>
        <Controls invalid={!isAmountValid}>
          <label>Sum</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={sumChangeHandler}
          />
        </Controls>
        <Controls invalid={!isDataValid}>
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
