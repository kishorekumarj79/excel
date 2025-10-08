import styled from 'styled-components';

export const QacContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const QacWrapper = styled.div`
  border: 2px solid #000;
  width: 100%;
  background-color: white;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  background-color: #f3f4f6;
  border-bottom: 2px solid #000;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 60px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    width: 140px;
    height: 80px;
    margin: 0;
  }
`;

export const MainTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  color: #000;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 20px;
    flex: 1;
  }
`;

export const TitleActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  select {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    min-width: 100px;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
    flex-wrap: nowrap;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  white-space: nowrap;

  @media (min-width: 768px) {
    padding: 6px 12px;
  }
`;

export const BtnBlue = styled(AddBtn)`
  background-color: #2563eb;
  &:hover {
    background-color: #1d4ed8;
  }
`;
