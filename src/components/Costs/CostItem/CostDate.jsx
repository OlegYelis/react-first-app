import { DateWrapper, Day, Month, Year } from './CostItem.styled';

export const CostDate = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <DateWrapper>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </DateWrapper>
  );
};
