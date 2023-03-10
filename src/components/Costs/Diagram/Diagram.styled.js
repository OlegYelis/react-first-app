import styled from '@emotion/styled';

export const DiagramWrapper = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #ebc137;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;

  @media screen and (max-width: 400px) {
    height: 7rem;
  }
`;
