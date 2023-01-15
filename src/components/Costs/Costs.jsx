import React, { useState } from 'react';
import { CostsWrapper } from './Costs.styled';
import { CostsFilter } from 'components/Costs/CostFilter/CostFilter';
import { CostsList } from './CostsList/CostsList';

export const Costs = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = year => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter(
    cost => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <CostsWrapper>
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostsList costs={filteredCosts} />
    </CostsWrapper>
  );
};
