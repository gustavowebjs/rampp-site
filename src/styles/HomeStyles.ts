import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  background-color: #fff;
`;

export const Row = styled.div`
  max-width: 1200px;
  padding: 30px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const TextColumn = styled.div`
  padding: 20px;
  > h1 {
    font-size: 36px;
    color: #0c084b;
    font-weight: 700;
  }
  > p {
    color: #0c084b;
    font-size: 22px;
  }
  > div {
    height: 5px;
    width: 10%;
    background: #ccc;
    margin: 10px 0;
  }
  > a {
    display: relative;
    top: 10px;
    font-size: 18px;
    background-color: #00b7a8;
    padding: 20px 40px;
    border-radius: 5px;
    color: #fff;
  }
`;
