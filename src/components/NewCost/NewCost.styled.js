import styled from '@emotion/styled';

export const NewCostWrapper = styled.div`
  background-color: #aac4d1;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 1120px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.25);

  button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #2a5b84;
    background-color: #2a5b84;
    color: #ffffff;
    border-radius: 10px;
    margin-right: 3px;
  }

  button:hover,
  button:active {
    background-color: #2a5c84b2;
    border-color: #2a5c84b2;
  }
`;
