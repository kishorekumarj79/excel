import styled from "styled-components";

  export const FooterSectionStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 2px solid #000;
  `;

  export const FooterColumn = styled.div`
    padding: 15px;
    border-right: 1px solid #000;
    &:last-child {
      border-right: none;
    }
  `;

  export const FooterTitle = styled.div`
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 13px;
    color: #000;
  `;

  export const FooterSubtitle = styled.div`
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 12px;
    color: #000;
  `;

  export const SmallBtn = styled.button`
    padding: 4px 8px;
    font-size: 11px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;