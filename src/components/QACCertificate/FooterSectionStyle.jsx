import styled from "styled-components";

export const FooterSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #000;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FooterColumn = styled.div`
  padding: 15px 10px;
  border-bottom: 1px solid #000;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    padding: 15px;
    border-right: 1px solid #000;
    border-bottom: none;

    &:last-child {
      border-right: none;
    }
  }
`;

export const FooterTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 12px;
  color: #000;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const FooterSubtitle = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 5px;
  font-size: 11px;
  color: #000;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const SmallBtn = styled.button`
  padding: 8px 12px;
  font-size: 12px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;

  @media (min-width: 768px) {
    padding: 4px 8px;
    font-size: 11px;
  }
`;