import { Actions, ControlsWrapper, Controls } from './CostForm.styled';

export const CostForm = () => {
  return (
    <form>
      <ControlsWrapper>
        <Controls>
          <label>Name</label>
          <input type="text" />
        </Controls>
        <Controls>
          <label>Sum</label>
          <input type="number" min="0.01" step="0.01" />
        </Controls>
        <Controls>
          <label>Date</label>
          <input type="date" min="2019-01-01" step="2022-12-31" />
        </Controls>

        <Actions>
          <button type="submit">Add costs</button>
        </Actions>
      </ControlsWrapper>
    </form>
  );
};
