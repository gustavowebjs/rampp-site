import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  min-height: 400px;
`;

export const Title = styled.h2`
  font-size: 34px;
  color: #0c084b;
  margin-bottom: 0;
  text-align: center;
  > div {
    width: 50px;
    margin: 0 auto;
    height: 5px;
    margin-top: 30px;
    margin-bottom: 20px;
    background-color: #00b7a8;
  }
`;

export const SmallText = styled.p`
  color: #666;
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
  width: 70%;
  margin: 30px auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const ColumnServices = styled.div`
  margin: 0 auto;
  width: 100%;
  > div {
    padding: 10px;
  }
  > div ul {
    padding: 0;
  }
  > div ul li button {
    background: transparent;
    border: none;
    font-size: 16px;
    color: #0c084b;
    font-weight: bold;
    cursor: pointer;
  }
  > div ul li {
    border-left: solid #00b7a8 5px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
    padding: 25px;
    border-radius: 10px;
    -webkit-box-shadow: -5px 6px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: -5px 6px 5px 0px rgba(0, 0, 0, 0.2);
    box-shadow: -5px 6px 5px 0px rgba(0, 0, 0, 0.2);
    margin-top: 15px;
  }
  > div ul li svg {
    font-size: 32px;
    color: #0c084b;
  }
`;

export const ColumnImage = styled.div`
  margin: 0 auto;
`;
