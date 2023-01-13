import React, { useState } from 'react';
import { CostsFilter } from 'components/Costs/CostFilter/CostFilter';
import { CostItem } from 'components/Costs/CostItem/CostItem';
import { CostsWrapper } from './Costs.styled';

export const Costs = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = year => {
    console.log(year);
    setSelectedYear(year);
  };

  return (
    <CostsWrapper>
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      {costs.map((cost, index) => (
        <CostItem
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
          key={index}
        />
      ))}
    </CostsWrapper>
  );
};
