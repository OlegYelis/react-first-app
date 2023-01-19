import styled from '@emotion/styled';

export const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
  margin-bottom: 1rem;
  text-align: left;
  align-items: center;

  @media screen and (min-width: 1131px) {
    flex-direction: row;
  }
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

    @media screen and (max-width: 400px) {
      width: 17rem;
    }

    @media screen and (min-width: 671px) {
      width: 25rem;
    }

    @media screen and (min-width: 1131px) {
      width: 20rem;
    }
  }
`;

export const Actions = styled.div`
  text-align: left;
  margin: 0 auto;
`;
