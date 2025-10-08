import styled from "styled-components";

export const TotalRowStyled = styled.div`
  display: flex;
  background-color: #fef3c7;
  border-bottom: 2px solid #000;
  padding: 12px 10px;
  flex-wrap: wrap;
  gap: 8px;

  @media (min-width: 768px) {
    padding: 10px;
    flex-wrap: nowrap;
    gap: 0;
  }
`;

export const TotalLabel = styled.div`
  width: 100%;
  font-weight: bold;
  color: #000;
  text-align: center;
  font-size: 14px;
  padding: 4px 0;

  @media (min-width: 768px) {
    width: 450px;
    border-right: 1px solid #000;
    padding-right: 10px;
    padding: 0;
  }
`;

export const TotalFill = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    flex: 1;
    text-align: center;
    color: #000;
    border-right: 1px solid #000;
  }
`;

export const TotalZero = styled.div`
  width: 90px;
  text-align: center;
  font-weight: 600;
  color: #000;
  border-right: 1px solid #000;
  padding: 0 10px;
`;

export const TotalAmount = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #000;
  padding: 4px 10px;

  @media (min-width: 768px) {
    width: 130px;
    text-align: right;
    font-size: 16px;
    padding-right: 10px;
  }
`;