import styled from '@emotion/styled';

export const ControlsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
  align-items: center;
`;

export const Controls = styled.div`
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: ${props => (props.invalid ? 'red' : 'inherit')};
  }

  input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
    outline: ${props => (props.invalid ? '1px solid red' : 'inherit')};
  }
`;

export const Actions = styled.div`
  text-align: left;
  margin: 0 auto;
`;
