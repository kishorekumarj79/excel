import styled from 'styled-components';

export const QacContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  padding: 20px;
  overflow-x: auto;
`;

export const QacWrapper = styled.div`
  border: 2px solid #000;
  min-width: 1600px;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #f3f4f6;
  border-bottom: 2px solid #000;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 80px;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const MainTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  flex: 1;
  margin: 0;
  color: #000;
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
`;

export const BtnBlue = styled(AddBtn)`
  background-color: #2563eb;
  &:hover {
    background-color: #1d4ed8;
  }
`;
