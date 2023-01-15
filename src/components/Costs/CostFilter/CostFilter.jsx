import { FilterControl, FilterWrapper } from './CostFilter.styled';

export const CostsFilter = props => {
  const yearChangeHandler = evt => {
    props.onChangeYear(evt.target.value);
  };

  return (
    <FilterWrapper>
      <FilterControl>
        <label>Selection by year</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </FilterControl>
    </FilterWrapper>
  );
};
