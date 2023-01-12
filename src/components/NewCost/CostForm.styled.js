import styled from '@emotion/styled';

export const ControlsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

export const Controls = styled.div`
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
`;

export const Actions = styled.div`
  text-align: left;
`;
